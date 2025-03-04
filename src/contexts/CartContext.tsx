import { createContext, ReactNode, useState } from "react";
import { Product } from "../@types/product";


interface CartProduct extends Product { 
    amount: number,
}

interface CartContextType {
    products: CartProduct[],
    addProductToCart: (product: CartProduct) => void,
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode,
}

export function CartContextProvider({ children }: CartContextProviderProps ) {

    const [products, setProducts] = useState<CartProduct[]>([])

    function addProductToCart(product: CartProduct) {
        
        setProducts(oldState => {
            return [...oldState, product]
        }) 
    }

    return (
        <CartContext.Provider value={{ products, addProductToCart }}>{children}</CartContext.Provider>
    )
}