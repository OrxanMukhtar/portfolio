import './header.css'
import { Link } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Footer from '../components/footer'


function Header() {
    return <div id='navDivTop'>

        <section className='navSection'>
            <div id="logoDiv">
                <div   className="logo"><h1>Mukhtarli</h1></div>
            </div>

            <div id="navDiv">
                <nav className='nav'>

                    <ul>
                        <li><Link to='/'>home</Link></li>
                        <li><Link>jobs</Link></li>
                        <li><Link to='/about'>creator</Link></li>
                    </ul>

                </nav>
            </div>


        </section>


    </div>
}

export default Header