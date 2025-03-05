import { MapPinLine } from "phosphor-react";
import { AddressContent, CheckoutContainer, PaymentContent } from "./styles";

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
                    <form>
                        <input placeholder="CEP" />
                        <input placeholder="Rua" />
                        <input placeholder="Número" />
                        <input placeholder="Complemento" />
                        <input placeholder="Bairro" />
                        <input placeholder="Cidade" />
                        <input placeholder="UF" />
                    </form>
                </AddressContent>
            </section>
            <section>
                <h1>Cafés selecionados</h1>
                <PaymentContent>

                </PaymentContent>
            </section>
        </CheckoutContainer>
    )
}