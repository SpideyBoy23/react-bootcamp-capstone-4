import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsSearch } from '../../utils/hooks/useProductsSearch';
import { ProductsGrid } from '../../components/ProductsGrid/ProductsGrid';
import { SideBar } from '../../components/SideBar/SideBar';
import { Pagination } from '../../components/PaginationControls/PaginationControls';
import { Loader } from '../../components/Loader/Loader';

import './Searchresults.css';


export const SearchResults = () => {

    const history = useHistory();
    let searchParams = (new URL(document.location)).searchParams;
    let searchedParam = searchParams.get("q");
    const [searchParam, setSearchParams] = useState(searchedParam);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [{ data: productsData, isLoading }, reSearch] = useProductsSearch({ pageSize: 20, currentPage: currentPage, searchParams: searchParam });

    history.listen(() => {
        searchParams = (new URL(document.location)).searchParams;
        setSearchParams(searchParams.get("q"));
        reSearch();
    })

    function paginate (number) {
        setCurrentPage(number);
        reSearch();
    }

    let resultsArray = [];

    isLoading ? resultsArray = resultsArray : resultsArray = productsData.results;

    return (
        <>
            <h1>Let Us Find Your Next Flip</h1>
            {isLoading? <Loader /> : resultsArray.length <= 0 ? 
                <>
                    <h1>Or Not... </h1>
                    <h2>Sorry, we couldn't find any product with that description 🙁</h2> 
                </>
                :
                <>
                    <ProductsGrid products={productsData} isLoading={isLoading} />
                    <Pagination productsData={productsData} isLoading={isLoading} paginate={paginate} activePage={currentPage}/>
                </>
            }
        </>
    )
}