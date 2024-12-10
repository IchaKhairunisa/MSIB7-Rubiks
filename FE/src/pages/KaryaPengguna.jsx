import React from 'react'

function KaryaPengguna() {
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
            <div className="row"></div>
            <div className="action mt-5 mb-3">
              <button type="button" className="btn-action" data-bs-toggle="modal" data-bs-target="#modalListDelete" fdprocessedid="zet1w">Hapus</button>
              {/* <!-- Modal --> */}
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

              <div className="dropdown">
                <button className="btn-action" type="button" data-bs-toggle="dropdown" fdprocessedid="y1c8oa">Unggah</button>
                <ul className="dropdown-menu upload mt-2">
                  <form action="profile" method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="_token" value="nq0ImsgunkckeF9mhr30EeyT8pltYMjGlIZzrbv2" autoComplete="off" />
                    <div className="mb-3 mt-2">
                      <label className="block mb-2 text-sm text-gray-900 dark:text-white font-bold" for="file_input">Upload file</label>
                      <input className="block p-2 font-mono w-full mb-5 text-xs text-white border border-Dark rounded-lg cursor-pointer bg-Dark" id="small_size" type="file"/>
                    </div>
                    <div className='-mt-10 mb-4'>
                      <label className="block mb-2 text-sm text-gray-900 dark:text-white font-bold" for="description">Tambahkan deskripsi</label>
                      <textarea className="block w-full text-sm text-gray-900 border border-Dark rounded-lg cursor-pointer bg-white" id="description" type="text" name="description"></textarea>
                    </div>
                    <div className="mb-2">
                      <select className=" bg-Dark border border-gray-300 text-white text-sm rounded-lg focus:ring-Green focus:border-Green block w-full p-2.5" aria-label="select-category" name="category_id">
                        <option selected="">Tambahkan kategori</option>
                        <option value="1">Digital Art</option>
                        <option value="2">Poster</option>
                        <option value="3">Web Design</option>
                        <option value="4">Wallpaper</option>
                        <option value="5">Kerajinan Tangan</option>
                        <option value="6">Ilustrasi</option>
                        <option value="7">Portofolio</option>
                        <option value="8">Typography</option>
                        <option value="9">PowerPoint</option>
                        <option value="10">Animasi</option>
                        <option value="11">Tanah Liat</option>
                      </select>
                    </div>
                    <div className="bg-Green hover:bg-Dark text-white font-bold py-2 px-4 rounded-full mt-4 text-center">
                      <button type="submit">Upload</button>
                    </div>
                  </form>
                </ul>
              </div>
            </div>

            <div className="artwork-content">
              <div className="card-artwork">
                <img src="/assets/public/artwork/08J58TD0H11hWSY0eHiobrL9xCbdZzqFmKpCoOSg.png" alt="artwork" />
              </div>
            </div>
          </div>

          <div className="about-me">
            <div className="d-flex flex-row w-100 px-5">
              <div className="col-lg-6 px-2">
                <div className="mb-4">
                  <input type="text" placeholder="Nama" name="name" id="name" readonly="" value="Admin" />
                </div>
                <div className="mb-4">
                  <textarea rows="16" type="text" placeholder="Biografi atau deskripsi diri" name="bio" id="bio" readonly=""></textarea>
                </div>
                <div className="mt-1">
                  <textarea type="text" placeholder="Keahlian" name="keahlian" id="keahlian" readonly=""></textarea>
                </div>
              </div>
              <div className="col-lg-3 px-2 mt-5">
                <div className="mt-3 mb-3">
                  <input type="text" placeholder="Alamat" name="address" id="address" readonly="" value="" />
                </div>
                <div className="mb-5">
                  <input type="email" placeholder="Email" name="email" id="email" readonly="" value="admin@gmail.com" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Instagram" name="instagram" id="instagram" readonly="" value="" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Twitter" name="twitter" id="twitter" readonly="" value="" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Linkedin" name="linkedin" id="linkedin" readonly="" value="" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Facebook" name="facebook" id="facebook" readonly="" value="" />
                </div>
                <div className="mb-2">
                  <input type="text" placeholder="Website pribadi (opsional)" name="website" id="website" readonly="" value="" />
                </div>
              </div>
              <div className="col-lg-3 w-25">
                <div className="action">
                  <a href="user/edit-profile" style={{textDecoration: 'none'}} className="btn-action">Edit profil </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default KaryaPengguna