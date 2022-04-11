import { useContext } from 'react';
import { RiNumber1, RiNumber2 } from 'react-icons/ri'
import { useForm } from 'react-hook-form';
import { ShopContext } from '../../Context/context';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Buttons/Button';
import './Checkout.css'

export const Checkout = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const { cartItems } = useContext(ShopContext);

    const totalPrice = cartItems.reduce((a, c) => a + c.totalPrice, 0);

    if(cartItems.length === 0){
        return (
            <> 
                <section className="empty-section">
                    <h2>Oh... We don't know how you reach here!</h2>
                    <h3>But... How about adding some products 👇</h3>
                    <Link to={'/products'} >
                        <Button type={' primary '} value={' Go To Products '} />
                    </Link>
                </section>
            </>
        )
    }

    return (
        <>
            <h1>One More Step Until Your Next Flip!</h1>
            <div className="checkout-table-row">
                <aside className="col-2 form-col">
                    <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
                        <div className="customer-title">
                            <h2><RiNumber1 /> Customer Info</h2>
                        </div>
                        <label for="first-name">Firts Name: </label>
                        <input id="first-name" type="text" placeholder="Flippy" {...register("firstName", {required: true, maxLength: 80})} />
                        {errors.firstName && <p className="field-error">Please check the First Name</p>}

                        <label for="last Name">Last Name: </label>
                        <input id="last Name" type="text" placeholder="McFlip" {...register("lastName", {required: true, maxLength: 100})} />
                        {errors.lastName && <p className="field-error">Please check the Last Name</p>}

                        <label for="e-mail">E-mail: </label>
                        <input id="e-mail" type="text" placeholder="flipper@flip.com" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                        {errors.email && <p className="field-error">Please check the E-mail</p>}

                        <label for="address">Address: </label>
                        <input id="address" type="text" placeholder="Flipping Av. #23" {...register("address", {required: true})} />
                        {errors.address && <p className="field-error">Please check the Address</p>}

                        <div className="billing-title">
                            <h2><RiNumber2 /> Payment Details</h2>
                        </div>
                        <label for="credit-card">Credit Card: </label>
                        <input id="credit-card" type="tel" placeholder="XXXX - XXXX - XXXX - XXXX" {...register("creditCard", {required: true, minLength: 16, maxLength: 16, pattern: /^(\d{4} ){3}\d{4}$/i })} />
                        {errors.creditCard && <p className="field-error">Please check the Credit Card Number</p>}

                        <label for="security-code">Security Code: </label>
                        <input id="security-code" type="password" placeholder="***" {...register("securityCode", {required: true, maxLength: 3})} />
                        {errors.securityCode && <p className="field-error">Please check the Security Code</p>}

                        <label for="expiration-date">Expiration Date: </label>
                        <input id="expiration-date" type="month" placeholder="Expiration Date" {...register("expiration", {required: true})} />
                        {errors.expiration && <p className="field-error">Please check the Expiration Date</p>}

                        <div className="submit-container">
                            <input type="submit" value="Pay"/>
                        </div>
                    </form>
                </aside>
                <aside className="col-1 summary-table-col">
                    <h2>Your Products Summary: </h2>
                    <div className="summary-items-container">
                        {   
                            cartItems.map((item) => {
                                const { quantity, totalPrice, data: {name, price} } = item

                                return (
                                    <div key={item.id} className="summary-table-row products-container">
                                        <div className="col-2">
                                            {name}
                                        </div>
                                        <div className="col-2">
                                            {quantity} x ${price} = ${totalPrice}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="total-price-info">
                            <h3>Total Price:</h3>
                            <h2>${totalPrice}</h2>
                        </div>
                        <Link to='/cart'>
                            <Button type={' primary '} value={' Back To Cart '} />
                        </Link>
                    </div>
                </aside>
            </div>
        </>
    )
}