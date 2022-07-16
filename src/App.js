import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../src/pages/login";
import Register from "../src/pages/register";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
