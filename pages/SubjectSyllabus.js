import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View, Linking } from "react-native";

import { getSyllabusHTML } from '../utils/subject-content';
import { getSubjectSyllabus } from '../utils/database';
import Loading from '../components/Loading';

export default function SubjectSyllabus({ route }) {
  const path = route.params.path;
  const [html, setHtml] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(async () => {
    const syllabus = await getSubjectSyllabus(path);
    const htmlContent = getSyllabusHTML(syllabus.content);
    setHtml(htmlContent);
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />
  }

  function handleWebViewRequest(request) {
    const { url } = request;
    if (!url) return false;

    if (url !== "about:blank") {
      Linking.openURL(url);
      return false;
    } else {
      return true;
    }
  }

  return (
    <View style={styles.container}>
      <WebView
        ref={(ref) => { this.webview = ref; }}
        styles={styles.content}
        originWhitelist={['*']}
        source={{ html }}
        javascriptEnabled={true}
        scrollEnabled={true}
        onShouldStartLoadWithRequest={handleWebViewRequest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
