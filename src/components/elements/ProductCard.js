import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Context'
import { Link } from 'react-router-dom'
import Counter from './Counter'

export default function ProductCard({categoryName, view, ...props}) {

    const {setCurrentCategory, cartItems, setCartItems} = useContext(Context)
    const [productCardParams, setProductCardParams] = useState({
        picture: props.record.fields.Фото[0].url,
        name: props.record.fields.Название,
        addition: props.record.fields.Дополнение,
        price: props.record.fields.Цена,
        id: props.record.id,
        triggerPrice: props.record.fields.ТриггерЦена,
        triggerQuantity: props.record.fields.ТриггерКоличество,
        remains: props.record.fields.Осталось
    })
    const addFirstItem = () => {
        setCartItems(prev => (
            {
                ...prev,
                [productCardParams.id]: 1
            }
        ))
    }
    const [isInCart, setIsInCart] = useState("")

    useEffect(() => {
        setCurrentCategory (
            prev => prev === ""? "all" :
            categoryName === undefined? prev :
            categoryName
        )
    }, [])
    useEffect(() => {
        setIsInCart(productCardParams.id in cartItems? "" : "not-in-cart")
    }, [cartItems])

    return (
        <div className={`${view} ${isInCart} product-card`}>
            <div className='wrapper info-wrapper'>
                <Link to={process.env.PUBLIC_URL + `/product_info/${props.record.id}`}>
                    <img src={productCardParams.picture}/>
                </Link>
                <div className='product-card--info wrapper'>
                    <h2 className='info--name'>{productCardParams.name}</h2>
                    <h3 className='info--addition'>{productCardParams.addition}</h3>
                </div>
            </div>
            <div className={`product-card--info wrapper counter-wrapper ${view}`}>
                <div className='product-card--buttons'>
                    {view == "small"?
                        !cartItems[productCardParams.id]?
                            <button onClick={addFirstItem} disabled={cartItems[productCardParams.id]} className='add-to-card'>
                                <svg width="16" height="16" viewBox="0 0 16 16">
                                    <g>
                                        <g>
                                            <g>
                                                <rect width="16" height="16" fill="rgba(255,255,255,0)"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g transform="translate(2 -0.25)">
                                        <path d="M15.5,11.25a.4.4,0,0,1,.4.4v1.6a.4.4,0,0,1-.4.4H13.9a.4.4,0,0,1,0-.8h1.2v-1.2A.4.4,0,0,1,15.5,11.25Z" transform="translate(-8.7 -5.8)" fill="#fff" fillRule="evenodd"/>
                                        <path d="M18,16.15a.4.4,0,0,1,.4-.4H20a.4.4,0,1,1,0,.8H18.8v1.2a.4.4,0,0,1-.8,0Z" transform="translate(-11.6 -8.7)" fill="#fff" fillRule="evenodd"/>
                                        <path d="M0,2.65a.4.4,0,0,1,.4-.4H1.6a.4.4,0,0,1,.388.3l.324,1.3H11.6a.4.4,0,0,1,.393.474l-1.2,6.4a.4.4,0,0,1-.393.326H3.2a.4.4,0,0,1-.393-.326l-1.2-6.388L1.288,3.05H.4A.4.4,0,0,1,0,2.65Zm2.481,2,1.05,5.6h6.536l1.05-5.6ZM4,11.05a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,4,11.05Zm5.6,0a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,9.6,11.05Zm-5.6.8a.8.8,0,1,0,.8.8A.8.8,0,0,0,4,11.85Zm5.6,0a.8.8,0,1,0,.8.8A.8.8,0,0,0,9.6,11.85Z" fill="#fff" fillRule="evenodd"/>
                                    </g>
                                </svg>
                            </button>
                        :
                            <Counter
                                recordId={productCardParams.id}
                                remains={productCardParams.remains}
                            />
                    :
                        !cartItems[productCardParams.id]?
                            <button onClick={addFirstItem} disabled={cartItems[productCardParams.id]} className='add-to-card'>Добавить в корзину</button>
                        :
                            <>
                            <button onClick={addFirstItem} disabled={cartItems[productCardParams.id]} className='add-to-card'>В корзине</button>
                            <Counter
                                recordId={productCardParams.id}
                                remains={productCardParams.remains}
                            />
                            </>
                    }
                </div>
                <div className='prices-wrapper'>
                    <p className='product-card--price'>
                        { cartItems[productCardParams.id]?
                            (!cartItems[productCardParams.id]? 1 : cartItems[productCardParams.id]) >= productCardParams.triggerQuantity?
                                productCardParams.triggerPrice * cartItems[productCardParams.id] :
                                productCardParams.price * cartItems[productCardParams.id] :
                                (!cartItems[productCardParams.id]? 1 : cartItems[productCardParams.id]) >= productCardParams.triggerQuantity?
                                productCardParams.triggerPrice :
                                productCardParams.price
                        } ₽
                    </p>
                    {
                        (!cartItems[productCardParams.id]? 1 : cartItems[productCardParams.id]) >= productCardParams.triggerQuantity
                        &&
                        <p className='product-card--old-price'>
                            {productCardParams.price * (!cartItems[productCardParams.id]? 1 : cartItems[productCardParams.id])} ₽
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}