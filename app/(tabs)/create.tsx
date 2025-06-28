import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Image, Camera, Video } from 'lucide-react-native';
import Colors from '@/constants/colors';

export default function CreateScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Post</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Create a new post</Text>
        <Text style={styles.subtitle}>Choose a type of content to share</Text>
        
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionIcon}>
              <Image size={32} color={Colors.light.text} />
            </View>
            <Text style={styles.optionText}>Photo</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionIcon}>
              <Camera size={32} color={Colors.light.text} />
            </View>
            <Text style={styles.optionText}>Camera</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option}>
            <View style={styles.optionIcon}>
              <Video size={32} color={Colors.light.text} />
            </View>
            <Text style={styles.optionText}>Video</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.note}>
          This is a demo screen. In a real app, this would allow you to create new posts.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.light.border,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: Colors.light.text,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.textSecondary,
    textAlign: 'center',
    marginBottom: 32,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 40,
  },
  option: {
    alignItems: 'center',
  },
  optionIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionText: {
    fontSize: 14,
    color: Colors.light.text,
  },
  note: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    textAlign: 'center',
    marginTop: 20,
  },
});