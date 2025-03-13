import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, } from "phosphor-react";
import { AddressContent, AddressForm, CheckoutContainer, PaymentContent, PaymentMethod } from "./styles";
import { CoffeeCard } from "./Components/CoffeeCard";



export function Checkout() {
    return (
        <CheckoutContainer>
            <section>
                <h1>Complete seu pedido</h1>
                <AddressContent>
                    <div>
                        <MapPinLine size={22} />
                        <div>
                            <h2>Endereço de entrega</h2>
                            <span>informe o endereço que deseja receber o seu pedido</span>
                        </div>
                    </div>
                    <AddressForm>
                        <input type="text" placeholder="CEP" />
                        <input type="text" placeholder="Rua" />
                        <input type="text" placeholder="Número" />
                        <input type="text" placeholder="Complemento" />
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" />
                    </AddressForm>
                </AddressContent>
                <PaymentMethod>
                    <header>
                        <CurrencyDollar size={22} />
                        <div>
                            <h2>Pagamento</h2>
                            <span>
                                O pagamento é feito na entrega. Escolha a forma que deseja pagar
                            </span>
                        </div>
                    </header>
                    <footer>
                        <button><CreditCard size={16} />CARTÃO DE CRÉDITO</button>   
                        <button><Bank size={16} />CARTÃO DE DÉBITO</button>   
                        <button><Money size={16} />DINHEIRO</button>   
                    </footer>
                </PaymentMethod>
            </section>
            <section>
                <h1>Cafés selecionados</h1>
                <PaymentContent>
                    <CoffeeCard />
                    
                </PaymentContent>
            </section>
        </CheckoutContainer>
    )
}