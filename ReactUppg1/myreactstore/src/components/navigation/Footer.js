import React from 'react'
// import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="page-footer font-small navbar-dark default-color">
            <div className="footer-copyright text-center py-3">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
            </div>
        </footer>
    )
}
