import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { Heart, MessageCircle, Plus } from 'lucide-react-native';
import Colors from '@/constants/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Plus size={24} color={Colors.light.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Heart size={24} color={Colors.light.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MessageCircle size={24} color={Colors.light.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.light.border,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        paddingTop: 50,
      },
      android: {
        paddingTop: 12,
      },
    }),
  },
  logo: {
    fontFamily: Platform.OS === 'ios' ? 'Noteworthy-Bold' : 'normal',
    fontSize: 28,
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 20,
  },
});