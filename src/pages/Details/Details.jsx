import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const toy = useLoaderData();
    console.log(toy);
    const {photo,name,toyName, category, price, quantity} =toy;
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{toyName}</h1>
      <h1 className="text-5xl font-bold">{category}</h1>
      <p className="py-6">{price}</p>
      <p className="py-6">Rating: 4.3</p>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Details;