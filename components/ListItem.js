import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function ListItem({ title, subtitle, action, onPress }) {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>

        <View style={styles.actionContainer}>
          {action}
        </View>
      </TouchableOpacity>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#CBCBCB',
    marginHorizontal: 8,
    marginVertical: 4,
    padding: 8,
  },
  textContainer: {
    alignItems: 'flex-start',
  }, 
  actionContainer: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 20,
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#727272"
  },
});
