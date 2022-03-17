import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import DownloadButton from './DownloadButton';
import ListItem from './ListItem';
import SyncButton from './SyncButton';

export default function List({ items }) {
  return (
    <View style={styles.container}>
      <ListItem
        title="My program"
        subtitle="9 subjects" 
        action={<SyncButton />}
      />
      <ListItem
        title="My program 2" 
        subtitle="8 subjects" 
        action={<DownloadButton />}
      />
      <ListItem
        title="My program"
        subtitle="9 subjects"
      />
    </View>
  )   
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});