import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../fontAwesome/fontAwesome'
import { ReactComponent as Logo } from '../images/logo.svg'

export default function Header () {
    const [ menuStatus, setMenuStatus ] = useState(false)

    const toggleMenu = () => {
        setMenuStatus(!menuStatus)
        document.body.style.overflow = menuStatus ? 'auto' : 'hidden'
    }

    return (
        <section className="header">
            <div className="container full_height">
                <article className="nav">
                    <a href="/" className="no-hover">
                        <Logo className="logo"/>
                    </a>
                    <nav className="menu">
                        <ul>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Careers</a>
                            </li>
                            <li>
                                <a href="/">Events</a>
                            </li>
                            <li>
                                <a href="/">Products</a>
                            </li>
                            <li>
                                <a href="/">Support</a>
                            </li>
                        </ul>
                    </nav>
                    <button className={`hamburgerbutton ${menuStatus ? 'hidden' : 'show'}`}>
                        <FontAwesomeIcon 
                            icon={["fas", "bars"]} 
                            size= "2x"
                            className="fontAwesome_icon"
                            onClick={toggleMenu}
                        />
                    </button>
                    <section className={`hamburgermenu container ${menuStatus ? 'show' : 'hidden'}`}>
                        <article className="top_hamburgermenu">
                            <a href="/" className="no-hover">
                                <Logo className="logo" onClick={toggleMenu}/>
                            </a>
                            <button>
                                <FontAwesomeIcon 
                                    icon={["fas", "times"]} 
                                    size= "2x"
                                    className="fontAwesome_icon"
                                    onClick={toggleMenu}
                                />
                            </button>
                        </article>
                        <nav>
                            <ul>
                                <li>
                                    <a href="/" className="no-hover" onClick={toggleMenu}>About</a>
                                </li>
                                <li>
                                    <a href="/" className="no-hover" onClick={toggleMenu}>Careers</a>
                                </li>
                                <li>
                                    <a href="/" className="no-hover" onClick={toggleMenu}>Events</a>
                                </li>
                                <li>
                                    <a href="/" className="no-hover" onClick={toggleMenu}>Products</a>
                                </li>
                                <li>
                                    <a href="/" className="no-hover" onClick={toggleMenu}>Support</a>
                                </li>
                            </ul>
                        </nav>
                    </section>
                </article>
                <article className="banner">
                    <section className="banner_box">
                        <h1>Immersive experiences that deliver</h1>
                    </section>
                </article>
            </div>
        </section>
    )
}