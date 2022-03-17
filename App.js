import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeEmptyView from './components/HomeEmptyView';
import List from './components/List';
import ListItem from './components/ListItem';
import ProgramSelector from './pages/ProgramSelector';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProgramSelector />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
