import { useContext } from 'react';
import { ShopContext } from '../../Context/context';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';


import './ShoppingCart.css'

export const ShoppingCart = () => {

    const { cartItems } = useContext(ShopContext);

    return (
        <>
            <span className="icon shopping-cart">
                <Link to={'/cart'} >
                    <AiOutlineShoppingCart />
                    <div>{cartItems.length}</div>
                </Link>
            </span>
        </>
    )
}