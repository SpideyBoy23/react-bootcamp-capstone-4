import {createContext, useState, useMemo, useEffect }  from 'react';

const ShopContext = createContext();

const ShopProvider = (props) => {

    const [activeSidebar, setActiveSidebar] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const openSidebar = (pathName) => {
        if (pathName == '/products'){
            setActiveSidebar(!activeSidebar);
        } else {
            setActiveSidebar(false);
        }      
    }

    const setFilters = (id) => {
        if(id == 'clear-all') {
            setActiveFilters([]);
        } else if (!activeFilters.includes(id)) {
            setActiveFilters(arr => [...arr, id]);
        }
    }

    const addCartItem = (product, qty) => {
        const exist = cartItems.find(cartItem => cartItem.id == product.id);
        if (exist) {
            if(qty == 0 || qty == null){
                setCartItems(
                    cartItems.map(x => 
                        x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x 
                    )
                );
            } else {
                setCartItems(
                    cartItems.map(x => 
                        x.id === product.id ? {...exist, quantity: exist.quantity + qty} : x 
                    )
                );
            }
        } else {
            if(qty == 0 || qty == null) {
                setCartItems([...cartItems, {...product, quantity: 1}]);
            } else {
                setCartItems([...cartItems, {...product, quantity: qty}]);
            }
        }
    }


    const providerValue = useMemo(() => {
        return(
            {
                openSidebar,
                activeSidebar,
                setFilters,
                activeFilters,
                setActiveSidebar,
                cartItems,
                addCartItem
            }
        )
    }, [activeSidebar, activeFilters, cartItems])

    return <ShopContext.Provider value={providerValue} {...props} />
}

export {ShopContext, ShopProvider} 