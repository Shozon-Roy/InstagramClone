import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Grid, Clapperboard, UserSquare } from 'lucide-react-native';
import Colors from '@/constants/colors';

interface ProfileTabsProps {
  activeTab: 'posts' | 'reels' | 'tagged';
  onTabChange: (tab: 'posts' | 'reels' | 'tagged') => void;
}

const { width } = Dimensions.get('window');
const tabWidth = width / 3;

export default function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'posts' && styles.activeTab]}
          onPress={() => onTabChange('posts')}
        >
          <Grid 
            size={24} 
            color={activeTab === 'posts' ? Colors.light.text : Colors.light.textSecondary} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'reels' && styles.activeTab]}
          onPress={() => onTabChange('reels')}
        >
          <Clapperboard 
            size={24} 
            color={activeTab === 'reels' ? Colors.light.text : Colors.light.textSecondary} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'tagged' && styles.activeTab]}
          onPress={() => onTabChange('tagged')}
        >
          <UserSquare 
            size={24} 
            color={activeTab === 'tagged' ? Colors.light.text : Colors.light.textSecondary} 
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.indicatorContainer}>
        <View 
          style={[
            styles.indicator, 
            { 
              left: activeTab === 'posts' ? 0 : activeTab === 'reels' ? tabWidth : tabWidth * 2,
              width: tabWidth
            }
          ]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.light.border,
  },
  tabsContainer: {
    flexDirection: 'row',
    height: 44,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    // Active styling is handled by the indicator
  },
  indicatorContainer: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.light.border,
  },
  indicator: {
    position: 'absolute',
    height: 1,
    backgroundColor: Colors.light.text,
  },
});