import React, { useState } from "react";

function KaryaPengguna() {
  const [image, setImage] = useState('https://fakeimg.pl/350x200/?text=Artwork');
  const [saveImage, setSaveImage] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  function handleImage(e) {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded); // Simpan gambar yang di-upload
  }

  async function postWork(e) {
    e.preventDefault(); // Mencegah form dari reload otomatis
    if (!saveImage) {
      alert("Silakan unggah gambar terlebih dahulu");
    } else {
      const formData = new FormData();
      formData.append('photos', saveImage);
      formData.append('description', description); 
      formData.append('category', category); 

      try {
        const response = await fetch('http://localhost:4000/works', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (data.status === true) {
          console.log('Data berhasil diupload:', data);
          alert('Karya Kamu Berhasil diupload!');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }

  return (
    <div className='w-full'>
      <section>
        <div className="profile-container">
          <a href="/EkplorasiLogin">
            <img src="/assets/images/arrow-left.png" alt="back" width="40px" className="back" />
          </a>
          <div className="profile-info">
            <img src="/assets/images/Akun.png" alt="profile" />
            <div className="detail">
              <h4>Admin</h4>
              <p></p>
            </div>
          </div>
          <div className="menu mb-3">
            <a href='/KaryaPengguna'><button className="btn-menu active" id="btn-karya" fdprocessedid="6etnix">Karya kamu</button></a>
            <a href="/TentangKamu"><button className="btn-menu" id="btn-tentang" fdprocessedid="m52kcb">Tentang kamu</button></a>
          </div>
          <hr />
          <div className="my-artworks">
            <div className="action mt-5 mb-3">
              <button type="button" className="btn-action" data-bs-toggle="modal" data-bs-target="#modalListDelete" fdprocessedid="zet1w">Hapus</button>
              {/* Modal untuk Hapus */}
              <div className="modal fade" id="modalListDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">Hapus Karya</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td><img src="/assets/public/artwork/08J58TD0H11hWSY0eHiobrL9xCbdZzqFmKpCoOSg.png" alt="artwork" width="50px" /></td>
                            <td className="description">...</td>
                            <td>Digital Art</td>
                            <td>
                              <form action="profile/1" method="POST">
                                <input type="hidden" name="_method" value="delete" />
                                <input type="hidden" name="_token" value="nq0ImsgunkckeF9mhr30EeyT8pltYMjGlIZzrbv2" autoComplete="off" />
                                <button className="btn-delete" onClick="return confirm('Are you sure?')">Hapus</button>
                              </form>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Unggah Karya */}
              <div className="dropdown">
                <button className="btn-action" type="button" data-bs-toggle="dropdown">Unggah Karya</button>
                <div className="dropdown-menu upload mt-2">
                  <form onSubmit={postWork}>
                    <div className="mb-3 mt-2">
                      <label className="block mb-2 text-sm text-gray-900 dark:text-white font-bold">Upload Gambar</label>
                      <input
                          className="block p-2 font-mono w-full mb-5 text-xs text-white border border-Dark rounded-lg cursor-pointer bg-Dark"
                          id="file_input"
                          type="file"
                          name="photos"
                          onChange={handleImage}
                          accept="image/*"
                      />
                    </div>
                    <div className="mb-4">
                      <img src={image} alt="artwork" className="w-full h-auto rounded-lg transition duration-300 ease-in-out transform hover:scale-105" />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm text-gray-900 dark:text-white font-bold" htmlFor="description">Tambahkan Deskripsi</label>
                      <textarea
                        className="block w-full text-sm text-gray-900 border border-Dark rounded-lg cursor-pointer bg-white p-2"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-2">
                      <select
                        className="bg-Dark border border-gray-300 text-white text-sm rounded-lg focus:ring-Green focus:border-Green block w-full p-2.5"
                        aria-label="select-category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">Pilih Kategori</option>
                        <option value="Digital Art">Digital Art</option>
                        <option value="Poster">Poster</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Wallpaper">Wallpaper</option>
                        <option value="Kerajinan Tangan">Kerajinan Tangan</option>
                        <option value="Ilustrasi">Ilustrasi</option>
                        <option value="Portofolio">Portofolio</option>
                        <option value="Typography">Typography</option>
                        <option value="PowerPoint">PowerPoint</option>
                        <option value="Animasi">Animasi</option>
                        <option value="Tanah Liat">Tanah Liat</option>
                      </select>
                    </div>
                    <div className="bg-Green hover:bg-Dark text-white font-bold py-2 px-4 rounded-full mt-4 text-center">
                      <button type="submit" className="btn-upload">Upload</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="artwork-content">
            <div className="card-artwork">
              <div className="card-artwork-image"><h1>Karya Kamu</h1></div>
              <div className="card-artwork-description"></div>
            </div>
          </div>

          <div className="about-me">
            <div className="d-flex flex-row w-100 px-5">
              <div className="col-lg-6 px-2">
                <div className="mb-4">
                  <input type="text" placeholder="Nama" name="name" id="name" readOnly value="Admin" className="text-muted" />
                </div>
                <div className="mb-4">
                  <textarea rows="16" type="text" placeholder="Biografi atau deskripsi diri" name="bio" id="bio" readOnly className="text-muted"></textarea>
                </div>
                <div className="mt-1">
                  <textarea type="text" placeholder="Keahlian" name="keahlian" id="keahlian" readOnly className="text-muted"></textarea>
                </div>
              </div>
              <div className="col-lg-3 px-2 mt-5">
                <div className="mt-3 mb-3">
                  <input type="text" placeholder="Alamat" name="address" id="address" readOnly value="" className="text-muted" />
                </div>
                <div className="mb-5">
                  <input type="email" placeholder="Email" name="email" id="email" readOnly value="admin@gmail.com" className="text-muted" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Instagram" name="instagram" id="instagram" readOnly value="" className="text-muted" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Twitter" name="twitter" id="twitter" readOnly value="" className="text-muted" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Linkedin" name="linkedin" id="linkedin" readOnly value="" className="text-muted" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Facebook" name="facebook" id="facebook" readOnly value="" className="text-muted" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Website pribadi (opsional)" name="website" id="website" readOnly value="" className="text-muted" />
                </div>
              </div>
              <div className="col-lg-3 w-25">
                <div className="action">
                  <a href="user/edit-profile" style={{textDecoration: 'none'}} className="btn-outline">
                    <button className="btn-action" data-bs-toggle="modal" data-bs-target="#modalListDelete" fdprocessedid="zet1w">Edit Profile</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KaryaPengguna;
