import React from 'react';
import './App.css';
import Navigation from './components/navigation'
import Products from './components/products'

function App() {
  return (
    <div>
      <Navigation />

      <div className="container mt-4">
        <Products />      
      </div>
    </div>
  );
}

export default App;