import React from 'react'
import Cart from './cart'

export default function navigation() {

    return (
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color">
            <div className="container">
                <a className="navbar-brand" href="!#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333" aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="!#">Home</a>
                    </li>
                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item dropdown">
                    <a href="!#" className="nav-link mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shopping Cart</a>
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