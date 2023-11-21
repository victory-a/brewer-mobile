import { getItem, setItem } from 'react-native-sensitive-info';

export function getToken() {
  return getItem('TOKEN', {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain'
  });
}

export function setStoken(value: string) {
  return setItem('TOKEN', value, {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain'
  });
}
