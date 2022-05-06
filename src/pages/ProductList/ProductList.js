import { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../../Context/context';
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid';
import { SideBar } from '../../components/SideBar/SideBar';
import { Pagination } from '../../components/PaginationControls/PaginationControls';
import { useProducts } from '../../utils/hooks/useProducts';
import { useProductsCategories } from '../../utils/hooks/useProductCategories';


import './ProductList.css'


function ProductList () {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [{ data: productsData, isLoading }, reSearch] = useProducts({ pageSize: 12, currentPage: currentPage});
    const {data: categories, isLoading: loading } = useProductsCategories();
    const { activeSidebar } = useContext(ShopContext);

    function paginate (number) {
        setCurrentPage(number);
        reSearch();
    }

    return (
        <>
            <h1>Make Room for Better Living</h1>
            <h3>Flip your dream house with us</h3>
            <ProductsGrid products={productsData} isLoading={isLoading}/>
            {activeSidebar && 
                <SideBar categories={categories} isLoading={loading}/>
            }
            <Pagination productsData={productsData} paginate={paginate} isLoading={isLoading} activePage={currentPage}/>
        </>
    )
}


export { ProductList };