import { useState } from 'react';
import { ProductsGrid } from '../components/ProductsGrid/ProductsGrid';
import { SideBar } from '../components/SideBar/SideBar';
import { Pagination } from '../components/PaginationControls/PaginationControls';
import ProductsData from "../mocks/en-us/products.json";
import ProductsCategories from "../mocks/en-us/product-categories.json";

import './ProductList.css'


function ProductList ({ sideBarStatus, page }) {

    const [item, setItem] = useState();
    const [activeCategory, setActiveCategory] = useState(true);

    function filterItem (idCategoy) {
        item === '' || typeof(item) == 'undefined' ?  setItem(idCategoy) : setItem('');
        activeCategory ? setActiveCategory(false) : setActiveCategory(true);
    }

    return (
        <>
            <h1>Make Room for Better Living</h1>
            <h3>Flip your dream house with us</h3>
            <ProductsGrid products={ProductsData} idCategoy={item}/>
            {sideBarStatus && 
                <SideBar filter={filterItem} activeCategory={activeCategory} page={page} categories={ProductsCategories}/>
            }
            <Pagination />
        </>
    )
}


export { ProductList };