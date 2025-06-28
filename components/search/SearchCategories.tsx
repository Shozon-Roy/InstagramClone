import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SearchCategory } from '@/types/user';
import Colors from '@/constants/colors';

interface SearchCategoriesProps {
  categories: SearchCategory[];
  activeCategory: string;
  onCategoryPress: (categoryId: string) => void;
}

export default function SearchCategories({
  categories,
  activeCategory,
  onCategoryPress,
}: SearchCategoriesProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryItem,
              activeCategory === category.id && styles.activeCategoryItem,
            ]}
            onPress={() => onCategoryPress(category.id)}
          >
            <Text
              style={[
                styles.categoryText,
                activeCategory === category.id && styles.activeCategoryText,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.light.border,
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  activeCategoryItem: {
    backgroundColor: Colors.light.text,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.light.text,
  },
  activeCategoryText: {
    color: 'white',
  },
});