import './SideBar.css'

export const SideBar = ({ filter, page, categories}) => {

    if(!page){
        return (
            <>
                <div className="sidebar">
                    <ul>
                        <h2 className="filter-title">Filter your next flip</h2>
                        {categories.results.map((category, index) => {
                            const { id, data: {name} } = category
                            return (
                                <li className="button" key={index}><button onClick={() => filter(id)}>{name}</button></li>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }    

}