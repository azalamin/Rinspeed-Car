import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivetRoute from "./authentication/PrivetRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import auth from "./firebase.init";
import useAdmin from "./hooks/useAdmin";
import AddReview from "./pages/Dashboard/AddReview";
import AddProduct from "./pages/Dashboard/Admin/AddProduct";
import ManageOrder from "./pages/Dashboard/Admin/ManageOrder";
import ManageProduct from "./pages/Dashboard/Admin/ManageProduct";
import Users from "./pages/Dashboard/Admin/Users";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import NotFound from "./pages/NotFound";
import { privetRoutes } from "./routes/privetRoutes";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  
  useEffect( () => {
     AOS.init();
  }, [])
  
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {/* Privet Routes */}
        <Route element={<PrivetRoute />}>
          {privetRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>

        {/* Dashboard Routes */}
        <Route element={<PrivetRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="add-review" element={<AddReview />} />
            <Route path="my-profile" element={<MyProfile />} />
            {admin && (
              <>
                <Route path="user" element={<Users />} />
                <Route path="manage-order" element={<ManageOrder />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="mange-product" element={<ManageProduct />} />
              </>
            )}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
