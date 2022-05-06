import { useState } from 'react';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import { Loader } from '../Loader/Loader';

import './FeaturedSlider.css';


export const Slider = ({ slidesData }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const length = slidesData.isLoading ? currentSlide : slidesData.data.results.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    }

    const previousSlide = () => {
        console.log(length);
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    }

    return(
        <>
            <h1>Featured Models</h1>
            <section className="slider">
                <MdKeyboardArrowLeft className="Left-arrow"  onClick={previousSlide}/>
                <MdKeyboardArrowRight className="Right-arrow" onClick={nextSlide}/>
                {slidesData.isLoading ? <Loader /> :  slidesData.data.results.map((slide, index) => {
                    const { data: { main_image: {alt, url} } } = slide
                    return (
                        <div className={index == currentSlide ? 'slide active' : 'slide'} key={index}>
                            {index === currentSlide && (
                                <img src={url} alt={alt} className="slider-image"/>
                            )}
                        </div>
                        
                    )
                })}
            </section>
        </>
    );

}