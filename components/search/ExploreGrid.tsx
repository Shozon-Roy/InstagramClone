import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Colors from '@/constants/colors';

interface ExploreGridProps {
  images: string[];
  onImagePress: (index: number) => void;
}

const { width } = Dimensions.get('window');
const itemSize = width / 3;
const gap = 1;

export default function ExploreGrid({ images, onImagePress }: ExploreGridProps) {
  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <TouchableOpacity 
      style={styles.gridItem}
      onPress={() => onImagePress(index)}
    >
      <Image
        source={{ uri: item }}
        style={styles.image}
        contentFit="cover"
      />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
      contentContainerStyle={styles.gridContainer}
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
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
});