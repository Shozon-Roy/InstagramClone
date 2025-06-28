import { SearchItem, SearchCategory, SearchHistory } from '@/types/user';

export const SEARCH_CATEGORIES: SearchCategory[] = [
  { id: 'c1', name: 'Top' },
  { id: 'c2', name: 'Accounts' },
  { id: 'c3', name: 'Tags' },
  { id: 'c4', name: 'Places' },
  { id: 'c5', name: 'Audio' },
];

export const SEARCH_SUGGESTIONS: SearchItem[] = [
  {
    id: 's1',
    type: 'user',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    title: 'mikebrown',
    subtitle: 'Mike Brown',
    isPopular: true
  },
  {
    id: 's2',
    type: 'user',
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    title: 'alexwilson',
    subtitle: 'Alex Wilson • Verified',
    isPopular: true
  },
  {
    id: 's3',
    type: 'hashtag',
    imageUrl: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    title: '#travel',
    subtitle: '24.5M posts',
    isPopular: true
  },
  {
    id: 's4',
    type: 'hashtag',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    title: '#food',
    subtitle: '32.1M posts',
    isPopular: false
  },
  {
    id: 's5',
    type: 'place',
    imageUrl: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    title: 'Malibu Beach',
    subtitle: 'Malibu, California',
    isPopular: false
  },
  {
    id: 's6',
    type: 'user',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    title: 'sophiamiller',
    subtitle: 'Sophia Miller',
    isPopular: false
  },
  {
    id: 's7',
    type: 'user',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    title: 'danielharris',
    subtitle: 'Daniel Harris • Verified',
    isPopular: true
  },
  {
    id: 's8',
    type: 'hashtag',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    title: '#technology',
    subtitle: '18.7M posts',
    isPopular: false
  }
];

export const EXPLORE_POSTS: string[] = [
  'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1534695372029-ef92ff3651ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1534695372028-1f6f3c0a0a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1534695372029-ef92ff3651ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1534695372028-1f6f3c0a0a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
];