import React from 'react'
import './sofa.css'
import { Link } from 'react-router-dom'

import sofa2 from './images/sofa2.jpeg'
import sofa3 from './images/sofa3.jpeg'
import sofa4 from './images/sofa4.jpeg'
import sofa5 from './images/sofa5.jpeg'
import sofa6 from './images/sofa6.jpg'
import sofa7 from './images/sofa7.avif'
import sofa8 from './images/sofa8.jpg'
import sofa9 from './images/sofa9.webp'
import Nav from './NavBar'

export default function Sofa() {
  return (
    <>
        <Nav/>
    <br></br>
    <br></br>
    <br></br>
   <section class="products">
		<h2>Our Sofas</h2>
 		<div class="all-products">
 			<div class="product1">
				<img src={sofa9}/>
				<div class="product-info">
 					<h4 class="product-title">ChesterField Sofa
 					</h4>
 					<p class="product-price">$129</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa2}/>
 				<div class="product-info">
 					<h4 class="product-title">Daybed sofa
					</h4>
					<p class="product-price">$299</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
			</div>
			<div class="product1">
				<img src={sofa3}/>
				<div class="product-info">
					<h4 class="product-title">Arm Sofa
					</h4>
 					<p class="product-price">$999</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa4}/>
 				<div class="product-info">
 					<h4 class="product-title">Knole sofa
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa5}/>
 				<div class="product-info">
 					<h4 class="product-title">Lawson sofa
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 			<img src={sofa6}/>
 				<div class="product-info">
 					<h4 class="product-title">Chaise Longue
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa7}/>
 				<div class="product-info">
 					<h4 class="product-title">Love seat
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa8}/>
 				<div class="product-info">
 					<h4 class="product-title">CamelBack sofa
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 		</div>
 	</section>

    </>
  )
}
