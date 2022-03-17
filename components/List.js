import { StyleSheet, View } from 'react-native';

export default function List({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )   
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    width: '100%',
  },
});
