import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Loading from '../components/Loading';
import List from '../components/List';
import ListItem from '../components/ListItem';
import DownloadButton from '../components/DownloadButton';
import SyncButton from '../components/SyncButton';
import { downloadProgramFromRepo, getProgramsFromRepo } from '../utils/api';

export default function ProgramSelector() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [programs, setPrograms] = React.useState([]);

  React.useEffect(async () => {
    try {
      const result = await getProgramsFromRepo();
      setPrograms(result);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [])

  const downloadProgram = async (index) => {
    try {
      setLoading(true);
      await downloadProgramFromRepo(index);
      const result = await getProgramsFromRepo();
      setPrograms(result);
    } catch (e) {
      Alert.alert(
        "Error downloading the program",
        "Couldn't download the program subjects! Please try again",
        [{ text: 'OK' }]
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {loading &&
        <Loading />
      }
      {error ?
        <Text style={styles.error}>Error occurred while fetching programs!</Text> :
        <List>
          {programs.map((program, index) => (
            <ListItem
              key={program.title}
              title={program.title}
              subtitle={`${program.subjects.length} subjects`}
              action={
                program.isDownloaded
                  ? <SyncButton onPress={() => downloadProgram(index)} />
                  : <DownloadButton onPress={() => downloadProgram(index)} />
              }
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
