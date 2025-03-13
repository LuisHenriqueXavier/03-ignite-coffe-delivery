import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../@types/product";

// Define uma interface para os produtos no carrinho, que inclui a quantidade
interface CartProduct extends Product {
    quantity: number;
}

// Define a estrutura do contexto do carrinho
interface CartContextType {
    products: CartProduct[];
    addProductToCart: (product: Product, quantity: number) => void;
    updateProductQuantity: (productId: string, quantity: number) => void;
    removeProductFromCart: (productId: string) => void;
}

// Cria o contexto do carrinho com um valor inicial vazio
export const CartContext = createContext({} as CartContextType);

// Cria o provider do contexto, que irá envolver os componentes que precisam acessar o carrinho
export function CartContextProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<CartProduct[]>([]);

    // Adiciona um produto ao carrinho ou atualiza sua quantidade se já existir
    function addProductToCart(product: Product, quantity: number) {
        setProducts((prev) => {
            const productExists = prev.find((item) => item.id === product.id);

            if (productExists) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prev, { ...product, quantity }];
        });
    }

    // Atualiza a quantidade de um produto no carrinho
    function updateProductQuantity(productId: string, quantity: number) {
        setProducts((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    }

    // Remove um produto do carrinho
    function removeProductFromCart(productId: string) {
        setProducts((prev) => prev.filter((item) => item.id !== productId));
    }

    return (
        <CartContext.Provider value={{ products, addProductToCart, updateProductQuantity, removeProductFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Hook personalizado para facilitar o uso do contexto do carrinho
export function useCart() {
    return useContext(CartContext);
}
