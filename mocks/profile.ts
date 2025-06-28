import { UserProfile, UserPost, UserHighlight } from '@/types/user';

export const CURRENT_USER: UserProfile = {
  id: 'user1',
  username: 'janedoe',
  fullName: 'Jane Doe',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
  bio: 'Photographer | Traveler | Coffee lover\nExploring the world one photo at a time ✈️',
  website: 'janedoe.portfolio.com',
  postsCount: 142,
  followersCount: 1243,
  followingCount: 568,
  verified: true,
  isPrivate: false
};

export const USER_POSTS: UserPost[] = [
  {
    id: 'p1',
    imageUrl: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    isVideo: false,
    hasMultipleImages: true,
    likesCount: 1243,
    commentsCount: 42
  },
  {
    id: 'p2',
    imageUrl: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    isVideo: false,
    hasMultipleImages: false,
    likesCount: 892,
    commentsCount: 23
  },
  {
    id: 'p3',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    isVideo: false,
    hasMultipleImages: false,
    likesCount: 756,
    commentsCount: 18
  },
  {
    id: 'p4',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    isVideo: false,
    hasMultipleImages: false,
    likesCount: 1102,
    commentsCount: 31
  },
  {
    id: 'p5',
    imageUrl: 'https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    isVideo: true,
    hasMultipleImages: false,
    likesCount: 2156,
    commentsCount: 87
  },
  {
    id: 'p6',
    imageUrl: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    isVideo: false,
    hasMultipleImages: true,
    likesCount: 943,
    commentsCount: 27
  },
  {
    id: 'p7',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    isVideo: false,
    hasMultipleImages: false,
    likesCount: 754,
    commentsCount: 19
  },
  {
    id: 'p8',
    imageUrl: 'https://images.unsplash.com/photo-1534695372029-ef92ff3651ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    isVideo: false,
    hasMultipleImages: false,
    likesCount: 1321,
    commentsCount: 45
  },
  {
    id: 'p9',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
    isVideo: false,
    hasMultipleImages: true,
    likesCount: 876,
    commentsCount: 32
  }
];

export const USER_HIGHLIGHTS: UserHighlight[] = [
  {
    id: 'h1',
    title: 'Travel',
    coverImage: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'h2',
    title: 'Food',
    coverImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'h3',
    title: 'Nature',
    coverImage: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'h4',
    title: 'Work',
    coverImage: 'https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
  }
];