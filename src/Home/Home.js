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
        <Slider slides={SliderData}/>
        <Categories categories={CategoriesData}/>
        <ProductsGrid products={FeaturedProductsData} title={"Featured Products"}/>
        <Button type={'primary'} value={'View All Products'} action={action} ></Button>
    </>
  );
}

export { Home };
