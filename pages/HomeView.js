import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import HomeEmptyView from '../components/HomeEmptyView';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';
import { getAllOfflinePrograms } from '../utils/database';


export default function HomeView() {
  const [loading, setLoading] = React.useState(true);
  const [offlinePrograms, setOfflinePrograms] = React.useState([]);

  React.useEffect(async () => {
    const programs = await getAllOfflinePrograms();
    setOfflinePrograms(Object.values(programs));
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  } else if (offlinePrograms.length === 0) {
    return <HomeEmptyView />;
  }

  return (
    <View style={styles.container}>
      <List>
        {offlinePrograms.map(program => (
          <ListItem
            key={program.title}
            title={program.title}
            subtitle={`${program.subjects.length} subjects`}
          />
        ))}
      </List>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ADD COURSE</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3C6BA3',
    paddingHorizontal: 32,
    paddingVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
});
