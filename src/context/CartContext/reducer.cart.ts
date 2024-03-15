import { ICartProduct, ICartState, ICartSum } from 'src/model/order.model';
import { storeJSONData, getData, getJSONData, storeData } from 'src/utils/storage';

export const initialState = {
  computedProductsTotal: 0,
  computedGrandTotal: 0,
  deliveryPrice: getData('DELIVERY') ?? 0,
  products: getJSONData('CART_PRODUCTS') ?? []
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
  | { type: 'SET_DELIVERY_PRICE'; payload: { amount: number } }
  | {
      type: 'INCREASE_QUANTITY' | 'DECREASE_QUANTITY' | 'REMOVE_ITEM';
      payload: { id: number };
    }
  | {
      type: 'ADD_ITEM';
      payload: { product: ICartProduct };
    }
  | { type: 'CLEAR_CART' };

function computeSum(state: ICartState): ICartSum {
  storeJSONData('CART_PRODUCTS', state.products);
  storeData('DELIVERY', state.deliveryPrice.toString());

  return {
    deliveryPrice: 0,
    computedProductsTotal: 0,
    computedGrandTotal: 0
  };
}

export function CartReducer(state: ICartState, action: IAction) {
  const { products, ...rest } = state;
  switch (action.type) {
    case actions.ADD_ITEM: {
      const updatedCartProducts = [...state.products];
      updatedCartProducts.push(action.payload.product);

      return {
        ...state,
        ...computeSum({ ...rest, products: updatedCartProducts }),
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
        ...computeSum({ ...rest, products: updatedCartProducts }),
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
        ...computeSum({ ...rest, products: productsClone }),
        products: productsClone
      };
    }

    case actions.REMOVE_ITEM: {
      const updatedProducts = state.products.filter((product) => product.id !== action.payload.id);

      return {
        ...state,
        ...computeSum({ ...rest, products: updatedProducts })
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
        ...computeSum({ ...rest, products: [] })
      };
    }

    default:
      return state;
  }
}
