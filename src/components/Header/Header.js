import { SearchBar } from '../SearchBar/SearchBar.js';
import logoUrl from '../../assets/logos/house_flipper_logo.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import './Header.css';



export const Header = () => {
    return (
        <>
            <nav className="header">
                <img src={logoUrl} alt=""></img>
                <span  className="Icon Search-bar">
                    <SearchBar/>
                </span>
                <span className="Icon Shopping-cart">
                    <AiOutlineShoppingCart />
                </span>
                <span className="Icon Hamburguer-menu">
                    <GiHamburgerMenu />
                </span>
                <span className="Icon Search-icon">
                    <AiOutlineSearch />
                </span>
            </nav>
        </>
    )
}
