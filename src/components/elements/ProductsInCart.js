import ProductCard from '../elements/ProductCard'
import { useContext } from 'react'
import { Context } from "../../Context"

function ProductsInCart() {

    const {cartItems, records} = useContext(Context)
    const productsInCart = records.length != 0 &&
        Object.entries(cartItems).map(([key, value]) => (
            records.filter(r => r.id === key)[0] &&
            <ProductCard
                categoryName={"all"}
                record={records.filter(r => r.id === key)[0]}
                key={key}
                view={"row"}
            />
        ))


    return (
        <div className={`products-in-cart ${Object.keys(cartItems).length? "" : "hidden"}`}>
            {productsInCart}
        </div>
    );
}

export default ProductsInCart