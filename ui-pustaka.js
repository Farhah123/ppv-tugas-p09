// ui-pustaka.js — SATU-SATUNYA berkas yang memanggil API JavaScript Bootstrap.
// Bila pustaka diganti suatu hari nanti, cukup berkas ini yang diubah; main.js tidak perlu disentuh.
 
function bukaDetail({ judul, isi }) {
  const el = document.querySelector('#modalDetail');
  el.querySelector('[data-judul]').textContent = judul;
  el.querySelector('[data-isi]').textContent = isi;
  bootstrap.Modal.getOrCreateInstance(el).show();
}
