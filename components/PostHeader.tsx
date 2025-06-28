import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { MoreHorizontal, CheckCircle } from 'lucide-react-native';
import { User } from '@/types/post';
import Colors from '@/constants/colors';

interface PostHeaderProps {
  user: User;
  location?: string;
}

export default function PostHeader({ user, location }: PostHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: user.avatar }}
          style={styles.avatar}
          contentFit="cover"
        />
        <View style={styles.textContainer}>
          <View style={styles.usernameContainer}>
            <Text style={styles.username}>{user.username}</Text>
            {user.verified && (
              <CheckCircle size={14} color={Colors.light.primary} style={styles.verifiedBadge} />
            )}
          </View>
          {location && <Text style={styles.location}>{location}</Text>}
        </View>
      </View>
      <TouchableOpacity>
        <MoreHorizontal size={24} color={Colors.light.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.light.text,
  },
  verifiedBadge: {
    marginLeft: 4,
  },
  location: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
});