import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { Plus } from 'lucide-react-native';
import { UserHighlight } from '@/types/user';
import Colors from '@/constants/colors';

interface HighlightsRowProps {
  highlights: UserHighlight[];
  onPressHighlight: (id: string) => void;
  onAddHighlight: () => void;
}

export default function HighlightsRow({ 
  highlights, 
  onPressHighlight, 
  onAddHighlight 
}: HighlightsRowProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity 
          style={styles.highlightItem}
          onPress={onAddHighlight}
        >
          <View style={styles.newHighlightCircle}>
            <Plus size={24} color={Colors.light.text} />
          </View>
          <Text style={styles.highlightTitle}>New</Text>
        </TouchableOpacity>
        
        {highlights.map((highlight) => (
          <TouchableOpacity
            key={highlight.id}
            style={styles.highlightItem}
            onPress={() => onPressHighlight(highlight.id)}
          >
            <View style={styles.highlightCircle}>
              <Image
                source={{ uri: highlight.coverImage }}
                style={styles.highlightImage}
                contentFit="cover"
              />
            </View>
            <Text style={styles.highlightTitle} numberOfLines={1}>
              {highlight.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  scrollContent: {
    paddingHorizontal: 8,
  },
  highlightItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  newHighlightCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: Colors.light.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: Colors.light.border,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  highlightImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  highlightTitle: {
    fontSize: 12,
    marginTop: 4,
    color: Colors.light.text,
    textAlign: 'center',
  },
});