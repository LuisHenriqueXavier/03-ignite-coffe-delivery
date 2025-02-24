import { Aside, HeaderContainer } from "./styles";

import logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/" >
                <img src={logo} alt="Coffee Delivery" />
            </NavLink>

            <Aside>
                <div>
                    <MapPin size={22} weight="fill" alt="Localização"/>
                    <span>Porto Alegre, RS</span>
                </div>

                <NavLink to="/checkout" alt="Carrinho de compras">
                    <ShoppingCart size={22} weight="fill" />
                </NavLink>
            </Aside>
        </HeaderContainer>
    );
}