import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, UserPost, UserHighlight } from '@/types/user';
import { CURRENT_USER, USER_POSTS, USER_HIGHLIGHTS } from '@/mocks/profile';

interface ProfileState {
  userProfile: UserProfile;
  userPosts: UserPost[];
  userHighlights: UserHighlight[];
  activeTab: 'posts' | 'reels' | 'tagged';
  isEditing: boolean;
  updateProfile: (profile: Partial<UserProfile>) => void;
  setActiveTab: (tab: 'posts' | 'reels' | 'tagged') => void;
  toggleEditing: () => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      userProfile: CURRENT_USER,
      userPosts: USER_POSTS,
      userHighlights: USER_HIGHLIGHTS,
      activeTab: 'posts',
      isEditing: false,
      
      updateProfile: (profile: Partial<UserProfile>) => 
        set((state) => ({
          userProfile: { ...state.userProfile, ...profile }
        })),
      
      setActiveTab: (tab: 'posts' | 'reels' | 'tagged') => 
        set(() => ({ activeTab: tab })),
      
      toggleEditing: () => 
        set((state) => ({ isEditing: !state.isEditing })),
    }),
    {
      name: 'instagram-profile-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);