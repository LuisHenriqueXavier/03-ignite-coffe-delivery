import { useCart } from "../../../../contexts/CartContext"; // Usa o hook do contexto
import { Actions, AmountInputContainer, CoffeeCardContainer, CoffeeDetails, CoffeeInfo, CoffeeToBuy } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { Separator } from "@radix-ui/react-separator";

export function CoffeeCard() {
    const { products, updateProductQuantity, removeProductFromCart } = useCart(); // Obtém funções do contexto

    
    const calculateTotalItems = () => {
        const total = products.reduce((total, item) => total + item.price, 0);
        const formattedTotal = total.toFixed(2).replace('.', ',');
        return formattedTotal;
    };
    

    const calculateTotalPrice = () => {
        const total = products.reduce((total, item) => total + item.price * item.quantity, 0);
        return total.toFixed(2).replace('.', ',');
    };
    

    const calculateDelivery = () => {
        const deliveryCost = 3.50;
        return deliveryCost.toFixed(2).replace('.', ',');
    };
    

    // Função para calcular o valor total (preço + entrega)
    const calculateTotal = () => {
        const total = parseFloat(calculateTotalPrice().replace(',', '.')) + parseFloat(calculateDelivery().replace(',', '.'));
        return total.toFixed(2).replace('.', ',');
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

                            <Separator style={{ margin: "2.5rem 0 1.5rem 0", height: "1px", backgroundColor: "#ccc", width: "135%" }} />
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
                        <td>R$ {calculateTotalItems()}</td>
                    </tr>
                    <tr>
                        <td>Entrega</td>
                        <td>R$ {calculateDelivery()}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>R$ {calculateTotal()}</td>
                    </tr>
                    <button type="submit">CONFIRMAR PEDIDO</button>
                </tbody>
            </table>
        </CoffeeCardContainer>
    );
}
