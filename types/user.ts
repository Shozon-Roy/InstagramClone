export interface UserProfile {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  bio: string;
  website?: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  verified: boolean;
  isPrivate: boolean;
  isFollowing?: boolean;
}

export interface UserPost {
  id: string;
  imageUrl: string;
  isVideo: boolean;
  hasMultipleImages: boolean;
  likesCount: number;
  commentsCount: number;
}

export interface UserHighlight {
  id: string;
  title: string;
  coverImage: string;
}

export interface SearchItem {
  id: string;
  type: 'user' | 'hashtag' | 'place' | 'post';
  imageUrl: string;
  title: string;
  subtitle?: string;
  isPopular?: boolean;
}

export interface SearchCategory {
  id: string;
  name: string;
}

export interface SearchHistory {
  id: string;
  term: string;
  timestamp: number;
}