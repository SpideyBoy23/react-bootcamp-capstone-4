import './FeaturedProducts.css';


export const FeaturedProducts = ({ products }) => {



    return (
        <>
            <section className="FeaturedProducts">
                <div className="cards-container">
                    {products.results.map((product, index) => {
                        const { data: {name, sku, category: { slug }, mainimage: { alt, url }} } = product
                        return (
                            <div className="product-card" key={index}>
                                <img src={url} alt={alt} className="product-img" />
                                <div className="product-info">
                                    <div>
                                        <p>{name}</p>
                                        <p>{slug}</p>
                                        <p>SKU: {sku}</p>
                                    </div>
                                </div>
                            </div>
                            
                        )
                    })}
                </div>
            </section>
        </>
    );
}