import React, { useEffect, useState } from "react";
import fetcher from '../../api/index';
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/parts")
    //   .then((res) => res.json())
    //   .then((data) => setParts(data));
    (async() => {
      const {data} = await fetcher.get('/parts');
      setParts(data)
    })()
  }, []);

  return (
    <section id="parts" className="px-5 md:px-10 bg-white pt-28">
      <h1 className="text-center text-4xl font-bold uppercase mb-20">
        Our <span className="text-primary">Stock</span> Parts
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {parts.map((part) => (
          <Part key={part?._id} part={part} />
        ))}
      </div>
    </section>
  );
};

export default Parts;
