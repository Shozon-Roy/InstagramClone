import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking, Platform } from 'react-native';
import { Image } from 'expo-image';
import { CheckCircle, Link as LinkIcon } from 'lucide-react-native';
import { UserProfile } from '@/types/user';
import Colors from '@/constants/colors';

interface ProfileHeaderProps {
  profile: UserProfile;
  onEditProfile: () => void;
}

export default function ProfileHeader({ profile, onEditProfile }: ProfileHeaderProps) {
  const handleOpenWebsite = () => {
    if (profile.website) {
      Linking.openURL(`https://${profile.website}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: profile.avatar }}
            style={styles.avatar}
            contentFit="cover"
          />
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profile.postsCount}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profile.followersCount}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{profile.followingCount}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.bioSection}>
        <View style={styles.nameContainer}>
          <Text style={styles.fullName}>{profile.fullName}</Text>
          {profile.verified && (
            <CheckCircle size={14} color={Colors.light.primary} style={styles.verifiedBadge} />
          )}
        </View>
        
        <Text style={styles.bio}>{profile.bio}</Text>
        
        {profile.website && (
          <TouchableOpacity style={styles.websiteContainer} onPress={handleOpenWebsite}>
            <LinkIcon size={14} color={Colors.light.primary} />
            <Text style={styles.website}>{profile.website}</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.editProfileButton}
          onPress={onEditProfile}
        >
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.shareProfileButton}>
          <Text style={styles.shareProfileText}>Share Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarContainer: {
    marginRight: 24,
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.light.text,
  },
  bioSection: {
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  fullName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text,
  },
  verifiedBadge: {
    marginLeft: 4,
  },
  bio: {
    fontSize: 14,
    color: Colors.light.text,
    lineHeight: 20,
  },
  websiteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  website: {
    fontSize: 14,
    color: Colors.light.primary,
    marginLeft: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editProfileButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
    marginRight: 4,
  },
  editProfileText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
  },
  shareProfileButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
    marginLeft: 4,
  },
  shareProfileText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
  },
});