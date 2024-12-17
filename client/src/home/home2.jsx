import React from 'react'
import './home.css'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';


export default function Home1() {
  return (
    <div className='neem' >
     
      <section>
        <nav>
          <div className="logo">
            <h1><Link to="/" >RO<span>45</span></Link></h1>
          </div>

          <ul>
            <li className="a" > <Link className='a' to="/" >Home</Link></li>
            <li className="a" > <Link className='a' to="/Sp1" >Products</Link></li>
            <li className="ab" > <Link className='a' to="/About" >About us</Link></li>
            <li className="a" > <Link className='a' to="/Review" >Review</Link></li>
            <li className="a" ><Link className='a' to="/Services" >Services</Link> </li>
          </ul>

          <div className="icons">
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-user"></i>
          </div>

        </nav>



      </section>


    </div>
  )
}
