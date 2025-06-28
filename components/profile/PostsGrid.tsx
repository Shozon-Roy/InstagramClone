import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Dimensions, Text } from 'react-native';
import { Image } from 'expo-image';
import { Layers, Play } from 'lucide-react-native';
import { UserPost } from '@/types/user';
import Colors from '@/constants/colors';

interface PostsGridProps {
  posts: UserPost[];
  onPostPress: (postId: string) => void;
}

const { width } = Dimensions.get('window');
const itemSize = width / 3;
const gap = 1;

export default function PostsGrid({ posts, onPostPress }: PostsGridProps) {
  const renderItem = ({ item }: { item: UserPost }) => (
    <TouchableOpacity 
      style={styles.gridItem}
      onPress={() => onPostPress(item.id)}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
        contentFit="cover"
      />
      
      {item.isVideo && (
        <View style={styles.videoIndicator}>
          <Play size={16} color="white" fill="white" />
        </View>
      )}
      
      {item.hasMultipleImages && (
        <View style={styles.multipleIndicator}>
          <Layers size={16} color="white" />
        </View>
      )}
    </TouchableOpacity>
  );

  if (posts.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No posts yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
      contentContainerStyle={styles.gridContainer}
      scrollEnabled={false} // The parent ScrollView will handle scrolling
    />
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    paddingBottom: 20,
  },
  gridItem: {
    width: itemSize - gap * 2,
    height: itemSize - gap * 2,
    margin: gap,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  videoIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  multipleIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  emptyContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: Colors.light.textSecondary,
  },
});