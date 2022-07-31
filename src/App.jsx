// import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SingleNewsPage from "./pages/SingleNews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:name/:id" element={<SingleNewsPage />} />
    </Routes>
  );
}

export default App;
