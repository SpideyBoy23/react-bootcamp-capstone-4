import { ShopProvider } from '../Context/context';
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Home } from '../pages/Home/Home';
import { ProductList } from '../pages/ProductList/ProductList';
import { ProductDetail } from '../pages/ProductDetail/ProductDetail';
import { SearchResults } from '../pages/SearchResults/SearchResults';
import ScrollToTop from '../components/common/ScrollToTop/ScrollToTop';

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';


import './App.css';

function App() {

    return (
        <ShopProvider >
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
                                    <ProductList />
                                </Route>
                                <Route excact path="/product/:productId" >
                                    <ProductDetail />
                                </Route>
                                <Route path="/search" >
                                    <SearchResults />
                                </Route>
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </>
            </Router>
        </ShopProvider>
    );
}

export default App;
