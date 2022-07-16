import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../src/pages/login";
import Register from "../src/pages/register";
import Desktop from "../src/pages/desktop";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </BrowserRouter>
  );
}
