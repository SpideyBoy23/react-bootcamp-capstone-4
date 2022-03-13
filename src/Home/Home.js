import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Slider } from '../components/FeaturedSlider/FeaturedSlider';
import { Categories } from '../components/CategoriesCarousel/CategoriesCarousel';
import { FeaturedProducts } from '../components/FeaturedProducts/FeaturedProducts';
import { Button } from '../components/Buttons/Button';
import SliderData  from "../mocks/en-us/featured-banners";
import CategoriesData  from "../mocks/en-us/product-categories";
import FeaturedProductsData  from "../mocks/en-us/featured-products";

import './Home.css';

function Home() {

  return (
    <>
      <div className="page-container">
        <Header />
        <div className="content-wrapper">
          <h1>Featured Models</h1>
          <Slider slides={SliderData}/>
          <h2>Categories</h2>
          <Categories categories={CategoriesData}/>
          <h2>Featured Products</h2>
          <FeaturedProducts products={FeaturedProductsData}/>
          <Button type={'primary'} value={'View All Products'}></Button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
