import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeEmptyView from './components/HomeEmptyView';
import List from './components/List';
import ListItem from './components/ListItem';
import HomeView from './pages/HomeView';
import ProgramSelector from './pages/ProgramSelector';
import SubjectListView from './pages/SubjectListView';
import SubjectSyllabus from './pages/SubjectSyllabus';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeView />
      {/* <ProgramSelector /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
