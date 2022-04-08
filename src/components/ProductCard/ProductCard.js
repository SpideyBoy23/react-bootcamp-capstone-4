import { Loader } from '../Loader/Loader'
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import './ProductCard.css'
import { Link } from 'react-router-dom';


export const ProductCard = ({ products, isLoading, idCategoy }) => {

    if(idCategoy === '' || typeof(idCategoy) === 'undefined'){
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
                                    <figure>
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
                {isLoading ? <Loader /> : products.results.filter(category => category.data.category.id === idCategoy).map((product, index) => {
                        const { data: {name, sku, category: { slug }, mainimage: { alt, url }, price} } = product
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
                                    <figure>
                                        <MdOutlineAddShoppingCart />
                                    </figure>
                                </div>
                            </div>
                            
                        )
                    })}
            </>
        )
    }
}