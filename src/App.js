import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PrivetRoute from "./authentication/PrivetRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddReview from "./pages/Dashboard/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import { privetRoutes } from "./routes/privetRoutes";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
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
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
