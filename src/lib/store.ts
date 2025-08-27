import { create } from "zustand";

export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
    wattage: number | null;
    colorTemperature: string | null;
    lumens: number | null;
    isAvailable: boolean;
    stockQuantity: number;
    createdAt: Date;
    updatedAt: Date;
}

interface CartItem extends Product {
    quantity: number;
}

interface AppState {
    products: Product[];
    cart: CartItem[];
    isLoading: boolean;
    setProducts: (products: Product[]) => void;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateCartQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    setLoading: (loading: boolean) => void;
    getCartTotal: () => number;
    getCartItemCount: () => number;
}

export const useAppStore = create<AppState>((set, get) => ({
    products: [],
    cart: [],
    isLoading: false,

    setProducts: (products) => set({ products }),

    addToCart: (product) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            set({
                cart: cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            });
        } else {
            set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
    },

    removeFromCart: (productId) => {
        const { cart } = get();
        set({ cart: cart.filter((item) => item.id !== productId) });
    },

    updateCartQuantity: (productId, quantity) => {
        const { cart } = get();
        if (quantity <= 0) {
            set({ cart: cart.filter((item) => item.id !== productId) });
        } else {
            set({
                cart: cart.map((item) =>
                    item.id === productId ? { ...item, quantity } : item
                ),
            });
        }
    },

    clearCart: () => set({ cart: [] }),

    setLoading: (isLoading) => set({ isLoading }),

    getCartTotal: () => {
        const { cart } = get();
        return cart.reduce(
            (total, item) => total + Number(item.price) * item.quantity,
            0
        );
    },

    getCartItemCount: () => {
        const { cart } = get();
        return cart.reduce((count, item) => count + item.quantity, 0);
    },
}));
