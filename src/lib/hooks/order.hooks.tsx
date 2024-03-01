import { Alert } from 'react-native';

import { getOrders } from '../requests/order.requests';

import useAsync from 'src/hooks/useAsync';
import { IOrder } from 'src/model/order.model';

export function useGetOrders(orderStatus?: IOrder['status']) {
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
    orders: value?.orders as IOrder[]
  };
}
