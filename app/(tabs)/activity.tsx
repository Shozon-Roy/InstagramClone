import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Heart } from 'lucide-react-native';
import Colors from '@/constants/colors';

// Mock activity data
const ACTIVITIES = [
  {
    id: 'a1',
    type: 'like',
    user: {
      id: 'user4',
      username: 'mikebrown',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
    content: 'liked your photo',
    time: '2h',
    image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'a2',
    type: 'follow',
    user: {
      id: 'user6',
      username: 'alexwilson',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
    content: 'started following you',
    time: '3h',
  },
  {
    id: 'a3',
    type: 'mention',
    user: {
      id: 'user10',
      username: 'sophiamiller',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
    content: 'mentioned you in a comment',
    time: '5h',
  },
  {
    id: 'a4',
    type: 'like',
    user: {
      id: 'user13',
      username: 'danielharris',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
    content: 'liked your photo',
    time: '1d',
    image: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'a5',
    type: 'follow',
    user: {
      id: 'user15',
      username: 'emmawilliams',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    },
    content: 'started following you',
    time: '2d',
  },
];

export default function ActivityScreen() {
  const renderItem = ({ item }: { item: typeof ACTIVITIES[0] }) => (
    <TouchableOpacity style={styles.activityItem}>
      <View style={styles.activityContent}>
        <Image
          source={{ uri: item.user.avatar }}
          style={styles.avatar}
          contentFit="cover"
        />
        
        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            <Text style={styles.username}>{item.user.username}</Text> {item.content}
          </Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
      
      {item.image && (
        <Image
          source={{ uri: item.image }}
          style={styles.contentImage}
          contentFit="cover"
        />
      )}
      
      {item.type === 'follow' && (
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity</Text>
      </View>
      
      <FlatList
        data={ACTIVITIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={() => (
          <View style={styles.todayHeader}>
            <Text style={styles.todayText}>Today</Text>
          </View>
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
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.light.border,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  listContent: {
    paddingBottom: 20,
  },
  todayHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  todayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  activityContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: Colors.light.text,
    lineHeight: 20,
  },
  username: {
    fontWeight: '600',
  },
  timeText: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    marginTop: 2,
  },
  contentImage: {
    width: 44,
    height: 44,
    marginLeft: 12,
  },
  followButton: {
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 12,
  },
  followButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
});