import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import './PaginationControls.css';




export const Pagination = () => {

    let pagination = [1, 2, 3, 4 ,5]
    const pages = pagination.map(number => number);

    return (
        <div className="numbers">
            <button className="pagination-btn"><MdKeyboardArrowLeft className="pagination-arrows pagination-left"/></button>
            {pages.map(number => (
                <a key={number} >
                {number}
                </a>
            ))}
            <button className="pagination-btn"><MdKeyboardArrowRight className="pagination-arrows pagination-right"/></button>
        </div>
    );
};