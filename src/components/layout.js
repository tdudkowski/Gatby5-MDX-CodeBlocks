import React from 'react'
import Menu from './menu'
import './layout.css'

const Layout = ({children}) => {
    
    return(
        <div>
            <header>
                <Menu />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}

export default Layout

export const Head = () => <title>Hello World</title>
