import { createOrder, getOrder, getOrders, updateOrder } from '../requests/order.requests';

import useAsync from 'src/hooks/useAsync';
import { IOrderList, ISingleOrder, OrderStatus } from 'src/model/order.model';
import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { useCart } from 'src/context/CartContext';
import { displayToast } from 'src/utils/toast';

export function useGetOrders(orderStatus?: IOrderList['status']) {
  const { isLoading, value, execute } = useAsync(
    () =>
      getOrders(orderStatus)
        .then((res) => res.data)
        .catch((err) => displayToast({ type: 'error', message: err.message })),
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

  const { isLoading, execute, value } = useAsync(
    (id: number) =>
      getOrder(id)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          navigate('Orders');
          displayToast({ type: 'error', message: err.message });
        }),
    false
  );

  return { execute, isLoading, order: value as ISingleOrder };
}

export function useCreateOrder() {
  const { navigate } = useAppNavigation();
  const { clearCart } = useCart();

  const { execute, isLoading } = useAsync(async (payload) => {
    createOrder(payload)
      .then(() => {
        navigate('Home');
        clearCart();
        displayToast({ message: 'Order Created SuccessFully 🥳🥳' });
      })
      .catch((err) => displayToast({ type: 'error', message: err.message }));
  });

  return {
    execute,
    isLoading
  };
}

export function useUpdateOrder(payload: { id: number; status: OrderStatus }) {
  const { navigate } = useAppNavigation();
  const { execute, isLoading } = useAsync(async () => {
    updateOrder(payload)
      .then((res) => {
        navigate('Order-Completed', { orderId: res.data.id });
      })
      .catch((err) => displayToast({ type: 'error', message: err.message }));
  });

  return {
    execute,
    isLoading
  };
}
