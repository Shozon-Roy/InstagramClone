import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useProfileStore } from '@/store/profile-store';
import ProfileHeader from '@/components/profile/ProfileHeader';
import HighlightsRow from '@/components/profile/HighlightsRow';
import ProfileTabs from '@/components/profile/ProfileTabs';
import PostsGrid from '@/components/profile/PostsGrid';
import Colors from '@/constants/colors';

export default function ProfileScreen() {
  const { 
    userProfile, 
    userPosts, 
    userHighlights, 
    activeTab, 
    setActiveTab,
    toggleEditing
  } = useProfileStore();
  
  const handleEditProfile = () => {
    toggleEditing();
    // In a real app, this would navigate to an edit profile screen
  };
  
  const handleHighlightPress = (id: string) => {
    // In a real app, this would open the highlight
    console.log('Highlight pressed:', id);
  };
  
  const handleAddHighlight = () => {
    // In a real app, this would open a screen to create a new highlight
    console.log('Add highlight pressed');
  };
  
  const handlePostPress = (postId: string) => {
    // In a real app, this would open the post detail
    console.log('Post pressed:', postId);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <View style={styles.usernameContainer}>
          {userProfile.isPrivate && <View style={styles.privateBadge} />}
          <View style={styles.usernameWrapper}>
            <View style={styles.username}>
              {userProfile.username}
            </View>
          </View>
        </View>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileHeader 
          profile={userProfile}
          onEditProfile={handleEditProfile}
        />
        
        <HighlightsRow 
          highlights={userHighlights}
          onPressHighlight={handleHighlightPress}
          onAddHighlight={handleAddHighlight}
        />
        
        <ProfileTabs 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        {activeTab === 'posts' && (
          <PostsGrid 
            posts={userPosts}
            onPostPress={handlePostPress}
          />
        )}
        
        {activeTab === 'reels' && (
          <View style={styles.emptyTabContainer}>
            <View style={styles.emptyTabContent}>
              <View style={styles.emptyTabText}>No Reels Yet</View>
            </View>
          </View>
        )}
        
        {activeTab === 'tagged' && (
          <View style={styles.emptyTabContainer}>
            <View style={styles.emptyTabContent}>
              <View style={styles.emptyTabText}>No Tagged Posts</View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.light.border,
    ...Platform.select({
      ios: {
        paddingTop: 0,
      },
      android: {
        paddingTop: 12,
      },
    }),
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  privateBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.light.text,
    marginRight: 4,
  },
  usernameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  emptyTabContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTabContent: {
    alignItems: 'center',
  },
  emptyTabText: {
    fontSize: 16,
    color: Colors.light.textSecondary,
    marginTop: 8,
  },
});