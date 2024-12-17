import React from "react";
import './home.css'
import { Route, BrowserRouter as Router ,Routes, Link} from 'react-router-dom';
import Home1 from "./home2";


function App1() {
    return (
      <div>
          <Home1/>
      <div className="main-container">
     
    <div className="bottom-content">
        <div className="bottom-left">
            <h1 >Your feet deserve the best</h1>
            <p>ShoeStores.com is all about footwear. We have been in the shoe business for over 130 years. Yes, you read that correctly, over a century plus a quarter</p>
            <div className="btn-sec">
                <button>Shop Now</button>
                <div class="dropdown">
  <button class="dropbtn">Categories</button>
  <div class="dropdown-content">
   <li >Sports Shoes</li>
  <li >Casual Shoes  </li>
  <li >Formal Shoes </li>
  </div>
</div>
            </div>
        </div>
        <div className="bottom-right">
            <img 
            src="https://i.postimg.cc/Vkfyq8Zj/shoes-img.png" alt="" 
            className="shoes-img"/>
           </div>
    </div>

   </div>
   <div className="products">
      <h2>Collections</h2>
      <div  className="product">
      <Link to="/Sp1"><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/56db8a089e534ec89306b305fec42dcd_9366/NRGY_fusion_M_Black_IU6328_01_standard.jpg" alt="logo"/></Link>   

          <p></p>
          <h3>Sports Collection </h3>
                 
      </div>

      <div className="product">
      <Link to="/Sp1"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f3e7049-5c99-428c-abcd-e246b086f2ed/AIR+FORCE+1+%2707.png" alt="logo"/></Link>   
          <p></p>
          <h3>Sneakers Collection</h3>
          
         
      </div>

      <div className="product">
      <Link to="/Sp1"><img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81d74b03-72d2-43d6-b195-76ba59f5cd29/custom-nike-air-force-1-low-by-you-shoes.png" alt="logo"/></Link>   

          <p></p>
          <h3>Casual Collection </h3>
        
         
      </div>
  </div>
   <div className="main1">
     
        <div className="content">
            <div className="content-left">
                
                <h1><span>RG45 limited edition </span> </h1>
                <p>Unleash the extraordinary. Elevate your game with Nike's Limited Edition. Where innovation meets style, leaving a lasting mark. Just do it.</p>
                <button className="btn">Shop now</button>
            </div>
            <div className="content-right">
                <div className="product1">
                    <img src="https://i.postimg.cc/445f9BBH/shoes2.png" alt="nike shoes"/>
                    <h4>Nike Air max 1</h4>
                    <p className="catagory1">Men's shoes</p>
                    <p className="color1">Color: white</p>
                    <p className="price1">₹ 14 995</p>
                </div>
                <div className="product1">
                    <img src="https://i.postimg.cc/rFNrz1tf/shoes6.png" alt="nike shoes"/>
                    <h4>Nike Air peg 2K5</h4>
                    <p className="catagory1">Men's shoes</p>
                    <p className="color1">Color: white</p>
                    <p className="price1">₹ 13  995</p>
                </div>
                <div className="product1">
                    <img src="https://i.postimg.cc/28Q4hpgF/shoes8.png" alt="nike shoes"/>
                    <h4>Nike lunar roam</h4>
                    <p className="catagory1">Men's shoes</p>
                    <p className="color1">Color: sleepy blue</p>
                    <p className="price1">₹ 15 995</p>
                </div>
                <div className="product1">
                    <img src="https://i.postimg.cc/5tYy5L6d/shoes4.png" alt="nike shoes"/>
                    <h4>Nike nocta glide</h4>
                    <p className="catagory1">Men's shoes</p>
                    <p className="color1">Color: white</p>
                    <p className="price1">₹ 12 995</p>
                </div>
                <div className="product1">
                    <img src="https://i.postimg.cc/D0FzKN5n/shoes5.png" alt="nike shoes"/>
                    <h4>Nike Terminator high</h4>
                    <p className="catagory1">Men's shoes</p>
                    <p className="color1">Color: sleepy blue</p>
                    <p className="price1">₹ 15 995</p>
                </div>
                <div className="product1">
                    <img src="https://i.postimg.cc/j5Yxz1pP/shoes3.png" alt="nike shoes"/>
                    <h4>Nike Terminator high</h4>
                    <p className="catagory1">Men's shoes</p>
                    <p className="color1">Color: sleepy blue</p>
                    <p className="price1">₹ 15 995</p>
                </div> <div className="product1">
                    <img src="https://i.postimg.cc/VLKk3DtP/shoes.png" alt="nike shoes"/>
                    <h4>Nike Terminator high</h4>
                    <p className="catagory1">Men's shoes</p>
                    <p className="color1">Color: sleepy blue</p>
                    <p className="price1">₹ 15 995</p>
                </div>
            </div>
        </div>
        
    </div>


   


  
  
  
  <footer>
      <p>&copy; 2024 Shoe Store. All rights reserved.</p>
        </footer>
  </div>

    );
  }export default App1