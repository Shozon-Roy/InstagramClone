export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  verified: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  text: string;
  timestamp: number;
}

export interface Post {
  id: string;
  user: User;
  images: string[];
  caption: string;
  hashtags: string[];
  likes: number;
  comments: Comment[];
  timestamp: number;
  location?: string;
  saved: boolean;
  liked: boolean;
}

export interface Story {
  id: string;
  user: User;
  seen: boolean;
  timestamp: number;
}