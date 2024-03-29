import { Alert } from 'react-native';

import { getAProduct, getProducts } from '../requests/product.request';

import useAsync from 'src/hooks/useAsync';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { IProduct } from 'src/model/order.model';

type IAllProducts = Pick<IProduct, 'id' | 'image' | 'name' | 'basePrice' | 'variant'>;

export function useGetProducts() {
  const { isLoading, value, execute } = useAsync(() =>
    getProducts()
      .then((res) => res.data)
      .catch((err) => Alert.alert('Error', err.message))
  );

  return {
    execute,
    isLoading,
    products: value?.products as IAllProducts[]
  };
}

export function useGetAProduct() {
  const { navigate } = useAppNavigation();
  const { isLoading, value, execute } = useAsync(
    (id: number) =>
      getAProduct(id)
        .then((res) => res.data)
        .catch((err) => {
          navigate('AppBottomTabs');
          Alert.alert('Error', err.message);
        }),
    false
  );

  return { execute, isLoading, product: value as IProduct };
}
