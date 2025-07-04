# 🔥 MetalPortal - Heavy Metal Band Community App

A React Native mobile application built with Expo for heavy metal band community engagement, featuring exclusive content, real-time chat, forums, and subscription tiers.

## 🎯 Project Overview

MetalPortal is a mobile-first community platform designed to connect heavy metal bands with their fanbase through:
- **Exclusive Content**: Early releases, B-sides, and behind-the-scenes videos
- **Community Forums**: Q&A with band members and fan discussions
- **Real-time Chat**: Live interaction during events and releases
- **Subscription Tiers**: FREE, PREMIUM, and VIP access levels
- **Event Integration**: Concert announcements and meet & greet booking

## 🏗️ Tech Stack

### Frontend
- **Framework**: React Native with Expo SDK 53+
- **Language**: TypeScript
- **Navigation**: Expo Router v5
- **State Management**: Zustand + TanStack Query
- **UI Components**: Custom styled components with NativeBase
- **Real-time**: Socket.io client

### Backend (Planned)
- **Runtime**: Node.js 20+ with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with refresh tokens
- **Real-time**: Socket.io server
- **Payment**: Stripe integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (macOS) or Android Emulator

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd MetalPortal

# Install dependencies
npm install

# Start the development server
npm start

# Run on specific platform
npm run ios    # iOS Simulator
npm run android # Android Emulator
npm run web    # Web browser
```

### Development Scripts
```bash
npm start          # Start Expo development server
npm run lint       # Run ESLint
npm run type-check # TypeScript type checking
npm test           # Run Jest tests (when configured)
```

## 📁 Project Structure

```
MetalPortal/
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root layout component
│   └── index.tsx          # Home screen
├── src/
│   ├── components/        # Reusable UI components
│   ├── screens/          # Screen components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── services/         # API services
│   └── store/            # State management
├── assets/               # Images, fonts, icons
├── .env.example         # Environment variables template
└── docs/                # Additional documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep blacks (#0A0A0A, #1A1A1A, #2A2A2A)
- **Accent**: Blood red (#8B0000, #DC143C, #660000)
- **Neutral**: Bone white (#F5F5DC), Silver (#C0C0C0)

### Typography
- **Headers**: Gothic serif fonts for impact
- **Body**: Inter sans-serif for readability
- **Code**: JetBrains Mono for technical content

## 🔧 Development Workflow

### Code Quality
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking
- **Husky**: Pre-commit hooks (planned)

### Testing Strategy
- **Unit Tests**: Jest + React Native Testing Library
- **E2E Tests**: Planned for critical user flows
- **Type Coverage**: 100% TypeScript coverage goal

## 🌟 Features Roadmap

### Phase 1: Core Setup ✅
- [x] Project initialization with Expo + TypeScript
- [x] Basic navigation and routing
- [x] Development environment setup
- [x] Linting and type checking

### Phase 2: Authentication & Profiles
- [ ] User registration and login
- [ ] Profile management
- [ ] Role-based access control

### Phase 3: Content Management
- [ ] News feed implementation
- [ ] Media upload system
- [ ] Premium content gating

### Phase 4: Community Features
- [ ] Forum system
- [ ] Real-time chat
- [ ] User messaging

### Phase 5: Payment Integration
- [ ] Stripe subscription management
- [ ] Tier-based content access
- [ ] Payment flows

## 🔐 Environment Configuration

Copy `.env.example` to `.env` and configure:
```bash
# Database
DATABASE_URL=postgresql://...

# Authentication
JWT_SECRET=your-secret-key

# External Services
STRIPE_PUBLISHABLE_KEY=pk_test_...
CLOUDINARY_CLOUD_NAME=your-cloud

# API Configuration
API_BASE_URL=http://localhost:3000/api
```

## 📱 Platform Support

- **iOS**: iPhone and iPad
- **Android**: Android 6.0+ (API level 23+)
- **Web**: Modern browsers (development/testing)

## 🚀 Deployment

### Development
```bash
npm start
```

### Production Builds
```bash
# iOS App Store
eas build --platform ios --profile production

# Google Play Store
eas build --platform android --profile production

# Web deployment
npm run build:web
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript strict mode
- Maintain 80+ character line length
- Use conventional commit messages
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎸 Band Theme

The app is designed around the fictional death metal band **"Crimson Void"** for development and testing purposes, featuring:
- Dark, underground aesthetic
- Gothic typography and metal-inspired design
- High contrast accessibility
- Industrial UI elements

## 🔗 Links

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

**Built with 🔥 for the metal community**