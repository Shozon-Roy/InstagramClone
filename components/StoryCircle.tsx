import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Story } from '@/types/post';
import Colors from '@/constants/colors';

interface StoryCircleProps {
  story: Story;
  onPress: (storyId: string) => void;
}

export default function StoryCircle({ story, onPress }: StoryCircleProps) {
  const { user, seen } = story;
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress(story.id)}
      activeOpacity={0.8}
    >
      <View style={styles.storyCircle}>
        {!seen ? (
          <LinearGradient
            colors={[
              Colors.light.storyRing.start,
              Colors.light.storyRing.middle,
              Colors.light.storyRing.end
            ]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientRing}
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: user.avatar }}
                style={styles.avatar}
                contentFit="cover"
              />
            </View>
          </LinearGradient>
        ) : (
          <View style={styles.seenRing}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: user.avatar }}
                style={styles.avatar}
                contentFit="cover"
              />
            </View>
          </View>
        )}
      </View>
      <Text style={styles.username} numberOfLines={1}>
        {user.username.length > 9 
          ? user.username.substring(0, 8) + '...' 
          : user.username}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  storyCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientRing: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seenRing: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: Colors.light.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  username: {
    fontSize: 12,
    marginTop: 4,
    color: Colors.light.text,
    textAlign: 'center',
  },
});