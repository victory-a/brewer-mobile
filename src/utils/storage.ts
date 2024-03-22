import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeJSONData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getJSONData = async (key: string) => {
  return await AsyncStorage.getItem(key).then((val) => (val !== null ? JSON.parse(val) : null));
};

export async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error(e);
  }
}
