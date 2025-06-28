import React from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/Header';
import StoriesRow from '@/components/StoriesRow';
import Post from '@/components/Post';
import { useFeedStore } from '@/store/feed-store';

export default function FeedScreen() {
  const { posts } = useFeedStore();
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {Platform.OS !== 'ios' && <Header />}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            {Platform.OS === 'ios' && <Header />}
            <StoriesRow />
          </>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});