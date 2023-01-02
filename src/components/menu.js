import React from 'react'
import { Link } from 'gatsby'

const Menu = () => {

    return(
        <nav>
            <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/404">404</Link></li>
            </ul>
        </nav>
    )
}

export default Menu