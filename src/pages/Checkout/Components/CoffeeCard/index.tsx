import { useCart } from "../../../../contexts/CartContext"; // Usa o hook do contexto
import { Actions, AmountInputContainer, CoffeeCardContainer, CoffeeDetails, CoffeeInfo, CoffeeToBuy } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { Separator } from "@radix-ui/react-separator";

export function CoffeeCard() {
    const { products, updateProductQuantity, removeProductFromCart } = useCart(); // Obtém funções do contexto

    // Função para calcular o total de itens
    const calculateTotalItems = () => {
        return products.reduce((total, item) => total + item.price, 0);
    };

    // Função para calcular o valor total dos itens no carrinho
    const calculateTotalPrice = () => {
        return products.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Função para calcular o custo de entrega (por exemplo, valor fixo ou variável)
    const calculateDelivery = () => {
        // Suponhamos que a entrega seja um valor fixo de R$ 10,00
        return 3.50;
    };

    // Função para calcular o valor total (preço + entrega)
    const calculateTotal = () => {
        return calculateTotalPrice() + calculateDelivery();
    };

    function handleIncrease(id: string, quantity: number) {
        updateProductQuantity(id, quantity + 1);
    }

    function handleDecrease(id: string, quantity: number) {
        if (quantity > 1) {
            updateProductQuantity(id, quantity - 1);
        }
    }

    function handleRemove(id: string) {
        removeProductFromCart(id);
    }

    return (
        <CoffeeCardContainer>
            {products.length > 0 ? (
                products.map((item) => (
                    <CoffeeToBuy key={item.id}>
                        <div>
                            <CoffeeInfo>
                                <img src={item.img} alt={item.name} />
                                <CoffeeDetails>
                                    <span>{item.name}</span>
                                    <Actions>
                                        <AmountInputContainer>
                                            <button type="button" onClick={() => handleDecrease(item.id, item.quantity)}>
                                                <Minus size={14} />
                                            </button>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                readOnly
                                            />
                                            <button type="button" onClick={() => handleIncrease(item.id, item.quantity)}>
                                                <Plus size={14} />
                                            </button>
                                        </AmountInputContainer>
                                        <button type="button" onClick={() => handleRemove(item.id)}>
                                            <Trash size={18} /> Remover
                                        </button>
                                    </Actions>
                                </CoffeeDetails>
                            </CoffeeInfo>

                            <Separator style={{ margin: "2.5rem 0 1.5rem 0", height: "1px", backgroundColor: "#ccc", width: "140%" }} />
                        </div>
                        <label>R$ {item.price.toFixed(2)}</label>
                    </CoffeeToBuy>
                ))
            ) : (
                <p>O carrinho está vazio.</p>
            )}

            {/* Tabela com os totais */}
            <table>
                <tbody>
                    <tr>
                        <td>Total de itens</td>
                        <td>R$ {calculateTotalItems().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Entrega</td>
                        <td>R$ {calculateDelivery().toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>R$ {calculateTotal().toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </CoffeeCardContainer>
    );
}
