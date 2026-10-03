import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { getAccountDetails, returnBook } from "../api/books";

export default function Account() {
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccount = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const data = await getAccountDetails(token);
        console.log(data);
        setUser(data.user || data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccount();
  }, [token]);

  const handleReturn = async (resId) => {
    setError(null);
    try {
      await returnBook(token, resId);
      setUser((prevUser) => ({
        ...prevUser,
        reservations: prevUser.reservations.filter((b) => b.id !== resId),
      }));
    } catch (e) {
      setError(e.message);
    }
  };

  if (loading) return <p>Loading account details....</p>;
  if (!token) return <p>Please Log In to view your account!</p>;

  return (
    <section>
      <h2>My Account</h2>
      <p>
        <strong>Name:</strong> {user?.firstname} {user?.lastname}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>

      <h2>Reserved Books</h2>
      {!user?.reservations || user.reservations.length === 0 ? (
        <p>You currently have no books reserved.</p>
      ) : (
        <ul>
          {user.reservations.map((book) => (
            <li key={book.id} style={{ marginBottom: "1rem" }}>
              <h4>{book.title}</h4>
              <p>By {book.author}</p>
              {book.coverimage && (
                <img
                  src={book.coverimage}
                  alt={`Cover for ${book.title}`}
                  width="100"
                />
              )}
              <br />
              <button onClick={() => handleReturn(book.id)}>Return Book</button>
            </li>
          ))}
        </ul>
      )}
      {error && (
        <p role="alert" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </section>
  );
}
