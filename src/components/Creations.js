import React from 'react'
import { mobileView } from './PicsMobile'
import { desktopView } from './PicsDesktop'

export default function Creations () {
    return (
        <section className="creations container">
            <h2>Our creations</h2>
            <article className="creations_grid">
                <section className="grid grid_mobile">
                    {mobileView.map( ({id, image, text}) => (
                        <div key={id} className="grid_item">
                            <img src={image} alt={text}/>
                            <a href="/" className="overlay">
                                <h3>{text}</h3>
                            </a>
                        </div>
                    ))}
                </section>
                <section className="grid grid_desktop">
                    {desktopView.map( ({id, image, text}) => (
                        <div key={id} className="grid_item">
                            <img src={image} alt={text}/>
                            <a href="/" className="overlay">
                                <h3>{text}</h3>
                            </a>
                        </div>
                    ))}
                </section>
            </article>
            <article className="button">
                <a href="/">See all</a>
            </article>
        </section>
    )
}