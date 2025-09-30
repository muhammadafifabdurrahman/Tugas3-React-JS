import React from "react";
import { Link } from "react-router-dom"; 
import FeatureImage1 from "./assets/1545302769-12-things-.jpg";
import FeatureImage2 from "./assets/1701952598-CbHE4DpXSD.jpg";
import FeatureImage3 from "./assets/perbedaan-pustakawan-dan-pengelo-20220710120959.jpg";

function Team() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">

        <div className="flex-grow-1">
          <hr className="featurette-divider" />

          {/* Featurette 1 */}
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Rina Prasetya{" "}
                <span className="text-body-secondary">– Petugas Sirkulasi Buku.</span>
              </h2>
              <br />
              <div className="lead">
                <p>- Melayani peminjaman dan pengembalian buku</p>
                <p>- Membuat dan mengelola kartu anggota perpustakaan</p>
                <p>- Memberi informasi dasar kepada pengunjung</p>
                <p>- Menjaga ketertiban di area layanan utama</p>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src={FeatureImage1}
                alt="Featurette 1"
                className="img-fluid mx-auto d-block featurette-image"
                height="500"
                width="500"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          {/* Featurette 2 */}
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Andi Saputra{" "}
                <span className="text-body-secondary">– Pengelola Koleksi dan Katalog.</span>
              </h2>
              <br />
              <div className="lead">
                <p>- Menginput dan memperbarui data buku di sistem katalog</p>
                <p>- Menyusun dan mengorganisasi rak buku sesuai kategori</p>
                <p>- Mengecek kondisi fisik koleksi dan melakukan perawatan</p>
                <p>- Mengatur penambahan atau penghapusan koleksi buku</p>
              </div>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                src={FeatureImage2}
                alt="Featurette 2"
                className="img-fluid mx-auto d-block featurette-image"
                height="500"
                width="500"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          {/* Featurette 3 */}
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Siti Haryani{" "}
                <span className="text-body-secondary">– Petugas Referensi dan Layanan Pengunjung.</span>
              </h2>
              <br />
              <div className="lead">
                <p>- Membantu pengunjung menemukan buku sesuai kebutuhan</p>
                <p>- Memberikan panduan penggunaan perpustakaan dan katalog digital</p>
                <p>- Menjawab pertanyaan seputar informasi dan referensi</p>
                <p>- Mendampingi pengguna ruang baca atau ruang diskusi</p>
              </div>
            </div>
            <div className="col-md-5">
              <img
                src={FeatureImage3}
                alt="Featurette 3"
                className="img-fluid mx-auto d-block featurette-image"
                height="500"
                width="500"
              />
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>

        {/* ✅ Footer full width pakai Link */}
        <footer className="py-3 my-4">
  <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
</footer>

      </div>
    </>
  );
}

export default Team;
