import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import './PaginationControls.css';




export const Pagination = () => {

    let pagination = [1, 2, 3, 4 ,5]
    const pages = pagination.map(number => number);

    return (
        <div className="numbers">
            <button className="paginationBtn"><MdKeyboardArrowLeft className="paginationArrows paginationLeft"/></button>
            {pages.map(number => (
                <a key={number} >
                {number}
                </a>
            ))}
            <button className="paginationBtn"><MdKeyboardArrowRight className="paginationArrows paginationRight"/></button>
        </div>
    );
};