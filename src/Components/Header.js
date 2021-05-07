import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="inner-context">
                    <div className="brand">
                        <Link to="/">The Shoppies</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">All Movies</Link>
                        </li>
                        <li>
                            <Link to="/Nominated">Nominated</Link>
                        </li>
                        <li>
                            <Link to="/Add" className="btn">Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
