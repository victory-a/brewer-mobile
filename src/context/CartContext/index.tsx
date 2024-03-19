import React, { PropsWithChildren } from 'react';
import { CartReducer, actions, initialState } from './reducer.cart';
import { ICartProduct, ICartState } from 'src/model/order.model';
import { getJSONData } from 'src/utils/storage';

interface ContextProps {
  state: ICartState;
  addItem: (payload: { product: ICartProduct }) => void;
  increase: (payload: { id: number }) => void;
  decrease: (payload: { id: number }) => void;
  remove: (payload: { id: number }) => void;
  clearCart: () => void;
  setDeliveryAmount: (payload: { amount: number }) => void;
}

const Context = React.createContext<ContextProps | undefined>(undefined);

export function CartProvider(props: PropsWithChildren) {
  const [state, dispatch] = React.useReducer(CartReducer, initialState);

  React.useEffect(() => {
    async function fetchPersistedProducts() {
      const products: ICartProduct[] = await getJSONData('CART_PRODUCTS');
      if (products !== null) {
        dispatch({ type: 'INITIALIZE', payload: { products } });
      }
    }

    fetchPersistedProducts();
  }, []);

  function addItem(payload: { product: ICartProduct }) {
    dispatch({ type: actions.ADD_ITEM, payload });
  }

  function increase(payload: { id: number }) {
    dispatch({ type: actions.INCREASE_QUANTITY, payload });
  }

  function decrease(payload: { id: number }) {
    dispatch({ type: actions.DECREASE_QUANTITY, payload });
  }

  function remove(payload: { id: number }) {
    dispatch({ type: actions.REMOVE_ITEM, payload });
  }

  function clearCart() {
    dispatch({ type: actions.CLEAR_CART });
  }

  function setDeliveryAmount(payload: { amount: number }) {
    dispatch({ type: actions.SET_DELIVERY_PRICE, payload });
  }

  return (
    <Context.Provider
      value={{ state, addItem, increase, decrease, clearCart, setDeliveryAmount, remove }}
      {...props}
    />
  );
}

export const useCart = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
