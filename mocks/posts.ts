import { Post, Story } from '@/types/post';

export const POSTS: Post[] = [
  {
    id: '1',
    user: {
      id: 'user1',
      username: 'janedoe',
      fullName: 'Jane Doe',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: true
    },
    images: [
      'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    ],
    caption: "Perfect day for a hike in the mountains! The view was absolutely breathtaking.",
    hashtags: ['#nature', '#hiking', '#mountains', '#adventure'],
    likes: 1243,
    comments: [
      {
        id: 'c1',
        userId: 'user2',
        username: 'johndoe',
        text: 'Amazing view! Where is this?',
        timestamp: Date.now() - 3600000
      },
      {
        id: 'c2',
        userId: 'user3',
        username: 'sarahsmith',
        text: 'This looks incredible! 😍',
        timestamp: Date.now() - 1800000
      }
    ],
    timestamp: Date.now() - 7200000,
    location: 'Rocky Mountains',
    saved: false,
    liked: false
  },
  {
    id: '2',
    user: {
      id: 'user4',
      username: 'mikebrown',
      fullName: 'Mike Brown',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: false
    },
    images: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    ],
    caption: "Homemade pizza night! Made this from scratch and it was delicious.",
    hashtags: ['#food', '#homemade', '#pizza', '#foodie'],
    likes: 892,
    comments: [
      {
        id: 'c3',
        userId: 'user5',
        username: 'emilyjones',
        text: 'Looks delicious! Share the recipe please!',
        timestamp: Date.now() - 2700000
      }
    ],
    timestamp: Date.now() - 10800000,
    saved: false,
    liked: false
  },
  {
    id: '3',
    user: {
      id: 'user6',
      username: 'alexwilson',
      fullName: 'Alex Wilson',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: true
    },
    images: [
      'https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    ],
    caption: "Just got this new setup for my home office. Productivity level: 100%",
    hashtags: ['#homeoffice', '#workspace', '#productivity', '#setup'],
    likes: 2156,
    comments: [
      {
        id: 'c4',
        userId: 'user7',
        username: 'davidclark',
        text: 'Clean setup! What monitor is that?',
        timestamp: Date.now() - 5400000
      },
      {
        id: 'c5',
        userId: 'user8',
        username: 'lisawhite',
        text: 'Love the minimalist vibe!',
        timestamp: Date.now() - 3600000
      },
      {
        id: 'c6',
        userId: 'user9',
        username: 'robertjohnson',
        text: 'Great lighting!',
        timestamp: Date.now() - 1800000
      }
    ],
    timestamp: Date.now() - 14400000,
    location: 'Home Office',
    saved: false,
    liked: false
  },
  {
    id: '4',
    user: {
      id: 'user10',
      username: 'sophiamiller',
      fullName: 'Sophia Miller',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: false
    },
    images: [
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1534695372029-ef92ff3651ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80',
      'https://images.unsplash.com/photo-1534695372028-1f6f3c0a0a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    ],
    caption: "Beach day with friends! Nothing beats the sound of waves and good company.",
    hashtags: ['#beach', '#summer', '#friends', '#ocean'],
    likes: 3421,
    comments: [
      {
        id: 'c7',
        userId: 'user11',
        username: 'jennifertaylor',
        text: 'Looks like paradise! 🏝️',
        timestamp: Date.now() - 7200000
      },
      {
        id: 'c8',
        userId: 'user12',
        username: 'michaelthomas',
        text: 'Perfect weather!',
        timestamp: Date.now() - 5400000
      }
    ],
    timestamp: Date.now() - 18000000,
    location: 'Malibu Beach',
    saved: false,
    liked: false
  },
  {
    id: '5',
    user: {
      id: 'user13',
      username: 'danielharris',
      fullName: 'Daniel Harris',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: true
    },
    images: [
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80'
    ],
    caption: "Working on a new project. Can't wait to share more details soon!",
    hashtags: ['#work', '#project', '#coding', '#developer'],
    likes: 754,
    comments: [
      {
        id: 'c9',
        userId: 'user14',
        username: 'oliviamartin',
        text: 'Looking forward to it!',
        timestamp: Date.now() - 3600000
      }
    ],
    timestamp: Date.now() - 21600000,
    saved: false,
    liked: false
  }
];

export const STORIES: Story[] = [
  {
    id: 's1',
    user: {
      id: 'user1',
      username: 'janedoe',
      fullName: 'Jane Doe',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: true
    },
    seen: false,
    timestamp: Date.now() - 3600000
  },
  {
    id: 's2',
    user: {
      id: 'user4',
      username: 'mikebrown',
      fullName: 'Mike Brown',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: false
    },
    seen: false,
    timestamp: Date.now() - 7200000
  },
  {
    id: 's3',
    user: {
      id: 'user6',
      username: 'alexwilson',
      fullName: 'Alex Wilson',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: true
    },
    seen: true,
    timestamp: Date.now() - 10800000
  },
  {
    id: 's4',
    user: {
      id: 'user10',
      username: 'sophiamiller',
      fullName: 'Sophia Miller',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: false
    },
    seen: false,
    timestamp: Date.now() - 14400000
  },
  {
    id: 's5',
    user: {
      id: 'user13',
      username: 'danielharris',
      fullName: 'Daniel Harris',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: true
    },
    seen: true,
    timestamp: Date.now() - 18000000
  },
  {
    id: 's6',
    user: {
      id: 'user15',
      username: 'emmawilliams',
      fullName: 'Emma Williams',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: false
    },
    seen: false,
    timestamp: Date.now() - 21600000
  },
  {
    id: 's7',
    user: {
      id: 'user16',
      username: 'noahjones',
      fullName: 'Noah Jones',
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
      verified: true
    },
    seen: false,
    timestamp: Date.now() - 25200000
  }
];