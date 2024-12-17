import React, { useEffect, useState } from "react";
import axios from "axios";
import './axios.css'
const RestaurantByCityz = () => {
    const [Shoes, setShoes] = useState([]);
    const [inputshoes, setInputShoes] = useState("");
    const [filteredShoes, setFilteredShoes] = useState([]);

    // Fetch restaurant data from API
    useEffect(() => {
        axios.get('http://localhost:5402/shoes')
            .then((res) => {
                console.log("API response:", res.data.list);
                setShoes(res.data.list); // Assuming API response has a 'list' property
                setFilteredShoes(res.data.list); // Initially, show all restaurants
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    // Input change handler
    const handleInputChange = (event) => {
        setInputShoes(event.target.value);
    };

    // Filter logic triggered by Search button
    const handleSearch = () => {
        if (inputshoes.trim()) {
            const cityToSearch = inputshoes.trim().toLowerCase();
            const filtered = Shoes.filter(r => r.category.toLowerCase() === cityToSearch);
            setFilteredShoes(filtered);
        } else {
            setFilteredShoes(Shoes); // Show all restaurants if input is empty
        }
    };

    return (
        <div>
            <div id="inp">
            <input
                type="text"
                value={inputshoes}
                onChange={handleInputChange}
                placeholder="Enter City Name"
            />
            <button onClick={handleSearch}>Search</button></div>
            {/* <p>Showing {filteredRestaurants.length} restaurants</p> */}
            {filteredShoes.map(data => (
                            <div className="mxs">
                                
                            <div  key={data.id} className="card__mxs">
                               <article class="card__article">
                                  <img src={data.img} lt={data.name} class="card__img"/>
                   
                                  <div className="card__data">
                                  <h1>{data.name}</h1>
                              <p><h2>{data.brand}</h2></p>
                              <p className="price">${data.price}</p>
                              <p>{data.category}</p>
                              <p>{data.gender}</p>
                              <button>Add to Cart</button>
                   
                                     
                                  </div>
                               </article>
                   
                              
                            </div>
                         </div>
            ))}
        </div>
    );
};

export default RestaurantByCityz;