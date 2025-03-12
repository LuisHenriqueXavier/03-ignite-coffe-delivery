// Importa os hooks necessários do React
import { createContext, ReactNode, useContext, useState } from "react";
// Importa o tipo Product de um arquivo de tipos
import { Product } from "../@types/product";

// Define uma interface para os produtos no carrinho, que inclui a quantidade
interface CartProduct extends Product {
    quantity: number;
}

// Define a estrutura do contexto do carrinho
interface CartContextType {
    products: CartProduct[]; // Lista de produtos no carrinho
    addProductToCart: (product: Product, quantity: number) => void; // Função para adicionar produtos ao carrinho
}

// Cria o contexto do carrinho com um valor inicial vazio
export const CartContext = createContext({} as CartContextType);

// Cria o provider do contexto, que irá envolver os componentes que precisam acessar o carrinho
export function CartContextProvider({ children }: { children: ReactNode }) {
    // Estado que armazena os produtos adicionados ao carrinho
    const [products, setProducts] = useState<CartProduct[]>([]);

    // Função para adicionar produtos ao carrinho
    function addProductToCart(product: Product, quantity: number) {
        setProducts((prev) => {
            // Verifica se o produto já existe no carrinho
            const productExists = prev.find((item) => item.id === product.id);

            if (productExists) {
                // Se o produto já estiver no carrinho, apenas atualiza a quantidade
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            // Se for um novo produto, adiciona ele à lista
            return [...prev, { ...product, quantity }];
        });
    }

    return (
        // Fornece os dados do carrinho e a função de adicionar produtos para os componentes filhos
        <CartContext.Provider value={{ products, addProductToCart }}>
            {children}
        </CartContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
    return useContext(CartContext);
  }
