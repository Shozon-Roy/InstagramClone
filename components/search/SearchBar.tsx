import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Search, X } from 'lucide-react-native';
import Colors from '@/constants/colors';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  onFocus: () => void;
  onBlur: () => void;
  onSubmit: () => void;
  placeholder?: string;
  autoFocus?: boolean;
}

export default function SearchBar({
  value,
  onChangeText,
  onClear,
  onFocus,
  onBlur,
  onSubmit,
  placeholder = 'Search',
  autoFocus = false,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search size={18} color={Colors.light.textSecondary} style={styles.searchIcon} />
        
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.light.textSecondary}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={onSubmit}
          autoFocus={autoFocus}
        />
        
        {value.length > 0 && (
          <TouchableOpacity onPress={onClear} style={styles.clearButton}>
            <X size={18} color={Colors.light.textSecondary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        paddingTop: 8,
      },
      android: {
        paddingTop: 8,
      },
    }),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 36,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.light.text,
    height: '100%',
    padding: 0,
  },
  clearButton: {
    padding: 4,
  },
});