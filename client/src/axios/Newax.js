import React, { useEffect, useState } from "react";
import axios from "axios";
import "./axios.css";

const RestaurantByCityz1 = () => {
    const [Shoes, setShoes] = useState([]);
    const [inputshoes, setInputShoes] = useState("");
    const [filteredShoes, setFilteredShoes] = useState([]);

    // Fetch shoe data from API
    useEffect(() => {
        axios
            .get("http://localhost:5402/shoes")
            .then((res) => {
                console.log("API response:", res.data.list);
                setShoes(res.data.list); // Assuming API response has a 'list' property
                setFilteredShoes(res.data.list); // Initially show all shoes
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    // Input change handler
    const handleInputChange = (event) => {
        setInputShoes(event.target.value);
    };

    // Search logic with combined filters
    const handleSearch = () => {
        if (inputshoes.trim()) {
            const query = inputshoes.trim().toLowerCase();

            const filtered = Shoes.filter((shoe) => 
                shoe.category.toLowerCase().includes(query) ||
                shoe.name.toLowerCase().includes(query) ||
                shoe.gender.toLowerCase().includes(query)
            );

            setFilteredShoes(filtered);
        } else {
            setFilteredShoes(Shoes); // Show all shoes if input is empty
        }
    };

    return (
        <div>
            <div id="inp">
                <input
                    type="text"
                    value={inputshoes}
                    onChange={handleInputChange}
                    placeholder="Enter Shoe Name, Category or Gender"
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {filteredShoes.map((data) => (
                <div className="mxs" key={data.id}>
                    <div className="card__mxs">
                        <article className="card__article">
                            <img
                                src={data.img}
                                alt={data.name}
                                className="card__img"
                            />
                            <div className="card__data">
                                <h1>{data.name}</h1>
                                <h2>{data.brand}</h2>
                                <p className="price">${data.price}</p>
                                <p>Category: {data.category}</p>
                                <p>Gender: {data.gender}</p>
                                <button>Add to Cart</button>
                            </div>
                        </article>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantByCityz1;
