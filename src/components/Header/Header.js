import { SearchBar } from '../SearchBar/SearchBar.js';
import logoUrl from '../../assets/logos/house_flipper_logo.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavLink, useHistory, useLocation } from 'react-router-dom';


import './Header.css';



export const Header = ({ page, openSideBar }) => {

    const history = useHistory();
    const location = useLocation();
    const homePaths = ['/', '/home'];
    
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
                    <NavLink exact to="/" className={`navigation-elements ${homePaths.includes(location.pathname) ? 'active-link' : ' '}`}>
                        Home
                    </NavLink>
                    <NavLink exact to="/products" activeClassName="active-link" className="navigation-elements">
                        Products
                    </NavLink>
                </div>
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
