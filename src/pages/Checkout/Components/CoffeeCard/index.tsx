import { useCart } from "../../../../contexts/CartContext";
import { CoffeeCardContainer } from "./styles";


export function CoffeeCard() {
    const { products } = useCart(); // Obtém os produtos do carrinho

    return (
        <CoffeeCardContainer>
            {products.length > 0 ? (
                <div>
                    {products.map((item) => (
                        <div key={item.id}>
                            <img src={item.img} alt="Xícara de café" />
                            <span>{item.name}</span> - {item.quantity}x R$ {item.price.toFixed(2)}
                        </div>
                    ))}
                </div>
            ) : (
                <p>O carrinho está vazio.</p>
            )}
        </CoffeeCardContainer>
    );
}