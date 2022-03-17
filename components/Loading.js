import { ActivityIndicator, StyleSheet } from 'react-native';

export default function Loading() {
  return <ActivityIndicator style={styles.spinner} />
}

const styles = StyleSheet.create({
  spinner: {
    zIndex: 100,
    elevation: 100,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
});
