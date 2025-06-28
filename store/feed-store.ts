import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Post, Story } from '@/types/post';
import { POSTS, STORIES } from '@/mocks/posts';

interface FeedState {
  posts: Post[];
  stories: Story[];
  likePost: (postId: string) => void;
  unlikePost: (postId: string) => void;
  savePost: (postId: string) => void;
  unsavePost: (postId: string) => void;
  viewStory: (storyId: string) => void;
  addComment: (postId: string, userId: string, username: string, text: string) => void;
}

export const useFeedStore = create<FeedState>()(
  persist(
    (set) => ({
      posts: POSTS,
      stories: STORIES,
      
      likePost: (postId: string) => 
        set((state) => ({
          posts: state.posts.map(post => 
            post.id === postId 
              ? { ...post, liked: true, likes: post.liked ? post.likes : post.likes + 1 } 
              : post
          )
        })),
      
      unlikePost: (postId: string) => 
        set((state) => ({
          posts: state.posts.map(post => 
            post.id === postId 
              ? { ...post, liked: false, likes: post.liked ? post.likes - 1 : post.likes } 
              : post
          )
        })),
      
      savePost: (postId: string) => 
        set((state) => ({
          posts: state.posts.map(post => 
            post.id === postId ? { ...post, saved: true } : post
          )
        })),
      
      unsavePost: (postId: string) => 
        set((state) => ({
          posts: state.posts.map(post => 
            post.id === postId ? { ...post, saved: false } : post
          )
        })),
      
      viewStory: (storyId: string) => 
        set((state) => ({
          stories: state.stories.map(story => 
            story.id === storyId ? { ...story, seen: true } : story
          )
        })),
      
      addComment: (postId: string, userId: string, username: string, text: string) => 
        set((state) => ({
          posts: state.posts.map(post => 
            post.id === postId 
              ? { 
                  ...post, 
                  comments: [
                    ...post.comments, 
                    {
                      id: `c${Date.now()}`,
                      userId,
                      username,
                      text,
                      timestamp: Date.now()
                    }
                  ]
                } 
              : post
          )
        })),
    }),
    {
      name: 'instagram-feed-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);