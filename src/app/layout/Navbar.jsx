"use client"
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>Navbar
        <nav>
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <div>
                    <button>Viborg haveservice</button>
                    <div>
                        <NavLink to="/viborghaveservice">opgave 1</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar