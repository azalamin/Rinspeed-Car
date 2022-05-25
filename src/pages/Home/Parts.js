import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosPrivet from "../../api/axiosPrivet";
import auth from "../../firebase.init";
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosPrivet.get(
          "http://localhost:5000/parts"
        );
        setParts(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [navigate]);

  return (
    <section id="parts" className="px-5 md:px-10 bg-white pt-28">
      <h1 className="text-center text-4xl font-bold uppercase mb-20">
        Our <span className="text-primary">Stock</span> Parts
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {parts.slice(0, 6).map((part) => (
          <Part key={part?._id} part={part} />
        ))}
      </div>
    </section>
  );
};

export default Parts;
