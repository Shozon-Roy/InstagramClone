import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Clock, X } from 'lucide-react-native';
import { SearchHistory } from '@/types/user';
import Colors from '@/constants/colors';

interface SearchHistoryProps {
  history: SearchHistory[];
  onHistoryItemPress: (term: string) => void;
  onClearHistory: () => void;
  onRemoveHistoryItem: (id: string) => void;
}

export default function SearchHistoryList({
  history,
  onHistoryItemPress,
  onClearHistory,
  onRemoveHistoryItem,
}: SearchHistoryProps) {
  if (history.length === 0) {
    return null;
  }

  const renderItem = ({ item }: { item: SearchHistory }) => (
    <TouchableOpacity
      style={styles.historyItem}
      onPress={() => onHistoryItemPress(item.term)}
    >
      <View style={styles.historyItemLeft}>
        <Clock size={16} color={Colors.light.textSecondary} style={styles.historyIcon} />
        <Text style={styles.historyText}>{item.term}</Text>
      </View>
      
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemoveHistoryItem(item.id)}
      >
        <X size={16} color={Colors.light.textSecondary} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent</Text>
        <TouchableOpacity onPress={onClearHistory}>
          <Text style={styles.clearButton}>Clear All</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.text,
  },
  clearButton: {
    fontSize: 14,
    color: Colors.light.primary,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  historyItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyIcon: {
    marginRight: 12,
  },
  historyText: {
    fontSize: 16,
    color: Colors.light.text,
  },
  removeButton: {
    padding: 4,
  },
});