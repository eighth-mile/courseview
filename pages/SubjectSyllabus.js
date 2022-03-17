import { WebView } from 'react-native-webview';
import { StyleSheet, View } from "react-native";

import { sampleContent } from '../utils/misc';
import { getSyllabusHTML } from '../utils/subject-content';

export default function SubjectSyllabus() {
  const html = getSyllabusHTML(sampleContent);
  return (
    <View style={styles.container}>
      <WebView
        styles={styles.content}
        originWhitelist={['*']}
        source={{ html }}
        javascriptEnabled={true}
        scrollEnabled={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
