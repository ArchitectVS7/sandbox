import { Product, BandInfo, TourDate, Release, NewsPost } from '../types';

// Mock Products for Merchandise Store
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Crimson Dawn T-Shirt',
    price: 25.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Premium black t-shirt with our iconic Crimson Dawn album artwork',
    category: 'apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Skull Logo Hoodie',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    description: 'Comfortable black hoodie with embroidered skull logo',
    category: 'apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Limited Edition Vinyl - "Eternal Darkness"',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    description: 'Special red vinyl pressing of our latest album, limited to 1000 copies',
    category: 'music',
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'Metal Skull Keychain',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    description: 'Heavy metal keychain with detailed skull design',
    category: 'accessories',
    inStock: true,
    featured: false,
  },
  {
    id: '5',
    name: 'Band Logo Patch',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    description: 'Iron-on patch perfect for jackets and backpacks',
    category: 'accessories',
    inStock: true,
    featured: false,
  },
  {
    id: '6',
    name: 'Signed Album Cover',
    price: 75.99,
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
    description: 'Authentic signed album cover from "Crimson Dawn"',
    category: 'collectibles',
    inStock: false,
    featured: true,
  },
];

// Mock Band Information
export const mockBandInfo: BandInfo = {
  name: 'Crimson Throne',
  bio: 'Forged in the fires of underground metal scenes, Crimson Throne emerged as a force of raw power and dark artistry. Our music channels the primal energy of classic metal while pushing boundaries with modern brutality. Each song is a battle cry, each album a declaration of war against conformity.',
  formed: '2018',
  genre: 'Death Metal / Melodic Metal',
  location: 'Chicago, IL',
  members: [
    {
      id: '1',
      name: 'Marcus "Reaper" Kane',
      role: 'Lead Vocals',
      bio: 'The voice that pierces through darkness, Marcus brings 15 years of metal experience to Crimson Throne.',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop',
    },
    {
      id: '2',
      name: 'Alex "Raven" Torres',
      role: 'Lead Guitar',
      bio: 'Master of the six-string, Alex crafts the intricate melodies that define our sound.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    },
    {
      id: '3',
      name: 'Sarah "Storm" Chen',
      role: 'Bass Guitar',
      bio: 'The thunderous foundation of our sound, Sarah brings both technical skill and raw energy.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop',
    },
    {
      id: '4',
      name: 'Jake "Hammer" Williams',
      role: 'Drums',
      bio: 'The relentless heartbeat of Crimson Throne, Jake\'s precision drives our sonic assault.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    },
  ],
  socialMedia: [
    { platform: 'instagram', url: 'https://instagram.com/crimsonthrone' },
    { platform: 'facebook', url: 'https://facebook.com/crimsonthrone' },
    { platform: 'twitter', url: 'https://twitter.com/crimsonthrone' },
    { platform: 'youtube', url: 'https://youtube.com/crimsonthrone' },
    { platform: 'spotify', url: 'https://open.spotify.com/artist/crimsonthrone' },
    { platform: 'bandcamp', url: 'https://crimsonthrone.bandcamp.com' },
  ],
};

// Mock Tour Dates
export const mockTourDates: TourDate[] = [
  {
    id: '1',
    date: '2024-03-15',
    venue: 'The Metal Factory',
    city: 'Chicago',
    country: 'USA',
    ticketUrl: 'https://tickets.com/crimson-throne-chicago',
    soldOut: false,
  },
  {
    id: '2',
    date: '2024-03-18',
    venue: 'Underground Arena',
    city: 'Detroit',
    country: 'USA',
    ticketUrl: 'https://tickets.com/crimson-throne-detroit',
    soldOut: true,
  },
  {
    id: '3',
    date: '2024-03-22',
    venue: 'Dark Stage',
    city: 'Milwaukee',
    country: 'USA',
    ticketUrl: 'https://tickets.com/crimson-throne-milwaukee',
    soldOut: false,
  },
  {
    id: '4',
    date: '2024-03-25',
    venue: 'Abyss Club',
    city: 'Minneapolis',
    country: 'USA',
    ticketUrl: 'https://tickets.com/crimson-throne-minneapolis',
    soldOut: false,
  },
];

// Mock Releases
export const mockReleases: Release[] = [
  {
    id: '1',
    title: 'Eternal Darkness',
    type: 'album',
    releaseDate: '2024-01-15',
    coverArt: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
    streamingLinks: {
      spotify: 'https://open.spotify.com/album/eternal-darkness',
      apple: 'https://music.apple.com/album/eternal-darkness',
      bandcamp: 'https://crimsonthrone.bandcamp.com/album/eternal-darkness',
      youtube: 'https://youtube.com/playlist?list=eternal-darkness',
    },
    tracks: [
      'Crimson Dawn',
      'Shadows of the Past',
      'Eternal Darkness',
      'Rise of the Fallen',
      'Blood and Steel',
      'The Final Hour',
      'Crimson Throne',
      'Forever Lost',
    ],
  },
  {
    id: '2',
    title: 'Blood and Steel',
    type: 'ep',
    releaseDate: '2023-06-20',
    coverArt: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop',
    streamingLinks: {
      spotify: 'https://open.spotify.com/album/blood-and-steel',
      apple: 'https://music.apple.com/album/blood-and-steel',
      bandcamp: 'https://crimsonthrone.bandcamp.com/album/blood-and-steel',
    },
    tracks: [
      'Blood and Steel',
      'Warrior\'s Code',
      'Into the Void',
      'Crimson Reign',
    ],
  },
];

// Mock News Posts
export const mockNews: NewsPost[] = [
  {
    id: '1',
    title: 'New Album "Eternal Darkness" Out Now!',
    excerpt: 'Our latest full-length album is now available on all streaming platforms. Experience the darkest chapter of our journey.',
    content: 'After two years of intense writing and recording, we\'re proud to announce that "Eternal Darkness" is now available everywhere. This album represents our evolution as artists and our commitment to pushing the boundaries of metal music.',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop',
    author: 'Marcus Kane',
    category: 'release',
  },
  {
    id: '2',
    title: 'Spring Tour Dates Announced',
    excerpt: 'Join us as we bring the darkness to cities across the Midwest. Tickets on sale now!',
    content: 'We\'re hitting the road this spring with our most ambitious tour yet. Get ready for an intense live experience that will leave you breathless.',
    date: '2024-02-01',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=300&fit=crop',
    author: 'Sarah Chen',
    category: 'tour',
  },
  {
    id: '3',
    title: 'Behind the Scenes: Recording "Eternal Darkness"',
    excerpt: 'Take a look inside the studio where we crafted our latest masterpiece.',
    content: 'The recording process for "Eternal Darkness" was both challenging and rewarding. We pushed ourselves to new creative heights while staying true to our metal roots.',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop',
    author: 'Alex Torres',
    category: 'general',
  },
];

// Mock API functions (simulating backend calls)
export const mockApi = {
  // Products
  getProducts: async (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockProducts), 500);
    });
  },

  getFeaturedProducts: async (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockProducts.filter(p => p.featured)), 300);
    });
  },

  // Band Info
  getBandInfo: async (): Promise<BandInfo> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockBandInfo), 200);
    });
  },

  // Tour Dates
  getTourDates: async (): Promise<TourDate[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockTourDates), 300);
    });
  },

  // Releases
  getReleases: async (): Promise<Release[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockReleases), 200);
    });
  },

  // News
  getNews: async (): Promise<NewsPost[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockNews), 300);
    });
  },

  // Contact Form
  submitContactForm: async (formData: any): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Contact form submitted:', formData);
        resolve({ success: true, message: 'Your message has been sent successfully!' });
      }, 1000);
    });
  },
};