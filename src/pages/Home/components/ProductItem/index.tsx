import { useState } from 'react';
import { Product } from '../../../../@types/product';
import { AddToCart, AmountInput, ProductItemContainer, Tags } from './styles';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';


interface ProductItemProps {
    product: Product
}

export function ProductItem({ product }: ProductItemProps) {
    const [amount, setAmount] = useState(1);

    function HandleIncrease() {
        setAmount((prev) => prev + 1);
    }

    function HandleDecrease() {
        setAmount((prev) => (prev > 1 ? prev - 1 : 1));
    }

    const formattedPrice = product.price.toFixed(2).replace('.', ',');


    return (
        <ProductItemContainer>
            <img src={product.img} alt={`Xícara de café ${product.name}`} />
            <Tags>
                {product.tags.map((tag) => (
                    <span key={tag}>{tag.toUpperCase()}</span>
                ))}
            </Tags>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <AddToCart>
                <span>
                    R$ <strong>{formattedPrice}</strong>
                </span>
                <form>
                    <AmountInput>
                        <button type="button" onClick={HandleDecrease}>
                            <Minus size={14} />
                        </button>
                        <input 
                            type="number"  
                            value={amount}
                        />
                        <button type="button" onClick={HandleIncrease}>
                            <Plus size={14} />
                        </button>
                    </AmountInput>
                    
                    <button type="submit" onClick={(e) => e.preventDefault()}>
                        <ShoppingCart size={22} weight='fill' />
                    </button>
                </form>
            </AddToCart>
        </ProductItemContainer>
    )
}