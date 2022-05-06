import { useContext } from 'react';
import { ShopContext } from '../../Context/context';
import { Loader } from '../Loader/Loader'
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import './ProductCard.css'
import { Link } from 'react-router-dom';


export const ProductCard = ({ products, isLoading }) => {

    const { activeFilters: idCategoy, addCartItem } = useContext(ShopContext);

    if(idCategoy.length === 0){
        return (
            <>
                {isLoading ? <Loader /> : products.results.map((product, index) => {
                        const { id, data: {name, sku, category: { slug }, mainimage: { alt, url }, price} } = product
                        return (
                            <div className="product-card" key={index}>
                                <Link to={`/product/${id}`}>
                                    <img src={url} alt={alt} className="product-img" />
                                </Link>
                                <div className="product-info">
                                    <div>
                                        <p>{name}</p>
                                        <p>{slug}</p>
                                        <p>SKU: {sku}</p>
                                        <p>$ {price}</p>
                                    </div>
                                    <figure onClick={() => addCartItem(product)}>
                                        <MdOutlineAddShoppingCart />
                                    </figure>
                                </div>
                            </div>
                            
                        )
                    })}
            </>
        )

    } else {
        return (
            <>
                {isLoading ? <Loader /> : 
                products.results.
                    filter(category => category.data.category.id === idCategoy.find(element => element === category.data.category.id)).
                        map((product, index) => {
                            const { id, data: {name, sku, category: { slug }, mainimage: { alt, url }, price} } = product
                            return (
                                <div className="product-card" key={index}>
                                    <Link to={`/product/${id}`}>
                                        <img src={url} alt={alt} className="product-img" />
                                    </Link>
                                    <div className="product-info">
                                        <div>
                                            <p>{name}</p>
                                            <p>{slug}</p>
                                            <p>SKU: {sku}</p>
                                            <p>$ {price}</p>
                                        </div>
                                        <figure onClick={() => addCartItem(id, 1)}>
                                            <MdOutlineAddShoppingCart />
                                        </figure>
                                    </div>
                                </div>                            
                            )
                        })
                }
            </>
        )
    }
}