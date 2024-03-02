import { ISingleOrder } from 'src/model/order.model';

export const initialState = {
  deliveryPrice: 0,
  computedProductsTotal: 0,
  computedGrandTotal: 0,
  order: undefined,
  products: []
};

export const actions = {
  INITIALIZE: 'INITIALIZE',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
} as const;

type IAction =
  | { type: 'INCREASE_QUANTITY' | 'DECREASE_QUANTITY'; payload: { productID: number } }
  | {
      type: 'INITIALIZE';
      payload: { order: Omit<ISingleOrder, 'products'>; products: ISingleOrder['products'] };
    }
  | { type: 'CLEAR_CART'; payload: typeof initialState };

interface ISum {
  deliveryPrice: number;
  computedProductsTotal: number;
  computedGrandTotal: number;
}

function computeSum(products: ISingleOrder['products']): ISum {
  return {
    deliveryPrice: 0,
    computedProductsTotal: 0,
    computedGrandTotal: 0
  };
}

export interface ICartState extends ISum {
  order?: Omit<ISingleOrder, 'products'>;
  products: ISingleOrder['products'];
}

export function CartReducer(state: ICartState, action: IAction) {
  switch (action.type) {
    case actions.INITIALIZE:
      return { ...action.payload, ...computeSum(action.payload.products) };

    case actions.INCREASE_QUANTITY: {
      const updatedCartProducts = state.products.map((item) => {
        if (item.productId === action.payload.productID) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      return {
        ...state,
        ...computeSum(updatedCartProducts),
        products: updatedCartProducts
      };
    }

    case actions.DECREASE_QUANTITY: {
      const targetProductIndex = state.products.findIndex(
        (item) => item.productId === action.payload.productID
      );

      const targetProduct = state.products[targetProductIndex];
      const productsClone = [...state.products];

      if (targetProduct.quantity > 1) {
        productsClone[targetProductIndex].quantity--;
      }

      return {
        ...state,
        ...computeSum(productsClone),
        products: productsClone
      };
    }

    case actions.CLEAR_CART: {
      return action.payload;
    }

    default:
      return state;
  }
}
