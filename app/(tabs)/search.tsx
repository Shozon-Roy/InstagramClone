import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSearchStore } from '@/store/search-store';
import SearchBar from '@/components/search/SearchBar';
import SearchCategories from '@/components/search/SearchCategories';
import SearchHistory from '@/components/search/SearchHistory';
import SearchResults from '@/components/search/SearchResults';
import ExploreGrid from '@/components/search/ExploreGrid';
import Colors from '@/constants/colors';

export default function SearchScreen() {
  const { 
    searchQuery,
    searchHistory,
    searchResults,
    searchSuggestions,
    searchCategories,
    activeCategory,
    explorePosts,
    isSearching,
    setSearchQuery,
    addToSearchHistory,
    clearSearchHistory,
    removeFromSearchHistory,
    setActiveCategory,
    toggleSearching,
    performSearch
  } = useSearchStore();
  
  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    if (text.trim()) {
      performSearch(text);
    }
  };
  
  const handleSearchClear = () => {
    setSearchQuery('');
  };
  
  const handleSearchFocus = () => {
    toggleSearching(true);
  };
  
  const handleSearchBlur = () => {
    if (!searchQuery.trim()) {
      toggleSearching(false);
    }
  };
  
  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      performSearch(searchQuery);
      addToSearchHistory(searchQuery);
    }
  };
  
  const handleHistoryItemPress = (term: string) => {
    setSearchQuery(term);
    performSearch(term);
  };
  
  const handleResultPress = (item: any) => {
    // In a real app, this would navigate to the result
    console.log('Result pressed:', item);
  };
  
  const handleImagePress = (index: number) => {
    // In a real app, this would open the image detail
    console.log('Image pressed:', index);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <SearchBar
        value={searchQuery}
        onChangeText={handleSearchChange}
        onClear={handleSearchClear}
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        onSubmit={handleSearchSubmit}
        placeholder="Search"
      />
      
      {isSearching ? (
        <View style={styles.searchingContainer}>
          <SearchHistory
            history={searchHistory}
            onHistoryItemPress={handleHistoryItemPress}
            onClearHistory={clearSearchHistory}
            onRemoveHistoryItem={removeFromSearchHistory}
          />
          
          {searchQuery.trim() && (
            <SearchResults
              results={searchResults}
              onResultPress={handleResultPress}
            />
          )}
        </View>
      ) : (
        <View style={styles.exploreContainer}>
          <SearchCategories
            categories={searchCategories}
            activeCategory={activeCategory}
            onCategoryPress={setActiveCategory}
          />
          
          <ExploreGrid
            images={explorePosts}
            onImagePress={handleImagePress}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchingContainer: {
    flex: 1,
  },
  exploreContainer: {
    flex: 1,
  },
});