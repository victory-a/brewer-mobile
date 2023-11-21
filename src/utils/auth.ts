import { getItem, setItem, deleteItem } from 'react-native-sensitive-info';

const options = {
  sharedPreferencesName: 'mySharedPrefs',
  keychainService: 'myKeychain'
};

export function getToken() {
  return getItem('TOKEN', options);
}

export function setToken(value: string) {
  return setItem('TOKEN', value, options);
}

export function deleteToken() {
  return deleteItem('TOKEN', options);
}
