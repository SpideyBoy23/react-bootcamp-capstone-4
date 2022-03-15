import { ProductCard } from '../ProductCard/ProductCard';
import './ProductsGrid.css';


export const ProductsGrid = ({ products, idCategoy }) => {

    return (
        <>
            <section className="FeaturedProducts">
                <div className="cards-container">
                    <ProductCard products={products} idCategoy={idCategoy} />
                </div>
            </section>
        </>
    );
}