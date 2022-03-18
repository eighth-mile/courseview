import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function DeleteButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialIcons name="delete" size={20} color="black" style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 12
  },
  icon: {
    marginEnd: 4
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: '500',
  }
});
