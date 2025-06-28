import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Post as PostType } from '@/types/post';
import PostHeader from './PostHeader';
import ImageCarousel from './ImageCarousel';
import PostFooter from './PostFooter';
import { useFeedStore } from '@/store/feed-store';

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  const { likePost, unlikePost, savePost, unsavePost, addComment } = useFeedStore();
  
  const handleLike = () => {
    likePost(post.id);
  };
  
  const handleUnlike = () => {
    unlikePost(post.id);
  };
  
  const handleSave = () => {
    savePost(post.id);
  };
  
  const handleUnsave = () => {
    unsavePost(post.id);
  };
  
  const handleComment = (text: string) => {
    // In a real app, you would use the current user's ID and username
    addComment(post.id, 'currentUser', 'currentuser', text);
  };
  
  return (
    <View style={styles.container}>
      <PostHeader user={post.user} location={post.location} />
      <ImageCarousel 
        images={post.images} 
        onDoubleTap={handleLike}
      />
      <PostFooter 
        post={post}
        onLike={handleLike}
        onUnlike={handleUnlike}
        onSave={handleSave}
        onUnsave={handleUnsave}
        onComment={handleComment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 8,
  },
});