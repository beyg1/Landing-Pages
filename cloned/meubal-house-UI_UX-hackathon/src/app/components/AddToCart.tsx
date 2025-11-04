"use client";

import React from "react";

export interface productCart {
  name: string;
  price: number;
  image: string;
  description: string;
  currency: string;
  stock: number;
  price_id: string;
}

const AddToCart = ({
  name,
  price,
  description,
  image,
  currency,
  stock,
  price_id,
}: productCart) => {
  const product = {
    name: name,
    price: price,
    description: description,
    image: "/asgaardsofa.png",
    currency: currency,
    stock: stock,
    price_id: price_id,
  };
  return (
    <div>
      <button
        className={`px-6 py-2 text-white rounded-lg ${product.stock === 0 ? "bg-gray-500 hover:bg-gray-600 pointer-events-none" : "bg-blue-500 hover:bg-blue-600"} transition-all `}
      >
        {product.stock === 0 ? "SoldOut" : "Add to Cart"}
      </button>
    </div>
  );
};

export default AddToCart;
