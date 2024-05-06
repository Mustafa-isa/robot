"use client";

import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import apiClient from "../_Utilis/apiClient";
function Products() {
  const [products, setProducts] = React.useState([
    {
      name: "Yasser Mamdouh",
      Department: "Communication",
      img: "/Yasser Mamdouh-2.jpg",
    },
    {
      name: "Youssef Alaa",
      Department: "Communication",
      img: "/Youssef Alaa.jpg",
    },
    {
      name: "Ahmed Abdulrahim",
      Department: "Communication",
      img: "/Ahmed Abdulrahim.jpg",
    },
    {
      name: "Caroline Magdy",
      Department: "Communication",
      img: "/Caroline Magdy.jpg",
    },
    {
      name: "Youssef Sherif",
      Department: "Communication",
      img: "/Youssef Sherif.jpg",
    },
    {
      name: "Ahmed Elshafey ",
      Department: "Mechatronics",
      img: "/Ahmed El_Shafey.jpg",
    },
    {
      name: "Shrouk Mohamed",
      Department: "Mechatronics",
      img: "/Shrouk Mohamed.jpg",
    },
    {
      name: "Mahmoud Salah",
      Department: "Mechatronics",
      img: "/Mahmoud Salah.jpg",
    },
    {
      name: "Nouran Waleed",
      Department: "Mechatronics",
      img: "/Nouran Waleed.jpg",
    },
    {
      name: "Moaz Diab",
      Department: "Electronic",
      img: "/Moaz Diab.jpg",
    },
    {
      name: "Abdelaziz Mohamed",
      Department: "Electronic",
      img: "/image.jpeg",
    },
    {
      name: "Youssef Mohamed",
      Department: "Electronic",
      img: "/Youssef Sherif.jpg",
    },
    {
      name: "Joseph Maher",
      Department: "Electronic",
      img: "/Joseph Maher.jpg",
    },
    {
      name: "Salwa Mahmoud",
      Department: "Communication",
      img: "/Salwa Mahmoud.jpg",
    },
  ]);

  return (
    <div className=" relative   bg-blur-[30px]  ">
      <h2 className="text-center text-3xl font-bold my-7 p-3 bg-slate-300 w-[300px] mx-auto bg-opacity-45 rounded-lg">
        Team Members
      </h2>

      <div className="w-full sm:w-[90%] mx-auto py-20 gap-10 flex items-center justify-center flex-wrap ">
        {products?.map((user) => (
          <ProductItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Products;
