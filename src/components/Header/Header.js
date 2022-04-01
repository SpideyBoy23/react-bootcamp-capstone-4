import { SearchBar } from '../SearchBar/SearchBar.js';
import logoUrl from '../../assets/logos/house_flipper_logo.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import './Header.css';



export const Header = ({ action, page, openSideBar }) => {
    return (
        <>
            <nav className="header">
                <img src={logoUrl} alt="" onClick={action}></img>
                <span  className="icon search-bar">
                    <SearchBar/>
                </span>
                <span className="icon shopping-cart">
                    <AiOutlineShoppingCart />
                </span>
                <span className="icon hamburguer-menu" onClick={page ? null : (openSideBar)}>
                    <GiHamburgerMenu />
                </span>
                <span className="icon search-icon">
                    <AiOutlineSearch />
                </span>
            </nav>
        </>
    )
}
