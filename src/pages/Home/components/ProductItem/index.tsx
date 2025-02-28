import { Product } from '../../../../@types/product';
import { AddToCart, AmountInput, ProductItemContainer, Tags } from './styles';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';


interface ProductItemProps {
    product: Product
}

export function ProductItem({ product }: ProductItemProps) {


    const formattedPrice = product.price.toFixed(2).replace('.', ',')

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
                        <button type="button"><Minus size={14} /></button>
                        <input type="number" defaultValue={1} />
                        <button type="button"><Plus size={14} /></button>
                    </AmountInput>
                    
                    <button type="submit">
                        <ShoppingCart size={22} weight='fill' />
                    </button>
                </form>
            </AddToCart>
        </ProductItemContainer>
    )
}