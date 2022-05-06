import { useContext } from 'react';
import { ShopContext } from '../../Context/context.js';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart.js';
import logoUrl from '../../assets/logos/house_flipper_logo.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavLink, useHistory, useLocation } from 'react-router-dom';

import './Header.css';

export const Header = ({ page }) => {

    const history = useHistory();
    const { pathname } = useLocation();
    const homePaths = ['/', '/home'];

    const { openSidebar} = useContext(ShopContext)
    
    const changeHomePage = () => {
        history.push("/");
    }

    return (
        <>
            <nav className="header">
                <img src={logoUrl} alt="" onClick={changeHomePage}></img>
                <span  className="icon search-bar">
                    <SearchBar/>
                </span>
                <div className="navigation-container">
                    <NavLink exact to="/" className={`navigation-elements ${homePaths.includes(pathname) ? 'active-link' : ' '}`}>
                        Home
                    </NavLink>
                    <NavLink exact to="/products" activeClassName="active-link" className="navigation-elements">
                        Products
                    </NavLink>
                </div>
                <ShoppingCart />
                <span className="icon hamburguer-menu" onClick={ () => openSidebar(pathname) }>
                    <GiHamburgerMenu />
                </span>
                <span className="icon search-icon">
                    <AiOutlineSearch />
                </span>
            </nav>
        </>
    )
}
