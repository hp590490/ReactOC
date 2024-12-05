import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error from "./pages/Error";
import data from "./assets/logements.json";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {data.map((idlogement) => (
          <Route
            path={"/logement/:id"}
            element={<LogementVerify />}
            key={idlogement.id}
          />
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

const LogementVerify = () => {
  const { id } = useParams();
  const logementExists = data.some((logement) => logement.id === id);
  if (!logementExists) {
    return <Navigate to="/error" />;
  }
  return <Logement />;
};

export default App;
