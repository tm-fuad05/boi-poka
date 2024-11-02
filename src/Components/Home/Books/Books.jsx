import React, { useEffect } from "react";
import { useState } from "react";
import Book from "./Book";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <h2 className="font-playfair font-bold text-2xl md:text-3xl text-center">
        Books
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
}
