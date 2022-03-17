import AsyncStorage from '@react-native-async-storage/async-storage';

export async function set(key, value) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function get(key) {
  const result = await AsyncStorage.getItem(key);
  return JSON.parse(result);
}
