import React from 'react'
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart'


export default function navigation() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark default-color">
            <div className="container">
                <Link className="navbar-brand" to="/">React Webstore</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333" aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item dropdown">
                    <a href="!#" className="nav-link mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-shopping-cart"></i></a>
                        <div className="dropdown-menu">
                            <Cart />
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}