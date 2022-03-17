import { markdownToHTML } from "../utils/subject-content"
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function SubjectSyllabus() {
    let testMd = `# Hello World Webview!
    
This is an md paragraph`;

    let runFirst = `alert("Sample alert box!")`

    let content = `
    <html>
    <head>
    <style>
    body {
        font-size: 34px
    } 
    </style>
    </head>
    <body>
    ${markdownToHTML(testMd)}
    </body>
    `

    return (
        <View style={styles.container}>
            <View style={styles.statusBar} />
            <WebView
                originWhitelist={
                    ['*']
                }
                source={
                    { html: content }
                }
                javascriptEnabled={true}
                scrollEnabled={false}
                injectedJavaScriptBeforeContentLoaded={runFirst}
                onMessage={
                    (event) => { }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        backgroundColor: "#1D3B57",
        height: 0,
    }
});