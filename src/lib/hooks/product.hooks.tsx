import { getAProduct, getProducts } from '../requests/product.request';

import useAsync from 'src/hooks/useAsync';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { IProduct } from 'src/model/order.model';
import { displayToast } from 'src/utils/toast';

type IAllProducts = Pick<IProduct, 'id' | 'image' | 'name' | 'basePrice' | 'variant'>;

export function useGetProducts(query?: string) {
  const { isLoading, value, execute } = useAsync(() =>
    getProducts(query)
      .then((res) => res.data)
      .catch((err) => displayToast({ type: 'error', message: err.message }))
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
          displayToast({ type: 'error', message: err.message });
        }),
    false
  );

  return { execute, isLoading, product: value as IProduct };
}
