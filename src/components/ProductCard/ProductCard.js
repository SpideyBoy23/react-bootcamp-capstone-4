import './ProductCard.css'


export const ProductCard = ({ products, idCategoy }) => {

    if(idCategoy === '' || typeof(idCategoy) === 'undefined'){
        return (
            <>
                {products.results.map((product, index) => {
                        const { data: {name, sku, category: { slug }, mainimage: { alt, url }, price} } = product
                        return (
                            <div className="product-card" key={index}>
                                <img src={url} alt={alt} className="product-img" />
                                <div className="product-info">
                                    <div>
                                        <p>{name}</p>
                                        <p>{slug}</p>
                                        <p>SKU: {sku}</p>
                                        <p>$ {price}</p>
                                    </div>
                                </div>
                            </div>
                            
                        )
                    })}
            </>
        )

    } else {
        return (
            <>
                {products.results.filter(category => category.data.category.id === idCategoy).map((product, index) => {
                        const { data: {name, sku, category: { slug }, mainimage: { alt, url }, price} } = product
                        return (
                            <div className="product-card" key={index}>
                                <img src={url} alt={alt} className="product-img" />
                                <div className="product-info">
                                    <div>
                                        <p>{name}</p>
                                        <p>{slug}</p>
                                        <p>SKU: {sku}</p>
                                        <p>$ {price}</p>
                                    </div>
                                </div>
                            </div>
                            
                        )
                    })}
            </>
        )
    }
}