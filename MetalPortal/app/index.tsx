import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🔥 CRIMSON VOID 🔥</Text>
        <Text style={styles.subtitle}>METAL PORTAL</Text>
        <Text style={styles.description}>
          Welcome to the darkest corners of metal.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#DC143C',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#C0C0C0',
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 3,
  },
  description: {
    fontSize: 16,
    color: '#F5F5DC',
    textAlign: 'center',
    lineHeight: 24,
  },
});