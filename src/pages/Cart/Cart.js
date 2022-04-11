import { useContext } from 'react';
import { Button } from '../../components/Buttons/Button';
import { ShopContext } from '../../Context/context';
import { Link } from 'react-router-dom';
import './Cart.css'


export const Cart = () => {

    const { cartItems, removeCartItem, addCartItem } = useContext(ShopContext);
    console.log(cartItems);

    const totalPrice = cartItems.reduce((a, c) => a + c.totalPrice, 0);
    // const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    console.log(totalPrice);

    if(cartItems.length === 0){
        return (
            <> 
                <section className="empty-section">
                    <h2>Oh... Your Cart is empty!</h2>
                    <h3>Lets Add Some Products 👇</h3>
                    <Link to={'/products'} >
                        <Button type={' primary '} value={' Go To Products'} />
                    </Link>
                </section>
            </>
        )
    }

    return (
        <>
            <h1>We hope you found everthing for your flip!</h1>
            <div className="summary-title">
                <span>Products Summary: </span>
            </div>
            <div className="summary-table-row">
                <aside className="col-2 summary-table-col">
                    <div>
                        {   
                            cartItems.map((item) => {
                                const { quantity, totalPrice, data: {name, price, mainimage: {alt, url}} } = item

                                return (
                                    <div key={item.id} className="summary-table-row products-container">
                                        <div className="col-2 product-image-container">
                                            <img src={url} alt={alt} />
                                        </div>
                                        <div className="col-2">
                                            {name}
                                        </div>
                                        <div className="col-2 control-buttons-container">
                                            <button onClick={() => removeCartItem(item.id)}>-</button> 
                                            <button onClick={() => addCartItem(item)}>+</button> 
                                        </div>
                                        <div className="col-2">
                                            {quantity} x ${price} = ${totalPrice}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </aside>
                <aside className="col-1 summary-table-col">
                    <div className='total-price-container'>
                        <div className="total-price-info">
                            <h3>Total Price:</h3>
                            <h2>${totalPrice}</h2>
                        </div>
                        <Link to='/checkout'>
                            <Button type={' primary '} value={' Go To Checkout'} />
                        </Link>
                    </div>
                </aside>
            </div>
            


        </>
    )
}