import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

interface CartContextType {
  state: CartState;
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (productId: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  getItemInCart: (productId: string, size?: string) => CartItem | undefined;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; size?: string } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: string; size?: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number; size?: string } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, size } = action.payload;
      const existingItem = state.items.find(
        item => item.product.id === product.id && item.size === size
      );

      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return calculateTotals({ ...state, items: updatedItems });
      }

      const newItem: CartItem = { product, quantity: 1, size };
      return calculateTotals({ ...state, items: [...state.items, newItem] });
    }

    case 'REMOVE_FROM_CART': {
      const { productId, size } = action.payload;
      const updatedItems = state.items.filter(
        item => !(item.product.id === productId && item.size === size)
      );
      return calculateTotals({ ...state, items: updatedItems });
    }

    case 'UPDATE_QUANTITY': {
      const { productId, quantity, size } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: { productId, size } });
      }

      const updatedItems = state.items.map(item =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      );
      return calculateTotals({ ...state, items: updatedItems });
    }

    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };

    case 'LOAD_CART':
      return calculateTotals({ ...state, items: action.payload });

    default:
      return state;
  }
};

const calculateTotals = (state: CartState): CartState => {
  const total = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = state.items.reduce((count, item) => count + item.quantity, 0);
  return { ...state, total, itemCount };
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('metal-band-cart');
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: cartItems });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('metal-band-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product: Product, size?: string) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, size } });
  };

  const removeFromCart = (productId: string, size?: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId, size } });
  };

  const updateQuantity = (productId: string, quantity: number, size?: string) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity, size } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemInCart = (productId: string, size?: string) => {
    return state.items.find(item => item.product.id === productId && item.size === size);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};