import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Article, CoffeeList, Heading, HeadingContainer, HeadingContent, Info, CoffeeContainer } from "./styles";
import hero from "../../assets/hero.svg";
import { useTheme } from "styled-components";
import { ProductItem } from "./components/ProductItem";
import { products } from "./components/ProductItem/Products.data";

export function Home() {
    const theme = useTheme();
    return (
        <div>
            <HeadingContainer>
                <Heading>
                    <HeadingContent>
                        <Article>
                            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

                            <span>
                                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                            </span>
                        </Article>
                        <Info>
                            <div>
                                <ShoppingCart
                                    size={32}
                                    weight="fill"
                                    color={theme.background}
                                    style={{ backgroundColor: theme['yellow-dark'] }}
                                />
                                <span>Compra simples e segura</span>
                            </div>

                            <div>
                                <Package
                                    size={32}
                                    weight="fill"
                                    color={theme.background}
                                    style={{ backgroundColor: theme['base-text'] }}
                                />
                                <span>Embalagem mantém o café intacto</span>
                            </div>

                            <div>
                                <Timer
                                    size={32}
                                    weight="fill"
                                    color={theme.background}
                                    style={{ backgroundColor: theme.yellow }}
                                />
                                <span>Entrega rápida e rastreada</span>
                            </div>

                            <div>
                                <Coffee
                                    size={32}
                                    weight="fill"
                                    color={theme.background}
                                    style={{ backgroundColor: theme.purple }}
                                />
                                <span>O café chega fresquinho até você</span>
                            </div>
                        </Info>

                    </HeadingContent>


                    <img src={hero} alt="Café do Coffee Delivery" />
                </Heading>
            </HeadingContainer>

            <CoffeeContainer>
                <h2>Nossos cafés</h2>
                <CoffeeList>
                    {products.map((product) => {
                        return (
                                <ProductItem product={product} />
                        )
                    })}
                </CoffeeList>
            </CoffeeContainer>
        </div>
    );
}