import React, { useEffect } from 'react';
import $ from 'jquery';

function Eksplorasi() {
  useEffect(() => {
    // jQuery Script
    $(document).ready(function () {
      $(".choice-chip").click(function () {
        // Mengubah active button
        $(".choice-chip").removeClass("active");
        $(this).addClass("active");

        // Mengambil kategori yang dipilih
        const category = $(this).text();

        // AJAX Request
        $.ajax({
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          },
          url: "/eksplorasi",
          type: "POST",
          data: {
            category: category,
          },
          success: function (response) {
            // Mengosongkan konten lama
            $(".exploration-card .row").empty();

            // Memeriksa apakah ada karya
            if (response.length > 0) {
              // Menampilkan setiap karya
              $.each(response, function (index, artwork) {
                const card = `
                  <div className="card-artworks">
                    <a href="/eksplorasi/${artwork.id}">
                      <img src="assets/storage/artwork/${artwork.image}" alt="Illustration" className="img-fluid" />
                    </a>
                    <div className="author-info gap-2">
                      ${artwork.user && artwork.user.image
                          ? `<img src="storage/user/${artwork.user.image}" alt="author">`
                          : `<img src="/assets/images/default-profile.png" alt="author">`}
                      <p className="author-name mt-3">${artwork.user ? `${artwork.user.name}, ${artwork.description.slice(0, 10)} ...` : "Unknown User"}</p>
                    </div>
                  </div>
                `;
                $(".exploration-card .row").append(card);
              });
            } else {
              $(".exploration-card .row").append("<p>Tidak ada karya</p>");
            }
          },
          error: function (xhr) {
            console.log(xhr.responseText);
          },
        });
      });
    });
  }, []);

  return (
    <div>
      <section>
        <div className="exploration">
          <h1 className="title">Eksplorasi</h1>
          <div className="exploration-category mt-5 d-flex align-items-center">
            <div className="row">
              <div className="choice-chip-container d-flex flex-wrap justify-content-center">
                <button className="choice-chip active">Digital Art</button>
                <button className="choice-chip">Poster</button>
                <button className="choice-chip">Web Design</button>
                <button className="choice-chip">Wallpaper</button>
                <button className="choice-chip">Kerajinan Tangan</button>
                <button className="choice-chip">Ilustrasi</button>
                <button className="choice-chip">Portofolio</button>
                <button className="choice-chip">Typography</button>
                <button className="choice-chip">PowerPoint</button>
                <button className="choice-chip">Animasi</button>
                <button className="choice-chip">Tanah Liat</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Kartu karya akan ditambahkan di sini melalui jQuery */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Eksplorasi;
