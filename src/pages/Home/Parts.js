import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosPrivet from "../../api/axiosPrivet";
import Loading from '../../components/Loading';
import auth from "../../firebase.init";
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadParts = async () => {
      try {
        setLoading(true);

        const response = await axiosPrivet.get(
          "http://localhost:5001/parts"
        );

        // Ensure parts is always an array
        const partsData = Array.isArray(response.data)
          ? response.data
          : response.data?.data || [];
        setParts(partsData);
      } catch (error) {
        console.error("Parts loading failed:", error);
        setParts([]);

        if (error?.response?.status === 401 || error?.response?.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    loadParts();
  }, [navigate]);


  if (loading) return <Loading />;

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
