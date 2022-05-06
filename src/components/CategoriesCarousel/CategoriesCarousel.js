import Slider from "react-slick";
import { Loader } from '../Loader/Loader';
import { useContext }  from 'react';
import { ShopContext } from '../../Context/context';
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CategoriesCarousel.css';


export const Categories = ({categories}) => {

    const { setFilters } = useContext(ShopContext)

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
                        {categories.isLoading 
                            ? <Loader /> 
                            : 
                            <Slider {...settings}>
                                {
                                categories.data.results.map((category, index) => {
                                    const { id, data: {name, main_image: { alt, url }} } = category
                                    return (
                                        <Link to={'/products'} onClick={() => setFilters(id)}>
                                            <div className="product-card" key={index} >
                                                <img src={url} alt={alt} className="product-img" />
                                                <div className="product-info">
                                                    <div>
                                                        <p>{name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </Slider>
                        }           
                </div>
            </section>
        </>
    );
}