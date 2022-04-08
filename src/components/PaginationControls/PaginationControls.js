import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import './PaginationControls.css';




export const Pagination = ({ productsData, isLoading, paginate, activePage}) => {  

    const totalPages = [];

    for (let i = 1; i <= productsData.total_pages; i++) {
        totalPages.push(i)
    }

    return (
        <div className="numbers">            
            {isLoading ? ' ' :  totalPages.map(number => (
                <span key={number} className={` ${activePage == number ? ' active' : ' '} pagination-numbers`} onClick={() => paginate(number)}>
                    {number}
                </span>
            ))}
        </div>
    );
};