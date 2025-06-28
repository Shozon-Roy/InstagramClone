import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchItem, SearchCategory, SearchHistory } from '@/types/user';
import { SEARCH_SUGGESTIONS, SEARCH_CATEGORIES, EXPLORE_POSTS } from '@/mocks/search';

interface SearchState {
  searchQuery: string;
  searchHistory: SearchHistory[];
  searchResults: SearchItem[];
  searchSuggestions: SearchItem[];
  searchCategories: SearchCategory[];
  activeCategory: string;
  explorePosts: string[];
  isSearching: boolean;
  
  setSearchQuery: (query: string) => void;
  addToSearchHistory: (term: string) => void;
  clearSearchHistory: () => void;
  removeFromSearchHistory: (id: string) => void;
  setActiveCategory: (categoryId: string) => void;
  toggleSearching: (isSearching: boolean) => void;
  performSearch: (query: string) => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set, get) => ({
      searchQuery: '',
      searchHistory: [],
      searchResults: [],
      searchSuggestions: SEARCH_SUGGESTIONS,
      searchCategories: SEARCH_CATEGORIES,
      activeCategory: SEARCH_CATEGORIES[0].id,
      explorePosts: EXPLORE_POSTS,
      isSearching: false,
      
      setSearchQuery: (query: string) => 
        set(() => ({ searchQuery: query })),
      
      addToSearchHistory: (term: string) => {
        if (!term.trim()) return;
        
        set((state) => {
          // Check if term already exists in history
          const existingIndex = state.searchHistory.findIndex(
            item => item.term.toLowerCase() === term.toLowerCase()
          );
          
          let newHistory = [...state.searchHistory];
          
          // If exists, remove it (to add it to the top)
          if (existingIndex !== -1) {
            newHistory.splice(existingIndex, 1);
          }
          
          // Add new term to the top
          newHistory.unshift({
            id: `h${Date.now()}`,
            term,
            timestamp: Date.now()
          });
          
          // Keep only the last 10 searches
          if (newHistory.length > 10) {
            newHistory = newHistory.slice(0, 10);
          }
          
          return { searchHistory: newHistory };
        });
      },
      
      clearSearchHistory: () => 
        set(() => ({ searchHistory: [] })),
      
      removeFromSearchHistory: (id: string) => 
        set((state) => ({
          searchHistory: state.searchHistory.filter(item => item.id !== id)
        })),
      
      setActiveCategory: (categoryId: string) => 
        set(() => ({ activeCategory: categoryId })),
      
      toggleSearching: (isSearching: boolean) => 
        set(() => ({ isSearching })),
      
      performSearch: (query: string) => {
        if (!query.trim()) {
          set(() => ({ searchResults: [] }));
          return;
        }
        
        const lowerQuery = query.toLowerCase();
        
        // Filter suggestions based on query
        const results = get().searchSuggestions.filter(item => {
          if (item.type === 'user') {
            return item.title.toLowerCase().includes(lowerQuery) || 
                  (item.subtitle && item.subtitle.toLowerCase().includes(lowerQuery));
          } else if (item.type === 'hashtag') {
            return item.title.toLowerCase().includes(lowerQuery);
          } else if (item.type === 'place') {
            return item.title.toLowerCase().includes(lowerQuery) || 
                  (item.subtitle && item.subtitle.toLowerCase().includes(lowerQuery));
          }
          return false;
        });
        
        set(() => ({ searchResults: results }));
        
        // Add to search history if there are results
        if (results.length > 0) {
          get().addToSearchHistory(query);
        }
      }
    }),
    {
      name: 'instagram-search-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        searchHistory: state.searchHistory,
      }),
    }
  )
);