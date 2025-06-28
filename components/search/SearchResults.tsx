import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image as RNImage } from 'react-native';
import { Image } from 'expo-image';
import { SearchItem } from '@/types/user';
import { FlameKindling } from 'lucide-react-native';
import Colors from '@/constants/colors';

interface SearchResultsProps {
  results: SearchItem[];
  onResultPress: (item: SearchItem) => void;
}

export default function SearchResults({ results, onResultPress }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No results found</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: SearchItem }) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() => onResultPress(item)}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.resultImage}
        contentFit="cover"
      />
      
      <View style={styles.resultInfo}>
        <Text style={styles.resultTitle}>{item.title}</Text>
        {item.subtitle && (
          <Text style={styles.resultSubtitle}>{item.subtitle}</Text>
        )}
      </View>
      
      {item.isPopular && (
        <View style={styles.popularTag}>
          <FlameKindling size={12} color={Colors.light.text} />
          <Text style={styles.popularText}>Popular</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={results}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  emptyContainer: {
    padding: 16,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: Colors.light.textSecondary,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  resultImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  resultInfo: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.text,
  },
  resultSubtitle: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    marginTop: 2,
  },
  popularTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    fontSize: 12,
    color: Colors.light.text,
    marginLeft: 4,
  },
});