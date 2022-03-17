import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function DownloadButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome name="cloud-download" size={16} color="black" style={styles.icon} />
      <Text style={styles.text}>Download</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    marginEnd: 4
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: '500',
  }
});