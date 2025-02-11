import { create } from 'zustand';
import { CartItem, Product } from '../types';

interface Store {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  total: number;
}

export const useStore = create<Store>((set) => ({
  cart: [],
  total: 0,
  addToCart: (product, quantity) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.product.id === product.id);
      const newCart = existingItem
        ? state.cart.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...state.cart, { product, quantity }];

      const total = newCart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      return { cart: newCart, total };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );

      const total = newCart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      return { cart: newCart, total };
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.product.id !== productId);
      const total = newCart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      return { cart: newCart, total };
    }),
  clearCart: () => set({ cart: [], total: 0 }),
}));