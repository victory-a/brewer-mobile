import { getItem, setItem } from 'react-native-sensitive-info';

export function getToken() {
  return getItem('TOKEN', {});
}

export function setStoken(value: string) {
  return setItem('TOKEN', value, {});
}
