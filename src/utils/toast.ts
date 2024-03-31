import Toast from 'react-native-toast-message';

interface IDisplayToast {
  type?: 'success' | 'error' | 'info';
  message: string;
}

function displayToast({ type = 'success', message }: IDisplayToast) {
  console.log('ran toast');

  return Toast.show({
    type,
    text1: message
  });
}

export { displayToast };
