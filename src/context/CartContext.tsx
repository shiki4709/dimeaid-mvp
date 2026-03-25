"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { MenuItem } from "@/lib/data";

export interface CartItem {
  readonly item: MenuItem;
  readonly quantity: number;
  readonly restaurantId: string;
  readonly restaurantName: string;
}

interface CartContextType {
  readonly items: readonly CartItem[];
  readonly restaurantId: string | null;
  readonly restaurantName: string | null;
  readonly totalItems: number;
  readonly subtotal: number;
  addItem: (item: MenuItem, restaurantId: string, restaurantName: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<readonly CartItem[]>([]);
  const [restaurantId, setRestaurantId] = useState<string | null>(null);
  const [restaurantName, setRestaurantName] = useState<string | null>(null);

  const addItem = useCallback(
    (item: MenuItem, restId: string, restName: string) => {
      setItems((prev) => {
        const existing = prev.find((ci) => ci.item.id === item.id);
        if (existing) {
          return prev.map((ci) =>
            ci.item.id === item.id
              ? { ...ci, quantity: ci.quantity + 1 }
              : ci
          );
        }
        return [...prev, { item, quantity: 1, restaurantId: restId, restaurantName: restName }];
      });
      setRestaurantId(restId);
      setRestaurantName(restName);
    },
    []
  );

  const removeItem = useCallback((itemId: string) => {
    setItems((prev) => {
      const next = prev.filter((ci) => ci.item.id !== itemId);
      if (next.length === 0) {
        setRestaurantId(null);
        setRestaurantName(null);
      }
      return next;
    });
  }, []);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      return removeItem(itemId);
    }
    setItems((prev) =>
      prev.map((ci) =>
        ci.item.id === itemId ? { ...ci, quantity } : ci
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
    setRestaurantId(null);
    setRestaurantName(null);
  }, []);

  const totalItems = items.reduce((sum, ci) => sum + ci.quantity, 0);
  const subtotal = items.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, restaurantId, restaurantName, totalItems, subtotal, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
