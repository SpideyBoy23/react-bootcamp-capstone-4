import { Slider } from '../../components/FeaturedSlider/FeaturedSlider';
import { Categories } from '../../components/CategoriesCarousel/CategoriesCarousel';
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid';
import { Button } from '../../components/Buttons/Button';
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners'
import { useProductsCategories } from '../../utils/hooks/useProductCategories';
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';

import {useHistory } from 'react-router-dom';

import './Home.css';

function Home() {
  
  const SliderData = useFeaturedBanners();    
  const CategoriesData = useProductsCategories();
  const { data: FeaturedProductsData, isLoading} = useFeaturedProducts({ pageSize: 16});
  const history = useHistory();
  const changeProductsPage = () => {
    history.push("/products");
  }

  return (
    <>
        <Slider slidesData={SliderData}/>
        <Categories categories={CategoriesData}/>
        <ProductsGrid products={FeaturedProductsData} isLoading={isLoading} title={"Featured Products"}/>
        <section>
          <Button type={'primary'} value={'View All Products'} action={changeProductsPage} ></Button>
        </section>
    </>
  );
}

export { Home };
