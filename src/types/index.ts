export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'apparel' | 'accessories' | 'music' | 'collectibles';
  sizes?: string[];
  inStock: boolean;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  inquiryType: 'booking' | 'general' | 'press' | 'merchandise';
  message: string;
}

export interface BandMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TourDate {
  id: string;
  date: string;
  venue: string;
  city: string;
  country: string;
  ticketUrl?: string;
  soldOut: boolean;
}

export interface Release {
  id: string;
  title: string;
  type: 'album' | 'ep' | 'single';
  releaseDate: string;
  coverArt: string;
  streamingLinks: {
    spotify?: string;
    apple?: string;
    bandcamp?: string;
    youtube?: string;
  };
  tracks?: string[];
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
  author: string;
  category: 'news' | 'tour' | 'release' | 'general';
}

export interface SocialMedia {
  platform: 'facebook' | 'twitter' | 'instagram' | 'youtube' | 'spotify' | 'bandcamp';
  url: string;
  followers?: number;
}

export interface BandInfo {
  name: string;
  bio: string;
  formed: string;
  genre: string;
  members: BandMember[];
  socialMedia: SocialMedia[];
  location: string;
}