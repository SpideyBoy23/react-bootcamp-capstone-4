import { Slider } from '../components/FeaturedSlider/FeaturedSlider';
import { Categories } from '../components/CategoriesCarousel/CategoriesCarousel';
import { ProductsGrid } from '../components/ProductsGrid/ProductsGrid';
import { Button } from '../components/Buttons/Button';
import SliderData  from "../mocks/en-us/featured-banners";
import CategoriesData  from "../mocks/en-us/product-categories";
import FeaturedProductsData  from "../mocks/en-us/featured-products";

import './Home.css';

function Home({action}) {

  return (
    <>
        <h1>Featured Models</h1>
        <Slider slides={SliderData}/>
        <h2>Categories</h2>
        <Categories categories={CategoriesData}/>
        <h2>Featured Products</h2>
        <ProductsGrid products={FeaturedProductsData}/>
        <Button type={'primary'} value={'View All Products'} action={action} ></Button>
    </>
  );
}

export { Home };
