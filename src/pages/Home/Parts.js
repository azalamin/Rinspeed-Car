import React from "react";
import Part from "./Part";

const Parts = () => {
  const parts = [
    {
      name: "Nut",
      image: "https://i.ibb.co/LrNzGHg/pexels-shane-aldendorff-924676.jpg",
      description: "The parts is using some materials using javascript",
      minQuantity: 900,
      quantity: 2000,
      price: 100,
    },
    {
      name: "Nut",
      image: "https://i.ibb.co/LrNzGHg/pexels-shane-aldendorff-924676.jpg",
      description: "The parts is using some materials using javascript",
      minQuantity: 900,
      quantity: 2000,
      price: 100,
    },
    {
      name: "Nut",
      image: "https://i.ibb.co/LrNzGHg/pexels-shane-aldendorff-924676.jpg",
      description: "The parts is using some materials using javascript",
      minQuantity: 900,
      quantity: 2000,
      price: 100,
    },
    {
      name: "Nut",
      image: "https://i.ibb.co/LrNzGHg/pexels-shane-aldendorff-924676.jpg",
      description: "The parts is using some materials using javascript",
      minQuantity: 900,
      quantity: 2000,
      price: 100,
    },
    {
      name: "Nut",
      image: "https://i.ibb.co/LrNzGHg/pexels-shane-aldendorff-924676.jpg",
      description: "The parts is using some materials using javascript",
      minQuantity: 900,
      quantity: 2000,
      price: 100,
    },
    {
      name: "Nut",
      image: "https://i.ibb.co/LrNzGHg/pexels-shane-aldendorff-924676.jpg",
      description: "The parts is using some materials using javascript",
      minQuantity: 900,
      quantity: 2000,
      price: 100,
    },
  ];
  return (
    <section id="parts" className="px-5 md:px-10 bg-white pt-28">
      <h1 className="text-center text-4xl font-bold uppercase mb-20">
        Our <span className="text-primary">Stock</span> Parts
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {parts.map((part, index) => (
          <Part key={index} part={part} />
        ))}
      </div>
    </section>
  );
};

export default Parts;
