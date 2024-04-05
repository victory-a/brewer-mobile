import { ICartProduct, ICartState, ICartSum } from 'src/model/order.model';
import { storeJSONData } from 'src/utils';

export const initialState = {
  totalUnitPrice: 0,
  grandTotal: 0,
  deliveryPrice: 1,
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

const calculateUnitPrice = (productInfo: ICartProduct) => {
  let unitPrice = 0;
  const sizePrice = productInfo.selectedSize;
  if (sizePrice) {
    unitPrice = Number(productInfo[sizePrice]) + Number(productInfo.basePrice);
  } else {
    unitPrice = Number(productInfo.basePrice);
  }

  return unitPrice;
};

function computeSumAndPersist(state: ICartState): ICartSum {
  storeJSONData('CART_PRODUCTS', state.products);

  const totalUnitPrice = state.products.reduce((acc, product) => {
    const productPrice = calculateUnitPrice(product);
    return (acc += productPrice * product.quantity);
  }, 0);

  return {
    deliveryPrice: state.deliveryPrice,
    totalUnitPrice,
    grandTotal: totalUnitPrice + state.deliveryPrice
  };
}

export function CartReducer(state: ICartState, action: IAction) {
  const { products, ...rest } = state;
  switch (action.type) {
    case actions.INITIALIZE: {
      return {
        ...state,
        ...computeSumAndPersist({ ...state, products: action.payload.products }),
        products: action.payload.products
      };
    }

    case actions.ADD_ITEM: {
      const updatedCartProducts = [...state.products];
      updatedCartProducts.push(action.payload.product);

      return {
        ...state,
        ...computeSumAndPersist({ ...rest, products: updatedCartProducts }),
        products: updatedCartProducts
      };
    }

    case actions.INCREASE_QUANTITY: {
      const updatedCartProducts = state.products.map((item) => {
        if (item.temporaryUUID === action.payload.temporaryUUID) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      return {
        ...state,
        ...computeSumAndPersist({ ...rest, products: updatedCartProducts }),
        products: updatedCartProducts
      };
    }

    case actions.DECREASE_QUANTITY: {
      const targetProductIndex = state.products.findIndex(
        (item) => item.temporaryUUID === action.payload.temporaryUUID
      );

      const targetProduct = state.products[targetProductIndex];
      const productsClone = [...state.products];

      if (targetProduct.quantity > 1) {
        productsClone[targetProductIndex].quantity--;
      }

      return {
        ...state,
        ...computeSumAndPersist({ ...rest, products: productsClone }),
        products: productsClone
      };
    }

    case actions.REMOVE_ITEM: {
      const updatedProducts = state.products.filter(
        (product) => product.temporaryUUID !== action.payload.temporaryUUID
      );

      return {
        ...state,
        ...computeSumAndPersist({ ...rest, products: updatedProducts }),
        products: updatedProducts
      };
    }

    case actions.SET_DELIVERY_PRICE: {
      return {
        ...state,
        ...computeSumAndPersist({ ...state, deliveryPrice: action.payload.amount })
      };
    }

    case actions.CLEAR_CART: {
      return {
        ...state,
        ...computeSumAndPersist({ ...rest, products: [] }),
        products: []
      };
    }

    default:
      return state;
  }
}
