import { useState, useEffect } from 'react';
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid';
import { SideBar } from '../../components/SideBar/SideBar';
import { Pagination } from '../../components/PaginationControls/PaginationControls';
import { useProducts } from '../../utils/hooks/useProducts';


import './ProductList.css'


function ProductList ({ sideBarStatus, page }) {
    
    const [currentPage, setCurrentPage] = useState(1);
    const  productsData = useProducts({ pageSize: 12, currentPage: currentPage});
    const [item, setItem] = useState();
    const [activeCategory, setActiveCategory] = useState(true);

    function filterItem (idCategoy) {
        item === '' || typeof(item) == 'undefined' ?  setItem(idCategoy) : setItem('');
        activeCategory ? setActiveCategory(false) : setActiveCategory(true);
    }

    // function fetchPrductsData () {
    //     productsData = useProducts({ pageSize: 12, currentPage: currentPage});
    // }

    // useEffect(() => {
    //     fetchPrductsData();
    // },[currentPage])
    
    // console.log(productsData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <h1>Make Room for Better Living</h1>
            <h3>Flip your dream house with us</h3>
            <ProductsGrid products={productsData} idCategoy={item}/>
            {sideBarStatus && 
                <SideBar filter={filterItem} activeCategory={activeCategory} page={page} categories={ProductsCategories}/>
            }
            <Pagination productsData={productsData} paginate={paginate} />
        </>
    )
}


export { ProductList };