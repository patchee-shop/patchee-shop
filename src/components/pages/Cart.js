import { useState, useContext } from "react"
import { Context } from "../../Context"
import ProductsInCart from "../elements/ProductsInCart";
import ContactsWindow from "../elements/ContactsWindow";

export default function Cart() {

    const {
        records,
        userPhone,
        userName,
        cartItems,
        setCartItems,
        setIsContactsWindowShown,
        setLeftEmptyPhone,
        insertNewOrder
    } = useContext(Context)

    const [cartStatus, setCartStatus] = useState("Пока что в корзине пусто!")
    
    const sum = records.length != 0? (Object.keys(cartItems).length?
        Object.entries(cartItems).map(([key, value]) => (
            Object.keys(records.filter(r => r.id === key)[0].fields).length?
                (
                    value >= records.filter(r => r.id === key)[0].fields.ТриггерКоличество?
                    records.filter(r => r.id === key)[0].fields.ТриггерЦена :
                    records.filter(r => r.id === key)[0].fields.Цена
                ) * value : 0
        )).reduce((a, b) => a + b) : 0) : 0

    const conveyAllCartItems = (cartItems, orderId, userPhone, userName) => {
        Object.entries(cartItems).map(([key, value]) => (
            insertNewOrder(key, value, orderId, userPhone, userName, (
                Math.floor((1 - ((
                value >= records.filter(r => r.id === key)[0].fields.ТриггерКоличество?
                records.filter(r => r.id === key)[0].fields.ТриггерЦена :
                records.filter(r => r.id === key)[0].fields.Цена
                )/records.filter(r => r.id === key)[0].fields.Цена))*100)/100
            ))
        ))
    }

    const requestOrder = () => {
        conveyAllCartItems(cartItems, Date.now(), userPhone, userName)
        setCartItems({})
        setIsContactsWindowShown("hidden")
        setLeftEmptyPhone("")
        setCartStatus(
            <>
                <p className="waiting-for-checking">
                    Ваш заказ обрабатывается 💕
                </p>
                <p className="will-contact-soon">
                    Скоро с Вами свяжемся!
                </p>
                <a
                    className="patchee-shop-phone"
                    href="tel:+79118212238"
                >
                    +7(911)-821-22-38
                </a>
            </>
        )
    }

    return (
        <div className="section-view cart">
            <ContactsWindow requestOrder={requestOrder}/>
            <div className="fix-wrapper">
                <h1 className='section-title'>Корзина</h1>
            </div>
            <div className="wrapper cart-wrapper">
                <ProductsInCart />
                <div className="cart--summary">
                    { Object.keys(cartItems).length?
                    <>
                        <p className="cart--summary__info">
                            Сумма:
                            <span className="sum"> {sum} ₽</span>
                        </p>
                        <button
                            className="cart--summary__order"
                            onClick={() => setIsContactsWindowShown("")}
                        >
                            Сделать закaз
                        </button>
                    </> :
                        <div className="cart--summary__empty">
                            {cartStatus}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}