import React from 'react'
import Nav from './NavBar'

import './sofa.css'
import sofa1 from './images/dinnings/din1.webp'
import sofa2 from './images/dinnings/din2.webp'
import sofa3 from './images/dinnings/din3.jpg'
import sofa4 from './images/dinnings/din4.webp'
import sofa5 from './images/dinnings/din5.webp'
import sofa6 from './images/dinnings/din6.jpeg'
import sofa7 from './images/dinnings/din7.jpg'
import sofa8 from './images/dinnings/din8.webp'
import sofa9 from './images/dinnings/din9.webp'
import Footer from './footer';

export default function Din() {
 
  return (
   <>
          <Nav/>
    <br></br>
    <br></br>
    <br></br>
   <section class="products">
		<h2>Our Dinning Tables</h2>
 		<div class="all-products">
 			<div class="product1">
				<img src={sofa9}/>
				<div class="product-info">
 					<h4 class="product-title">Farm House 
 					</h4>
 					<p class="product-price">$129</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa2}/>
 				<div class="product-info">
 					<h4 class="product-title">Console
					</h4>
					<p class="product-price">$299</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
			</div>
			<div class="product1">
				<img src={sofa3}/>
				<div class="product-info">
					<h4 class="product-title">Rectangle
					</h4>
 					<p class="product-price">$999</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa4}/>
 				<div class="product-info">
 					<h4 class="product-title">Square
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa5}/>
 				<div class="product-info">
 					<h4 class="product-title">Industrial 
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 			<img src={sofa6}/>
 				<div class="product-info">
 					<h4 class="product-title">Marbel
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa7}/>
 				<div class="product-info">
 					<h4 class="product-title">Convivio
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa8}/>
 				<div class="product-info">
 					<h4 class="product-title">Contemorphory
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
