import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';

export default function Nav() {


     
  return (
   <>
   <div class="header">
        <nav>
            <input type="checkbox" id="show-search"/>
            <input type="checkbox" id="show-menu"/>
            <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
            <div class="content">
                <div class="logo"><a href="index.html"><img src="https://dhgf5mcbrms62.cloudfront.net/64454550/header-rFGVXB/EO4u1bS-600x600.webp" alt=""/></a></div>
                <ul class="links">
                    <li><Link to="/" id="first">Home</Link></li>
                    <li><Link to="/aboutUs">About</Link></li>
                    <li><a href="#product">Products</a></li>
                    <li><a href="#review">Reviews</a></li>
                    <li><Link to="/form">Signin</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    
                  </ul>
            </div>
            <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
            <form action="/.php" class="search-box">
                <input type="text" placeholder="Search" required/>
                <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
            </form>
        </nav>
    </div>

   </>
  )
}
