import { ICartProduct, ICartState, ICartSum } from 'src/model/order.model';

export const initialState = {
  deliveryPrice: 0,
  computedProductsTotal: 0,
  computedGrandTotal: 0,
  products: []
};

export const actions = {
  INITIALIZE: 'INITIALIZE',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  ADD_ITEM: 'ADD_ITEM',
  SET_DELIVERY_PRICE: 'SET_DELIVERY_PRICE'
} as const;

type IAction =
  | {
      type: 'INITIALIZE';
      payload: { products: ICartProduct[] };
    }
  | { type: 'SET_DELIVERY_PRICE'; payload: { amount: number } }
  | { type: 'INCREASE_QUANTITY' | 'DECREASE_QUANTITY'; payload: { id: number } }
  | {
      type: 'ADD_ITEM';
      payload: { product: ICartProduct };
    }
  | { type: 'CLEAR_CART' };

function computeSum(state: ICartState): ICartSum {
  return {
    deliveryPrice: 0,
    computedProductsTotal: 0,
    computedGrandTotal: 0
  };
}

export function CartReducer(state: ICartState, action: IAction) {
  const { products, ...rest } = state;
  switch (action.type) {
    case actions.INITIALIZE:
      return { ...action.payload, ...computeSum(state) };

    case actions.ADD_ITEM: {
      const updatedCartProducts = [...state.products];
      updatedCartProducts.push(action.payload.product);

      return {
        ...state,
        ...computeSum({ products: updatedCartProducts, ...rest }),
        products: updatedCartProducts
      };
    }

    case actions.INCREASE_QUANTITY: {
      const updatedCartProducts = state.products.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      return {
        ...state,
        ...computeSum({ products: updatedCartProducts, ...rest }),
        products: updatedCartProducts
      };
    }

    case actions.DECREASE_QUANTITY: {
      const targetProductIndex = state.products.findIndex((item) => item.id === action.payload.id);

      const targetProduct = state.products[targetProductIndex];
      const productsClone = [...state.products];

      if (targetProduct.quantity > 1) {
        productsClone[targetProductIndex].quantity--;
      }

      return {
        ...state,
        ...computeSum({ products: productsClone, ...rest }),
        products: productsClone
      };
    }

    case actions.SET_DELIVERY_PRICE: {
      return {
        ...state,
        ...computeSum({ ...state, deliveryPrice: action.payload.amount })
      };
    }

    case actions.CLEAR_CART: {
      return {
        ...state,
        ...computeSum({ products: [], ...rest })
      };
    }

    default:
      return state;
  }
}
