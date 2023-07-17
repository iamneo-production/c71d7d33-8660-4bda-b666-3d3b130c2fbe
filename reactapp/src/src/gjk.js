import React from 'react'
import './gjk.css'
import { Link } from 'react-router-dom'
export default function Products() {
  return (
    <>
    <section class="product" id="product">
<div class="main-txt">
    <h3>Products</h3>
</div>
<div class="card-content">
    <div class="row">
        <img src="https://png.pngitem.com/pimgs/s/518-5182447_old-wood-arm-chair-hd-png-download.png" alt=""/>
        <div class="card-body">
            <h3>Chair</h3>
            <p>Select Your Favourite<i class="fa-solid fa-heart"></i>Chair for you...</p>
            <h5>Price $999</h5>
            <Link to="/chair"><button>Order Now</button></Link>
        </div>
    </div>
    <div class="row">
        <img src="https://st.depositphotos.com/1009948/1357/i/600/depositphotos_13579527-stock-photo-modern-grey-sofa-on-the.jpg" alt=""/>
        <div class="card-body">
            <h3>Sofas</h3>
            <p>Select Your Favourite<i class="fa-solid fa-heart"></i> sofas for you...</p>
            <h5>Price $999</h5>
            <Link to="/sofa"><button>Order Now</button></Link>
        </div>
    </div>
    <div class="row">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB57WtkUFhtAhJF-xWR46RVRT0K7KH-MI2MA&usqp=CAU" alt=""/>
        <div class="card-body">
            <h3>Table</h3>
            <p>Select Your Favourite<i class="fa-solid fa-heart"></i>Table for you...</p>
            <h5>Price $999</h5>
            <Link to="/din"><button>Order Now</button></Link>
        </div>
    </div>
    <div class="row">
        <img src="https://www.ulcdn.net/images/products/834440/product/MBBDST33BR30414_LP.jpg?1689341046" alt=""/>
        <div class="card-body">
            <h3>Bed</h3>
            <p>Select Your Favourite<i class="fa-solid fa-heart"></i>Beds for you...</p>
            <h5>Price $999</h5>
            <Link to="/bed"><button>Order Now</button></Link>
        </div>
    </div>
</div>
<div class="card-content">
    <div class="row">
        <img src="https://cdn.pixabay.com/photo/2014/12/21/23/47/dresser-576043_1280.png" alt=""/>
        <div class="card-body">
            <h3>Chest of Drawers</h3>
            <p>Select Your Favourite<i class="fa-solid fa-heart"></i>CheastDrawers for you...</p>
            <h5>Price $999</h5>
            <Link to="/draw"><button>Order Now</button></Link>
        </div>
    </div>
    <div class="row">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkOZpu3pIMX1XThh2MyPrdZqovhWaMin_78Q&usqp=CAU" alt=""/>
        <div class="card-body">
            <h3>BookCase</h3>
            <p>Select Your Favourite<i class="fa-solid fa-heart"></i>BookCase for you...</p>
            <h5>Price $999</h5>
            <Link to="/bookse"><button>Order Now</button></Link>
        </div>
    </div>
    <div class="row">
        <img src="https://cdn.pixabay.com/photo/2015/07/05/07/47/garden-831995_640.jpg" alt=""/>
        <div class="card-body">
            <h3>OutDoor Furnitures</h3>
            <p>Select Your Favourite<i class="fa-solid fa-heart"></i>OutDoorFurniture for you...</p>
            <h5>Price $999</h5>
            <Link to="/out"><button>Order Now</button></Link>
        </div>
    </div>
    <div class="row">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhM3IUZFGXnolEEoN6jUcb3-nJyfd8QpDcWQ&usqp=CAU" alt=""/>
        <div class="card-body">
            <h3>Armoire</h3>
            <p>Select Your Favourite<i class="fa-solid fa-heart"></i> Armoire for you...</p>
            <h5>Price $999</h5>
            <Link to="/arm"><button>Order Now</button></Link>
        </div>
    </div>
</div>
</section>
    </>
  )
}
