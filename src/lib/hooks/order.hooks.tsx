import { Alert } from 'react-native';

import { getOrder, getOrders } from '../requests/order.requests';

import useAsync from 'src/hooks/useAsync';
import { IOrderList, ISingleOrder } from 'src/model/order.model';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { useCart } from 'src/context/CartContext';

export function useGetOrders(orderStatus?: IOrderList['status']) {
  const { isLoading, value, execute } = useAsync(
    () =>
      getOrders(orderStatus)
        .then((res) => res.data)
        .catch((err) => Alert.alert('Error', err.message)),
    false
  );

  return {
    execute,
    isLoading,
    orders: value?.orders as IOrderList[]
  };
}

export function useGetAnOrder() {
  const { navigate } = useAppNavigation();
  const { initializeCart } = useCart();

  const { isLoading, execute, value } = useAsync(
    (id: number) =>
      getOrder(id)
        .then((res) => {
          initializeCart(res.data);
          return res.data;
        })
        .catch((err) => {
          navigate('Orders');
          Alert.alert('Error', err.message);
        }),
    false
  );

  return { execute, isLoading, order: value as ISingleOrder };
}
