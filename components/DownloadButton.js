import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function DownloadButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name="cloud-download" size={16} color="black" style={styles.icon} />
      <Text style={styles.text}>Download</Text>
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
