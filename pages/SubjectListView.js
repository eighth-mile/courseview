import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import List from '../components/List';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';
import { getProgram } from '../utils/database';

export default function SubjectListView({ programTitle }) {
  const [loading, setLoading] = React.useState(true);
  const [program, setProgram] = React.useState(null);

  React.useEffect(async () => {
    const programDetails = await getProgram(programTitle);
    setProgram(programDetails);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <View styles={styles.container}>
      <ScrollView style={styles.scrollView}>
        <List>
          {program.subjects.map(subject => (
            <ListItem
              key={subject.code}
              title={subject.title}
              subtitle={subject.code}
              onPress={() => console.log("pressed")}
            />
          ))}
        </List>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
  },
  scrollView: {

  }
});
