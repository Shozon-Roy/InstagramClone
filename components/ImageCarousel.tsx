import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'expo-image';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withDelay } from 'react-native-reanimated';
import { Platform } from 'react-native';
import Colors from '@/constants/colors';

interface ImageCarouselProps {
  images: string[];
  onDoubleTap: () => void;
}

const { width } = Dimensions.get('window');

export default function ImageCarousel({ images, onDoubleTap }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const lastTap = useRef<number | null>(null);
  const heartScale = useSharedValue(0);
  
  const heartAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: heartScale.value }],
      opacity: heartScale.value,
    };
  });

  const handleTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    
    if (lastTap.current && (now - lastTap.current) < DOUBLE_TAP_DELAY) {
      // Double tap detected
      onDoubleTap();
      animateHeart();
      lastTap.current = null;
    } else {
      lastTap.current = now;
    }
  };

  const animateHeart = () => {
    heartScale.value = withSpring(1, { damping: 10, stiffness: 100 });
    heartScale.value = withDelay(
      1000, 
      withTiming(0, { duration: 300 })
    );
  };

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setActiveIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleTap}>
        <View style={styles.carouselContainer}>
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            renderItem={({ item }) => (
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item }}
                  style={styles.image}
                  contentFit="cover"
                />
              </View>
            )}
            keyExtractor={(_, index) => index.toString()}
          />
          
          {Platform.OS !== 'web' ? (
            <Animated.View style={[styles.heartContainer, heartAnimatedStyle]}>
              <Image
                source={{ uri: 'https://raw.githubusercontent.com/expo/expo/main/templates/expo-template-blank/assets/heart.png' }}
                style={styles.heart}
                contentFit="contain"
              />
            </Animated.View>
          ) : (
            <View style={styles.heartContainer}>
              {/* Non-animated fallback for web */}
            </View>
          )}
          
          {images.length > 1 && (
            <View style={styles.indicatorContainer}>
              {images.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.indicator,
                    index === activeIndex && styles.activeIndicator,
                  ]}
                />
              ))}
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: width, // Square aspect ratio
  },
  carouselContainer: {
    flex: 1,
    position: 'relative',
  },
  imageContainer: {
    width,
    height: width,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 2,
  },
  activeIndicator: {
    backgroundColor: Colors.light.primary,
    width: 6,
    height: 6,
  },
  heartContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  heart: {
    width: 100,
    height: 100,
    tintColor: 'white',
  },
});