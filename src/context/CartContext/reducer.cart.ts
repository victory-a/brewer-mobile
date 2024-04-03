import { ICartProduct, ICartState, ICartSum } from 'src/model/order.model';
import { storeJSONData } from 'src/utils';

export const initialState = {
  computedProductsTotal: 0,
  computedGrandTotal: 0,
  deliveryPrice: 0,
  products: []
};

export const actions = {
  INITIALIZE: 'INITIALIZE',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  ADD_ITEM: 'ADD_ITEM',
  SET_DELIVERY_PRICE: 'SET_DELIVERY_PRICE',
  REMOVE_ITEM: 'REMOVE_ITEM'
} as const;

type IAction =
  | { type: 'INITIALIZE'; payload: { products: ICartProduct[] } }
  | { type: 'SET_DELIVERY_PRICE'; payload: { amount: number } }
  | {
      type: 'INCREASE_QUANTITY' | 'DECREASE_QUANTITY' | 'REMOVE_ITEM';
      payload: { temporaryUUID: string };
    }
  | {
      type: 'ADD_ITEM';
      payload: { product: ICartProduct };
    }
  | { type: 'CLEAR_CART' };

function computeSumAndPersist(state: ICartState): ICartSum {
  storeJSONData('CART_PRODUCTS', state.products);

  return {
    deliveryPrice: state.deliveryPrice,
    computedProductsTotal: 0,
    computedGrandTotal: 0
  };
}

export function CartReducer(state: ICartState, action: IAction) {
  switch (action.type) {
    case actions.INITIALIZE: {
      state.products = action.payload.products;
      return {
        ...state,
        ...computeSumAndPersist(state)
      };
    }

    case actions.ADD_ITEM: {
      state.products.push(action.payload.product);

      return {
        ...state,
        ...computeSumAndPersist(state)
      };
    }

    case actions.INCREASE_QUANTITY: {
      state.products.map((item) => {
        if (item.temporaryUUID === action.payload.temporaryUUID) {
          item.quantity = item.quantity + 1;
          return item;
        }
        return item;
      });

      return {
        ...state,
        ...computeSumAndPersist(state)
      };
    }

    case actions.DECREASE_QUANTITY: {
      const targetProductIndex = state.products.findIndex(
        (item) => item.temporaryUUID === action.payload.temporaryUUID
      );

      const targetProduct = state.products[targetProductIndex];

      if (targetProduct.quantity > 1) {
        state.products[targetProductIndex].quantity--;
      }

      return {
        ...state,
        ...computeSumAndPersist(state)
      };
    }

    case actions.REMOVE_ITEM: {
      state.products.filter((product) => product.temporaryUUID !== action.payload.temporaryUUID);

      return {
        ...state,
        ...computeSumAndPersist(state)
      };
    }

    case actions.SET_DELIVERY_PRICE: {
      state.deliveryPrice = action.payload.amount;
      return {
        ...state,
        ...computeSumAndPersist(state)
      };
    }

    case actions.CLEAR_CART: {
      state.products = [];
      return {
        ...state,
        ...computeSumAndPersist(state)
      };
    }

    default:
      return state;
  }
}
