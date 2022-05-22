import { Route, Routes } from "react-router-dom";
import PrivetRoute from "./authentication/PrivetRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
