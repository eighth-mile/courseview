import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


export default function HomeEmptyView() {
  return (
    <View style={styles.container}>
      <AntDesign name="addfile" size={96} color="#CBCBCB" />
      <Text style={styles.text}>
        Consider adding programs from our repository
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ADD COURSE</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#727272',
    padding: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#3C6BA3',
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});
