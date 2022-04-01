import { Slider } from '../components/FeaturedSlider/FeaturedSlider';
import { Categories } from '../components/CategoriesCarousel/CategoriesCarousel';
import { ProductsGrid } from '../components/ProductsGrid/ProductsGrid';
import { Button } from '../components/Buttons/Button';
import SliderData  from "../mocks/en-us/featured-banners";
import CategoriesData  from "../mocks/en-us/product-categories";
import FeaturedProductsData  from "../mocks/en-us/featured-products";

import {useHistory} from 'react-router-dom';

import './Home.css';

function Home() {

  const history = useHistory();
  const changeProductsPage = () => {
    history.push("/products");
  }

  return (
    <>
        <Slider slides={SliderData}/>
        <Categories categories={CategoriesData}/>
        <ProductsGrid products={FeaturedProductsData} title={"Featured Products"}/>
        <Button type={'primary'} value={'View All Products'} action={changeProductsPage} ></Button>
    </>
  );
}

export { Home };
