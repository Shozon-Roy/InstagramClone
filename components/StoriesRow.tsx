import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import StoryCircle from './StoryCircle';
import { useFeedStore } from '@/store/feed-store';

export default function StoriesRow() {
  const { stories, viewStory } = useFeedStore();
  
  const handleStoryPress = (storyId: string) => {
    viewStory(storyId);
    // In a real app, this would navigate to a story viewer
  };
  
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {stories.map((story) => (
          <StoryCircle
            key={story.id}
            story={story}
            onPress={handleStoryPress}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DBDBDB',
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});