import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./pages/home";
import SinglePage from "./pages/singlePage";
import Login from "./pages/login";
import Register from "./pages/register";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}
