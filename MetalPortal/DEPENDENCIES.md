# 📦 MetalPortal Dependencies

This document lists all project dependencies with their versions and purposes.

## 🔧 Production Dependencies

| Package | Version | Purpose | Last Updated |
|---------|---------|---------|--------------|
| `expo` | ^53.0.17 | Core Expo SDK framework | January 2025 |
| `expo-router` | ^5.1.3 | File-based routing system | January 2025 |
| `expo-status-bar` | ^2.2.3 | Status bar configuration | January 2025 |
| `react` | 19.0.0 | React library | January 2025 |
| `react-native` | 0.79.5 | React Native framework | January 2025 |
| `react-native-safe-area-context` | ^5.5.1 | Safe area handling | January 2025 |

### Planned Production Dependencies

| Package | Purpose | Priority |
|---------|---------|----------|
| `@tanstack/react-query` | Server state management | High |
| `zustand` | Client state management | High |
| `react-hook-form` | Form handling | High |
| `zod` | Schema validation | High |
| `socket.io-client` | Real-time communication | High |
| `@stripe/stripe-react-native` | Payment processing | Medium |
| `react-native-vector-icons` | Icon library | Medium |
| `react-native-gesture-handler` | Touch interactions | Medium |
| `react-native-reanimated` | Animations | Low |

## 🛠️ Development Dependencies

| Package | Version | Purpose | Last Updated |
|---------|---------|---------|--------------|
| `@eslint/eslintrc` | ^3.2.0 | ESLint configuration utilities | January 2025 |
| `@eslint/js` | ^9.30.1 | ESLint JavaScript configurations | January 2025 |
| `@react-native-community/eslint-config` | ^3.2.0 | React Native ESLint rules | January 2025 |
| `@types/react` | ~19.0.10 | React TypeScript definitions | January 2025 |
| `@types/react-native` | ^0.72.8 | React Native TypeScript definitions | January 2025 |
| `@typescript-eslint/eslint-plugin` | ^8.35.1 | TypeScript ESLint rules | January 2025 |
| `@typescript-eslint/parser` | ^8.35.1 | TypeScript ESLint parser | January 2025 |
| `eslint` | ^9.30.1 | JavaScript/TypeScript linter | January 2025 |
| `eslint-config-expo` | ^9.2.0 | Expo-specific ESLint rules | January 2025 |
| `eslint-plugin-react-native` | ^5.0.0 | React Native ESLint rules | January 2025 |
| `husky` | ^9.1.7 | Git hooks management | January 2025 |
| `lint-staged` | ^16.1.2 | Pre-commit linting | January 2025 |
| `prettier` | ^3.6.2 | Code formatting | January 2025 |
| `typescript` | ^5.8.3 | TypeScript compiler | January 2025 |

### Planned Development Dependencies

| Package | Purpose | Priority |
|---------|---------|----------|
| `jest` | Unit testing framework | High |
| `@testing-library/react-native` | Component testing utilities | High |
| `@testing-library/jest-native` | Jest matchers for React Native | High |
| `detox` | E2E testing framework | Medium |
| `@types/jest` | Jest TypeScript definitions | Medium |
| `babel-jest` | Babel transformer for Jest | Medium |

## 🔍 Dependency Audit Status

**Last Audit**: January 2025  
**Vulnerabilities Found**: 0  
**Security Status**: ✅ Clean

### Audit Commands
```bash
# Check for vulnerabilities
npm audit

# Fix automatically fixable issues
npm audit fix

# Force fix (use with caution)
npm audit fix --force
```

## 📊 Version Compatibility Matrix

| Expo SDK | React | React Native | TypeScript | Node.js |
|----------|-------|--------------|------------|---------|
| 53.x | 19.0.x | 0.79.x | 5.8.x | 18.x+ |

## 🚨 Known Issues & Resolutions

### ESLint v9 Compatibility
- **Issue**: Some React Native ESLint configs not fully compatible with ESLint v9
- **Resolution**: Using simplified configuration with essential rules only
- **Status**: Resolved ✅

### Peer Dependency Warnings
- **Issue**: Multiple npm warnings about peer dependency conflicts
- **Resolution**: Overrides configured in package.json, functionality not affected
- **Status**: Monitored 🟡

## 🔄 Update Strategy

### Major Version Updates
- Review changelog and breaking changes
- Test in development environment
- Update TypeScript definitions
- Run full test suite

### Minor/Patch Updates
- Generally safe to update
- Monitor for any runtime issues
- Update dependencies weekly

### Security Updates
- Apply immediately
- Test critical paths
- Deploy as hotfix if necessary

## 📝 Maintenance Notes

### Monthly Tasks
- [ ] Run `npm outdated` to check for updates
- [ ] Review security advisories
- [ ] Update dependencies with patch versions
- [ ] Test app functionality after updates

### Quarterly Tasks
- [ ] Review and update major dependencies
- [ ] Audit unused dependencies
- [ ] Check for newer alternatives
- [ ] Update this documentation

## 🔗 Useful Commands

```bash
# Check outdated packages
npm outdated

# Update all packages (be careful with major versions)
npm update

# Install specific version
npm install package@version

# Check package information
npm info package

# List installed packages
npm list --depth=0

# Check for duplicate packages
npm ls --depth=0 | grep -E "duplicate|UNMET"
```

---

**Last Updated**: January 2025  
**Next Review**: February 2025