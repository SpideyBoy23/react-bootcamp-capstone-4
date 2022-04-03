import { useState } from 'react';
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Home } from '../Home/Home';
import { ProductList } from '../ProductList/ProductList';
import { Loader } from '../components/Loader/Loader';
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
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </>
        </Router>
    );
}

export default App;
