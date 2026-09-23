import Account from "./components/Account.jsx";
import Books from "./components/Books.jsx";
import Login from "./components/Login.jsx";
import Navigation from "./components/Navigation.jsx";
import Register from "./components/Register.jsx";
import SingleBook from "./components/SingleBook.jsx";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}
