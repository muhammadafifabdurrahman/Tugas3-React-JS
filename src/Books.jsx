// src/Books.jsx
import React, { useState } from "react";
import booksData from "./Utils/books";

function Books() {
  const [books, setBooks] = useState(booksData);

  const addBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru",
      author: "Penulis Baru",
      year: 2025,
      description: "Deskripsi buku baru.",
      image: `https://picsum.photos/seed/${books.length + 1}/600/400`
    };
    setBooks([...books, newBook]);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Daftar Buku</h1>

      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={addBook}>
          + Tambah Buku
        </button>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card shadow-sm">
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-muted">{book.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button className="btn btn-sm btn-outline-secondary">View</button>
                    <button className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-body-secondary">{book.year}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
