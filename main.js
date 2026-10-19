// Katalog Karya — Edisi Pustaka UI. Kode latihan Tugas P09, Praktikum Pemrograman Visual (TB033109)
// Logika aplikasinya sudah benar. Yang bermasalah adalah cara pustaka UI dipasang dan dipakai.
const galeri = document.querySelector('#galeri');
const tombolTema = document.querySelector('#tombolTema');
 
function kartu(k) {
  const kolom = document.createElement('div');
  kolom.className = 'col-12 col-sm-6 col-lg-4';
  kolom.innerHTML = `
    <article class="card h-100 shadow-sm">
      <div class="card-body d-flex flex-column">
        <span class="badge badge-kategori align-self-start mb-2"></span>
        <h2 class="h5 card-title"></h2>
        <p class="card-text text-body-secondary small"></p>
        <button type="button" class="btn btn-primary btn-sm mt-auto align-self-start">Detail</button>
      </div>
    </article>`;
  kolom.querySelector('.badge').textContent = k.kategori;
  kolom.querySelector('.card-title').textContent = k.judul;
  kolom.querySelector('.card-text').textContent = `${k.pembuat} · ${k.tahun}`;
  kolom.querySelector('button').addEventListener('click', () => {
    bukaDetail({ judul: k.judul, isi: `${k.kategori}, dibuat oleh ${k.pembuat} (${k.tahun}).` });
  });
  return kolom;
}
 
galeri.replaceChildren(...KARYA.map(kartu));
 
tombolTema.addEventListener('click', () => {
  const html = document.documentElement;
  const gelap = html.getAttribute('data-theme') !== 'dark';
  html.setAttribute('data-theme', gelap ? 'dark' : 'light');
  tombolTema.textContent = gelap ? 'Mode terang' : 'Mode gelap';
});
