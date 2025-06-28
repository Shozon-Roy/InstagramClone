import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Heart, MessageCircle, Send, Bookmark, BookmarkCheck, Heart as HeartFilled } from 'lucide-react-native';
import { formatTimeAgo } from '@/utils/time-format';
import { Post } from '@/types/post';
import Colors from '@/constants/colors';

interface PostFooterProps {
  post: Post;
  onLike: () => void;
  onUnlike: () => void;
  onSave: () => void;
  onUnsave: () => void;
  onComment: (text: string) => void;
}

export default function PostFooter({ 
  post, 
  onLike, 
  onUnlike, 
  onSave, 
  onUnsave, 
  onComment 
}: PostFooterProps) {
  const [commentText, setCommentText] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  
  const handleLikeToggle = () => {
    if (post.liked) {
      onUnlike();
    } else {
      onLike();
    }
  };
  
  const handleSaveToggle = () => {
    if (post.saved) {
      onUnsave();
    } else {
      onSave();
    }
  };
  
  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      onComment(commentText);
      setCommentText('');
      setShowCommentInput(false);
    }
  };
  
  const renderCaption = () => {
    const hashtagsRegex = /#[a-zA-Z0-9_]+/g;
    const parts = post.caption.split(hashtagsRegex);
    const hashtags = post.caption.match(hashtagsRegex) || [];
    
    return (
      <Text style={styles.captionText}>
        <Text style={styles.username}>{post.user.username}</Text>{' '}
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {hashtags[index] && (
              <Text style={styles.hashtag}>{hashtags[index]}</Text>
            )}
          </React.Fragment>
        ))}
      </Text>
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={handleLikeToggle} style={styles.actionButton}>
            {post.liked ? (
              <HeartFilled size={24} color={Colors.light.like} fill={Colors.light.like} />
            ) : (
              <Heart size={24} color={Colors.light.icon} />
            )}
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setShowCommentInput(!showCommentInput)} 
            style={styles.actionButton}
          >
            <MessageCircle size={24} color={Colors.light.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Send size={24} color={Colors.light.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSaveToggle}>
          {post.saved ? (
            <BookmarkCheck size={24} color={Colors.light.icon} />
          ) : (
            <Bookmark size={24} color={Colors.light.icon} />
          )}
        </TouchableOpacity>
      </View>
      
      <View style={styles.likesContainer}>
        <Text style={styles.likesText}>
          {post.likes.toLocaleString()} likes
        </Text>
      </View>
      
      <View style={styles.captionContainer}>
        {renderCaption()}
      </View>
      
      {post.comments.length > 0 && (
        <TouchableOpacity style={styles.commentsContainer}>
          <Text style={styles.viewCommentsText}>
            View all {post.comments.length} comments
          </Text>
        </TouchableOpacity>
      )}
      
      {post.comments.length > 0 && (
        <View style={styles.latestCommentContainer}>
          <Text style={styles.commentText}>
            <Text style={styles.commentUsername}>
              {post.comments[post.comments.length - 1].username}
            </Text>{' '}
            {post.comments[post.comments.length - 1].text}
          </Text>
        </View>
      )}
      
      <Text style={styles.timestamp}>
        {formatTimeAgo(post.timestamp)} ago
      </Text>
      
      {showCommentInput && (
        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Add a comment..."
            placeholderTextColor={Colors.light.textSecondary}
            value={commentText}
            onChangeText={setCommentText}
            autoFocus
            returnKeyType="send"
            onSubmitEditing={handleCommentSubmit}
          />
          <TouchableOpacity 
            onPress={handleCommentSubmit}
            disabled={!commentText.trim()}
          >
            <Text 
              style={[
                styles.postButton, 
                !commentText.trim() && styles.postButtonDisabled
              ]}
            >
              Post
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  leftActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 16,
  },
  likesContainer: {
    marginBottom: 6,
  },
  likesText: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.light.text,
  },
  captionContainer: {
    marginBottom: 6,
  },
  captionText: {
    fontSize: 14,
    color: Colors.light.text,
    lineHeight: 18,
  },
  username: {
    fontWeight: '600',
  },
  hashtag: {
    color: Colors.light.primary,
  },
  commentsContainer: {
    marginBottom: 6,
  },
  viewCommentsText: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  latestCommentContainer: {
    marginBottom: 6,
  },
  commentText: {
    fontSize: 14,
    color: Colors.light.text,
  },
  commentUsername: {
    fontWeight: '600',
  },
  timestamp: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    marginTop: 4,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.light.border,
    paddingTop: 12,
  },
  commentInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.light.text,
  },
  postButton: {
    color: Colors.light.primary,
    fontWeight: '600',
    marginLeft: 8,
  },
  postButtonDisabled: {
    opacity: 0.5,
  },
});