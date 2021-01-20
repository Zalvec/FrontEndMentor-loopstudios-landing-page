import interactiveDesktop from '../images/desktop/image-interactive.jpg'
import interactiveMobile from '../images/mobile/image-interactive.jpg'

export default function Leader () {
    return (
        <section className="leader container">
            <article className="image_box">
                <img src={interactiveMobile} alt="Interactive VR" className='interactive_mobile'/>
                <img src={interactiveDesktop} alt="Interactive VR" className='interactive_desktop'/>
            </article>
            <article className="text_box">
                <h2>The leader in interactive VR</h2>
                <p>
                    Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                </p>
            </article>
        </section>
    )
}