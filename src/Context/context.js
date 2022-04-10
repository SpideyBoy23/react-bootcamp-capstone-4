import {createContext, useState, useMemo }  from 'react';

const ShopContext = createContext();

const ShopProvider = (props) => {

    const [activeSidebar, setActiveSidebar] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);

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


    const providerValue = useMemo(() => {
        return(
            {
                openSidebar,
                activeSidebar,
                setFilters,
                activeFilters,
                setActiveSidebar
            }
        )
    }, [activeSidebar, activeFilters])

    return <ShopContext.Provider value={providerValue} {...props} />
}

export {ShopContext, ShopProvider} 