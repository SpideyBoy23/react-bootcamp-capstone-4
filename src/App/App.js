import { useState } from 'react';
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Home } from '../Home/Home';
import { ProductList } from '../ProductList/ProductList';
import { Loader } from '../components/Loader/Loader';

import './App.css';

function App() {

    const [renderPage, setRenderPage] = useState(true);
    const [renderLoading, setRenderLoading ] = useState(true);
    const [sideBarStatus, setSideBarStatus] = useState(false);


    //Change Page Functions
     //I use two functions instead of a ternary operator because if I pulse the Icon in Home Page, it changes to Products Page
    function changeProductsPage () {
            setRenderPage(false);
            setRenderLoading(false);
        setTimeout(()=>{
            setRenderLoading(true);
        }, 2000)
    }

    function changeHomePage () {
        setRenderPage(true);
    }

    //Open/Close
    function setSBStatus () {
        sideBarStatus ? setSideBarStatus(false) : setSideBarStatus(true);
    }


    return (
        <>  
            <div className="page-container">
                <Header action={changeHomePage} page={ renderPage } openSideBar={setSBStatus}/>
                    <div className="content-wrapper">
                        {renderLoading 
                            ? renderPage ? <Home action={changeProductsPage} /> : <ProductList sideBarStatus = {sideBarStatus} page={renderPage}/>
                            :  <Loader /> 
                        } 
                    </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
