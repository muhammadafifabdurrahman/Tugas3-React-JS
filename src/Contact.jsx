import React from "react";
import { Link } from "react-router-dom";
import FeatureImage1 from "./assets/1545302769-12-things-.jpg";
import FeatureImage2 from "./assets/1701952598-CbHE4DpXSD.jpg";
import FeatureImage3 from "./assets/perbedaan-pustakawan-dan-pengelo-20220710120959.jpg";
import WhatsAppIcon from "./assets/WhatsApp.svg.png";

function Contact() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        {/* Konten */}
        <div className="container marketing text-center flex-grow-1">
          <div className="row justify-content-center">
            {/* Kolom 1 */}
            <div className="col-lg-4">
              <img
                src={FeatureImage1}
                alt="Contact 1"
                className="rounded-circle mx-auto d-block"
                style={{ width: "140px", height: "140px", objectFit: "cover" }}
              />
              <h2 className="fw-normal mt-3">
                Rina Prasetya – Petugas Sirkulasi Buku
              </h2>

              <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={WhatsAppIcon}
                    alt="WhatsApp"
                    style={{ width: "28px", height: "28px" }}
                  />
                </a>
                <span>+62 812-3456-7890</span>
              </div>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://wa.me/6281234567890"
                >
                  Contact Now
                </a>
              </p>
            </div>

            {/* Kolom 2 */}
            <div className="col-lg-4">
              <img
                src={FeatureImage2}
                alt="Contact 2"
                className="rounded-circle mx-auto d-block"
                style={{ width: "140px", height: "140px", objectFit: "cover" }}
              />
              <h2 className="fw-normal mt-3">
                Andi Saputra – Pengelola Koleksi dan Katalog
              </h2>

              <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                <a
                  href="https://wa.me/6289876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={WhatsAppIcon}
                    alt="WhatsApp"
                    style={{ width: "28px", height: "28px" }}
                  />
                </a>
                <span>+62 898-7654-3210</span>
              </div>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://wa.me/6289876543210"
                >
                  Contact Now
                </a>
              </p>
            </div>

            {/* Kolom 3 */}
            <div className="col-lg-4">
              <img
                src={FeatureImage3}
                alt="Contact 3"
                className="rounded-circle mx-auto d-block"
                style={{ width: "140px", height: "140px", objectFit: "cover" }}
              />
              <h2 className="fw-normal mt-3">
                Siti Haryani – Petugas Referensi dan Layanan Pengunjung
              </h2>

              <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                <a
                  href="https://wa.me/6285678901234"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={WhatsAppIcon}
                    alt="WhatsApp"
                    style={{ width: "28px", height: "28px" }}
                  />
                </a>
                <span>+62 856-7890-1234</span>
              </div>
              <p>
                <a
                  className="btn btn-secondary"
                  href="https://wa.me/6285678901234"
                >
                  Contact Now
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer pakai Link */}
        <footer className="py-3 my-4">
          <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
        </footer>

      </div>
    </>
  );
}

export default Contact;
