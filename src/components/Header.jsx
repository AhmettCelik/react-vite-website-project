import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <section id='header-first-section' className='w-screen bg-white'>
                <div className='flex flex-row w-3/4 mx-auto'>
                    <section>
                        <Link to="/">
                            <img src="" alt="logo" id='logo' />
                            <h1>wimple</h1>
                            <p>auto <br />transport</p>
                        </Link>
                    </section>
                    <section>
                        <nav>
                            <ul>
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="/whywimple">Why Wimple?</Link></li>
                                <li><Link to="/solutions">Solutions</Link></li>
                            </ul>
                        </nav>
                    </section>
                    <section>
                        <a href="">(888) 491-7162</a>
                        <FontAwesomeIcon icon={faHeadset} />
                    </section>
                </div>
            </section>
            <section id='header-second-section' className='w-screen bg-red-700'>
                <div className='w-3/4 mx-auto'>
                    <div>
                        <Link to="/comparequotes">Compare Quotes</Link>
                        <Link to="/helpcenter">Help Center</Link>
                        <Link to="/trackshipment">Track a Shipment</Link>
                        <Link to="/calculator">Calculator</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;