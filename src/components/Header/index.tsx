import { Aside, HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
    const { products } = useContext(CartContext);

    const numberOfProducts = products.reduce((acc, product) => acc + product.quantity, 0);
    const isCartEmpty = numberOfProducts === 0;

    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="Coffee Delivery" />
            </NavLink>

            <Aside>
                <div>
                    <MapPin size={22} weight="fill" alt="Localização" />
                    <span>Porto Alegre, RS</span>
                </div>

                <NavLink to={!isCartEmpty ? "/checkout" : "/"}>
                    {!isCartEmpty && <span>{numberOfProducts}</span>}
                    <ShoppingCart size={22} weight="fill" alt="Carrinho de compras" />
                </NavLink>
            </Aside>
        </HeaderContainer>
    );
}
