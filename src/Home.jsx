import React from "react";
import books from "./Utils/books";

function Home() {
  return (
    <div className="container">

      {/* Hero */}
      <div className="b-example-divider"></div>
      <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">

          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-4">
              Laskar Pelangi
            </h1>
            <p className="lead mb-4">
              Novel ini menceritakan kisah sebelas anak dari SD Muhammadiyah di Belitung yang tergabung dalam kelompok “Laskar Pelangi”. Mereka berjuang menghadapi keterbatasan fasilitas sekolah sambil mengejar impian dan belajar arti persahabatan, keberanian, dan ketekunan dalam hidup.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-5">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Buy Now
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                View More
              </button>
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://picsum.photos/720/600"
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>

      {/* Produk List */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Daftar Buku</h1>
            <p className="lead text-body-secondary">
              Koleksi buku terbaru dan favorit tersedia di sini.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">View More</a>
              <a href="#" className="btn btn-secondary my-2 m-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>

      {/* Album Cards dari data books */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm">
                  <img
                    src={book.image}
                    className="bd-placeholder-img card-img-top"
                    alt={book.title}
                    height="225"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">{book.year}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-3 my-4">
        <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
      </footer>

    </div>
  );
}

export default Home;
