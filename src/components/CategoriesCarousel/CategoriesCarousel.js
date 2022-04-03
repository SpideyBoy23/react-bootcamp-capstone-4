import Slider from "react-slick";
import { useProductsCategories } from '../../utils/hooks/useProductCategories';
import { Loader } from '../Loader/Loader';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CategoriesCarousel.css';


export const Categories = ({}) => {
    
    const categorias = useProductsCategories();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };

    return(
        <>
            <section className="categories-carousel">
                <div className="categories-cards">
                        {categorias.isLoading 
                        ? <Loader /> 
                        : 
                        <Slider {...settings}>
                            {
                            categorias.data.results.map((category, index) => {
                                const { data: {name, main_image: { alt, url }} } = category
                                return (
                                    <div className="product-card" key={index}>
                                        <img src={url} alt={alt} className="product-img" />
                                        <div className="product-info">
                                            <div>
                                                <p>{name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                            </Slider>
                        }           
                </div>
            </section>
        </>
    );
}