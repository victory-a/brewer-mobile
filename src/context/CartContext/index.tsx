import React, { PropsWithChildren } from 'react';
import { Alert } from 'react-native';
import { IOrderProduct, ISingleOrder } from 'src/model/order.model';
import { CartReducer, ICartState, actions, initialState } from './reducer.cart';

interface ContextProps {
  state: ICartState;
  increase: (payload: { productID: number }) => void;
  decrease: (payload: { productID: number }) => void;
  initializeCart: (payload: ISingleOrder) => void;
  clearCart: () => void;
}

const Context = React.createContext<ContextProps | undefined>(undefined);

export function CartProvider(props: PropsWithChildren) {
  const [state, dispatch] = React.useReducer(CartReducer, initialState);

  function increase(payload: { productID: number }) {
    dispatch({ type: actions.INCREASE_QUANTITY, payload });
  }

  function decrease(payload: { productID: number }) {
    dispatch({ type: actions.DECREASE_QUANTITY, payload });
  }

  function initializeCart(payload: ISingleOrder) {
    console.log({ payload });
    const { products, ...rest } = payload;

    dispatch({ type: actions.INITIALIZE, payload: { products, order: { ...rest } } });
  }

  function clearCart() {
    dispatch({ type: actions.CLEAR_CART, payload: initialState });
  }

  return (
    <Context.Provider value={{ state, increase, decrease, initializeCart, clearCart }} {...props} />
  );
}

export const useCart = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
