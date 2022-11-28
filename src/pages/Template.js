import React from 'react';
import Footer from './Footer';
import { Link, Outlet, NavLink } from 'react-router-dom';
import './styles.css';

function Template() {
    return (
        <>
            {/* <div>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/contact">Contact</Link> | 
                <Link to="/portfolio">Portfolio</Link>
            </div> */}
            <div>
                <NavLink to="/" end>
                    {({ isActive }) =>
                        isActive ? (
                            <text className="active">Home</text>
                        ) : (                      
                            <text>Home</text>
                        )
                    }
                </NavLink> | 
                <NavLink to="/about">About</NavLink> | 
                <NavLink to="/contact">Contact</NavLink> | 
                <NavLink to="/portfolio">Portfolio</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
            
            <Footer />
        </>
        
    )
}

export default Template;