import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Loading from '../components/Loading';
import List from '../components/List';
import ListItem from '../components/ListItem';
import DownloadButton from '../components/DownloadButton';
import SyncButton from '../components/SyncButton';
import { get, set } from '../utils/database';


const DOCUMENTS_URL = "https://raw.githubusercontent.com/eighth-mile/syllabus-repo/main/documents.json";

const getProgramsFromApi = async () => {
  const response = await fetch(DOCUMENTS_URL);
  const json = await response.json();
  return json;
}

export default function ProgramSelector() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [programs, setPrograms] = React.useState([]);

  React.useEffect(async () => {
    try {
      const result = await getProgramsFromApi();
      setPrograms(result);
      await set('programs', result);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [])

  return (
    <View style={styles.container}>
      {loading &&
        <Loading />
      }
      {error ?
        <Text style={styles.error}>Error occurred while fetching documents!</Text> :
        <List>
          {programs.map((program, index) => (
            <ListItem
              key={program.title}
              title={program.title}
              subtitle={`${program.courses.length} subjects`}
              action={<DownloadButton />}
            />
          ))}
        </List>
      }
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
  error: {
    color: 'red',
  }
});
