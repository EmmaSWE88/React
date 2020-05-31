import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import LandingPage from './views/LandingPage';
import Products from './views/product/Products';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductDetails from './views/product/ProductDetails';
import NotFound from './views/NotFound';
import Footer from './components/navigation/Footer'


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      
      
        <Switch>
          
          <Route path="/" exact component={LandingPage} />  
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={ProductDetails} />

        

          <Route path="*" component={NotFound} />
        </Switch>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
