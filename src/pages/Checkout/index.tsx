import { MapPinLine } from "phosphor-react";
import { AddressContent, AddressForm, CheckoutContainer, PaymentContent } from "./styles";
import InputMask from "react-input-mask";



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
                        <InputMask  placeholder="CEP" mask="9999-999" />
                        <input type="text" placeholder="Rua" />
                        <input type="text" placeholder="Número" />
                        <input type="text" placeholder="Complemento" />
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" />
                    </AddressForm>
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