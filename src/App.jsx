import Register from "./auth/Register";
import Login from "./auth/Login";
import Error404 from "./Error404.jsx";
import Layout from "./layout/Layout.jsx";
import BookPage from "./bookList/BookPage.jsx";
import Account from "./auth/Account.jsx";
import { Routes, Route } from "react-router";
import BookDetails from "./bookList/BookDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<BookPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/books/:id" element={<BookDetails />} />

        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
