import React from "react";

//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//import { useState } from "react";

const products = [
  {
    "id": 1,
    "category": "",
    "image": "shoe1.jpg",
    "name": "Hiker",
    "price": 94.95,
    "skus": [
      { "sku": "17", "size": 7 },
      { "sku": "18", "size": 8 }
    ],
    "description": "This rugged boot will get you up the mountain safely."
  },
  {
    "id": 2,
    "category": "",
    "image": "shoe2.jpg",
    "name": "Climber",
    "price": 78.99,
    "skus": [
      { "sku": "28", "size": 8 },
      { "sku": "29", "size": 9 }
    ],
    "description": "Sure-footed traction in slippery conditions."
  },
  {
    "id": 3,
    "category": "",
    "image": "shoe3.jpg",
    "name": "Explorer",
    "price": 145.95,
    "skus": [
      { "sku": "37", "size": 7 },
      { "sku": "38", "size": 8 },
      { "sku": "39", "size": 9 }
    ],
    "description": "Look stylish while stomping in the mud."
  }
] ;




export default function App() {

   // const [size, setSize] = useState("");

function renderProduct(p) {
    return (
        <div key={p.id} className="product">
            <a href="/">
                <img src={`/images/${p.image}`} alt={p.name} />
                <h3>{p.name}</h3>
                <p>${p.price}</p>
            </a>
        </div>
        );
    }



    return (
    <>
    <div className="content">

<main>

    <section id="filters">
        <label htmlFor="size">filter by Size </label>{" "}
        <select id="size">
            <option value="">All by Size</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </select>
    </section>

    <section>
            {products.map(renderProduct)}
    </section>
</main>


    </div>
    </>
    );
}

  


