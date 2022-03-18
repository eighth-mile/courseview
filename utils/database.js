import AsyncStorage from '@react-native-async-storage/async-storage';

export async function set(key, value) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function get(key) {
  const result = await AsyncStorage.getItem(key);
  if (result === null) {
    return null;
  } else {
    return JSON.parse(result);
  }
}

export async function isProgramDownloaded(title) {
  const offlinePrograms = await getAllOfflinePrograms();
  return title in offlinePrograms;
}

export async function getAllOfflinePrograms() {
  const offlinePrograms = await get('offline-programs');
  if (offlinePrograms === null) {
    return {}
  } else {
    return offlinePrograms;
  }
}

export async function setOfflinePrograms(programs) {
  await set('offline-programs', programs);
}

export async function getProgram(title) {
  const offlinePrograms = await getAllOfflinePrograms();
  return offlinePrograms[title];
}
