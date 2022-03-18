import { FontAwesome5 } from '@expo/vector-icons'; 
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function SyncButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome5 name="sync" size={14} color="black" style={styles.icon} />
      <Text style={styles.text}>Sync</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 12
  },
  icon: {
    marginEnd: 6
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: '500',
  }
});
