import { createRef } from 'react';
import { useHistory } from "react-router-dom";
import { BiSearchAlt2 } from 'react-icons/bi';

import './SearchBar.css';

export const SearchBar = () => {
    
    const history = useHistory();
    let searchInput = createRef();
    const goToSearch = () => {
        history.push(`/search?q=${searchInput.current.value}`);
    }    
    
    return(
        <>  
            <div className="search-bar-container">
                <input className="search-input" ref={searchInput} type="text" placeholder="Search Your Next Flip..." 
                    onKeyPress={e => { 
                        e.key == 'Enter' ? goToSearch() :  ' ' 
                    }} 
                />
                <button className="search-button" onClick={() => goToSearch() }><BiSearchAlt2 /></button>
            </div>
        </>
    ); 
};