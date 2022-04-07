import { useState } from 'react';
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Home } from '../pages/Home/Home';
import { ProductList } from '../pages/ProductList/ProductList';
import { ProductDetail } from '../pages/ProductDetail/ProductDetail';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';


import './App.css';

function App() {

    const [renderPage, setRenderPage] = useState(true);
    const [sideBarStatus, setSideBarStatus] = useState(false);

    return (
        <Router>
            <>
                <div className="page-container">
                    <Header/>
                    <div className="content-wrapper">
                        <ScrollToTop />
                        <Switch>
                            <Route exact path={['/', '/home']}>
                                <Home />
                            </Route>
                            <Route excact path="/products" >
                                <ProductList sideBarStatus={sideBarStatus} page={renderPage}/>
                            </Route>
                            <Route excact path="/product/:productId" >
                                <ProductDetail />
                            </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </>
        </Router>
    );
}

export default App;
