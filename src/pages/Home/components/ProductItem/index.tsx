import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { Product } from "../../../../@types/product";
import { AddToCart, AmountInput, ProductItemContainer, Tags } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

const addToCartFormSchema = z.object({
    amount: z.number().min(1, "O mínimo é 1").max(99, "O máximo é 99"),
});

type AddToCartFormData = z.infer<typeof addToCartFormSchema>;

interface ProductItemProps {
    product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
    const { addProductToCart } = useContext(CartContext);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<AddToCartFormData>({
        resolver: zodResolver(addToCartFormSchema),
        defaultValues: { amount: 1 },
    });

    const amount = watch("amount");

    const handleIncrease = () => setValue("amount", amount + 1);
    const handleDecrease = () => setValue("amount", amount > 1 ? amount - 1 : 1);

    const onSubmit = (data: AddToCartFormData) => {
        addProductToCart(product, data.amount);
        alert(`${data.amount} x ${product.name} adicionado ao carrinho!`);
    };

    const formattedPrice: string = product.price.toFixed(2).replace(".", ",");

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

                <form onSubmit={handleSubmit(onSubmit)}>
                    <AmountInput>
                        <button type="button" onClick={handleDecrease}>
                            <Minus size={14} />
                        </button>
                        <input
                            type="number"
                            {...register("amount", { valueAsNumber: true })}
                            value={amount}
                            readOnly
                        />
                        <button type="button" onClick={handleIncrease}>
                            <Plus size={14} />
                        </button>
                    </AmountInput>

                    {errors.amount && <p style={{ color: "red" }}>{errors.amount.message}</p>}

                    <button type="submit">
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </form>
            </AddToCart>
        </ProductItemContainer>
    );
}
