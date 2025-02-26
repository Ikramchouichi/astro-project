import React, { useState }  from "react";

function AstroCard({image="" , name, description}) {

  const [isInStock, setIsInStock]= useState(true)

  const toggleInStock = () => setIsInStock(!isInStock)
  return (
    <li className="card" data-testid="-item">
      <img src={image} alt={name}/>
      <h4>{name}</h4>
      <p>description: {description} </p>
      {isInStock? (
        <button onClick={toggleInStock} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default  AstroCard;
