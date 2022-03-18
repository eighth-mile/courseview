import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeEmptyView from './components/HomeEmptyView';
import List from './components/List';
import ListItem from './components/ListItem';
import HomeView from './pages/HomeView';
import ProgramSelector from './pages/ProgramSelector';
import SubjectListView from './pages/SubjectListView';
import SubjectSyllabus from './pages/SubjectSyllabus';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{ ...stackOptions, title: "Courseview" }}
          />
          <Stack.Screen
            name="ProgramSelector"
            component={ProgramSelector}
            options={{ ...stackOptions, title: "Available programs" }}
          />
          <Stack.Screen
            name="SubjectListView"
            component={SubjectListView}
            options={{ ...stackOptions, title: "Subjects" }}
          />
          <Stack.Screen
            name="SubjectSyllabus"
            component={SubjectSyllabus}
            options={{ ...stackOptions, title: "Syllabus" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const stackOptions = {
  headerStyle: {
    backgroundColor: '#3C6BA3'
  },
  headerTintColor: '#fff',
};
