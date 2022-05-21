import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

export default App;
