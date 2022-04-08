import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import './PaginationControls.css';




export const Pagination = ({ productsData, isLoading, paginate }) => {  

    const totalPages = [];

    for (let i = 1; i <= productsData.total_pages; i++) {
        totalPages.push(i)
    }

    return (
        <div className="numbers">
            <button className="pagination-btn"><MdKeyboardArrowLeft className="pagination-arrows pagination-left"/></button>
            
            {isLoading ? ' ' :  totalPages.map(number => (
                <span key={number} className="pagination-numbers" onClick={() => paginate(number)}>
                    {number}
                </span>
            ))}
            <button className="pagination-btn"><MdKeyboardArrowRight className="pagination-arrows pagination-right"/></button>
        </div>
    );
};