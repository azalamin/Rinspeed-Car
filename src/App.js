import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminRoute from "./authentication/AdminRoute";
import PrivetRoute from "./authentication/PrivetRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import { adminPrivetRoutes } from "./routes/adminPrivetRoutes";
import { privetRoutes } from "./routes/privetRoutes";
import { publicRoutes } from "./routes/publicRoutes";
import { userPrivetRoutes } from "./routes/userPrivetRoutes";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

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

        {/* User Dashboard Routes */}
        <Route element={<PrivetRoute />}>
          <Route path="/user-dashboard" element={<Dashboard />}>
            {userPrivetRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
        </Route>

        {/* Admin Dashboard Routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin-dashboard" element={<Dashboard />}>
            {adminPrivetRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
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
