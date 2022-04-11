import { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../../Context/context';
import { useParams } from 'react-router-dom';
import { useProductDetail } from '../../utils/hooks/useProductDetail';
import { Loader } from '../../components/Loader/Loader';
import { Button } from '../../components/Buttons/Button';
import { Table } from '../../components/Table/Table';

import {AiOutlineMinusSquare, AiOutlinePlusSquare} from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProductDetail.css";

import { EffectFlip, Pagination, Navigation } from "swiper";


export const ProductDetail = () => {

    const { productId } = useParams();
    const { data: ProductDetailData, isLoading } = useProductDetail( productId );

    const [items, setItems] = useState(0);
    const [existence, setExistence] = useState(true);

    const { addCartItem } = useContext(ShopContext);

    function addItem () {
        setItems(parseInt(items) + 1);
    }

    function removeItem () {
        if (items > 0) setItems(items - 1);
    }

    const updateItems = (event) => {
        const numberOfProducts = event.target.value;
        console.log(numberOfProducts);
        setItems(numberOfProducts);
        
    }

    useEffect(() => {

        ProductDetailData.results?.[0].data.stock  < items ? 
        setExistence(false) : setExistence(true);

    }, [items])

    return(
        <> 
            {isLoading ? 
                <Loader /> :
                <> 
                    <section className="product-info-wrapper">
                        <div className="swiper-container">
                            <Swiper
                                effect={"flip"}
                                grabCursor={true}
                                pagination={true}
                                navigation={true}
                                modules={[EffectFlip, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {ProductDetailData.results.map((slide, index) => {
                                    return (
                                    slide.data.images.map((imagen, i) =>{
                                        const { image: {alt, url} } = imagen
                                        return (
                                            <SwiperSlide>
                                                <img src={url} alt={alt} />
                                            </SwiperSlide>
                                        )
                                    })
                                    )                  
                                })}
                            </Swiper>
                        </div>
                        <div className="info-container">
                                <h2>{ProductDetailData.results[0].data.name}</h2>
                                <div className="main-info-container">
                                    <div className="tags-container">
                                        <ul>
                                            {ProductDetailData.results[0].tags.map((tag) => {
                                                return (
                                                        <label key={tag}>
                                                            {tag}
                                                        </label>
                                                    
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="price-label">
                                        <label>${ProductDetailData.results[0].data.price}</label>
                                    </div>
                                    <div className="category-label">
                                        <label>{ProductDetailData.results[0].data.category.slug}</label>
                                    </div>
                                    <div className="sku-label">
                                        <label>Sku: {ProductDetailData.results[0].data.sku}</label>
                                    </div>
                                    <p className="product-description">{ProductDetailData.results[0].data.description[0].text}</p>
                                </div>
                                <section className="shopping-container">
                                    <div className="shopping-quantity">
                                        <div className="quantity-label">
                                            <span>Quantity:</span>
                                        </div>
                                        <div className="quantity-select">
                                            <button className="remove-btn" onClick={() => removeItem()}><AiOutlineMinusSquare className="quantity-btns"/></button>
                                                <input className="quantity-input" type="number" value={items} onChange={updateItems} />
                                            <button disabled={!existence} className={ `${existence ? '' : 'disabled-btn' } add-btn` } onClick={() => addItem()}><AiOutlinePlusSquare className=" quantity-btns"/></button>
                                        </div>
                                        <span className={ existence ? 'with-stock' : 'no-stock'  }>There's no more stock available. Please select less products</span>
                                    </div>
                                    <div className="shopping-button">
                                        {existence ? 
                                            <Button type={ `primary add-cart-btn` } value={ 'Add to cart' } action={() => addCartItem(ProductDetailData.results[0], items)}/>
                                            :
                                            ''
                                        }
                                    </div>
                                </section>
                        </div>
                    </section>
                    <section className="table-section">
                        <h2>Specs</h2>
                        <Table tBodyData={ProductDetailData.results?.[0].data.specs} tHeadData={['Name', 'Description']}/>
                    </section>
                </>
            }
        </>
    )

}