const API = import.meta.env.VITE_API;

export const getBooks = async () => {
  const response = await fetch(`${API}/books`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch books.");
  }

  return data;
};

export const getBook = async (id) => {
  const response = await fetch(`${API}/books/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch book details.");
  }

  return data;
};

export const reserveBook = async (token, bookId) => {
  const response = await fetch(`${API}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ bookId: Number(bookId) }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to reserve book.");
  }

  return data;
};

export const returnBook = async (token, reservationId) => {
  const response = await fetch(`${API}/reservations/${reservationId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Failed to return book.");
  }

  return true;
};

export const getAccountDetails = async (token) => {
  const response = await fetch(`${API}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch account details.");
  }

  return data;
};
