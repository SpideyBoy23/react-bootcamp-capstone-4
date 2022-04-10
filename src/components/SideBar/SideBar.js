import { useContext }  from 'react';
import { ShopContext } from '../../Context/context';
import './SideBar.css'


export const SideBar = ({categories, isLoading}) => {

    const { setFilters, activeFilters } = useContext(ShopContext)
    return (
        <>
            <div className="sidebar">
                <ul>
                    <h2 className="filter-title">Filter your next flip</h2>
                    <li className="button button-clear"><button onClick={() => setFilters('clear-all')}>Clear Filters</button></li>
                    {isLoading ? 'Loading...' : 
                        categories.results.map((category, index) => {
                            const { id, data: {name} } = category
                            return (
                                <li className={activeFilters.includes(id) ? 'is-active' : ''} key={index}><button onClick={() => setFilters(id)}>{name}</button></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}    