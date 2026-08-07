/* ==========================================================================
   Gubuk Marhaen — script.js
   Data modul, progres belajar (localStorage), dan logika kuis
   Berdasarkan ringkasan materi Pengantar Marhaenisme, Marhaenisme, & MDH
   ========================================================================== */

const DATA_MODUL = [
  // ==================== MODUL 1: PENGANTAR MARHAENISME ====================
  {
    id: 1,
    judul: "Pengantar Marhaenisme",
    tag: "Sejarah & Latar Belakang",
    deskripsiSingkat: "Sejarah lahirnya Marhaenisme, definisi kaum Marhaen, dan 9 butir hasil Kongres Partindo.",
    subbab: [
      {
        id: "definisi-asal-usul",
        judul: "Definisi dan Asal-Usul Marhaenisme",
        isi: "Marhaenisme adalah ideologi perjuangan yang dikembangkan oleh Ir. Soekarno sebagai bentuk perlawanan terhadap penindasan manusia dan bangsa. Ini adalah adaptasi dari Marxisme yang diterapkan sesuai dengan kondisi dan kultur Indonesia, bukan sekadar jiplakan mentah-mentah dari teori Barat.\n\nMarhaenisme lahir dari pertemuan Soekarno dengan seorang petani muda bernama Marhaen di sekitar Bandung pada tahun 1926-1927. Dari dialog dengan petani yang memiliki tanah dan cangkul sendiri namun tetap hidup miskin, Soekarno mendapatkan pencerahan bahwa rakyat Indonesia bukanlah proletar dalam konsepsi Marx (buruh industri tanpa alat produksi), melainkan kaum yang memiliki alat produksi kecil namun tetap melarat karena sistem kolonial."
      },
      {
        id: "siapa-marhaen",
        judul: "Siapa Kaum Marhaen?",
        isi: "Marhaen bukan hanya nama seorang petani. Marhaen adalah personifikasi atau simbol dari seluruh rakyat kecil Indonesia yang tertindas.\n\nKarakteristik Kaum Marhaen:\n1. Memiliki alat produksi (tanah, cangkul, perahu) namun dalam skala sangat kecil\n2. Bekerja untuk diri sendiri dan keluarga, bukan untuk orang lain\n3. Tetap hidup melarat dan miskin meskipun memiliki alat produksi\n4. Penyebab kemiskinan bukan karena kemalasan, melainkan karena sistem ekonomi kolonial dan imperialisme\n\nPerbedaan dengan Proletar: Proletar tidak memiliki alat produksi sama sekali dan bekerja di pabrik, sedangkan Marhaen memiliki alat produksi kecil namun tetap tertindas. Soekarno menegaskan bahwa proletar termasuk ke dalam kaum Marhaen."
      },
      {
        id: "sembilan-butir",
        judul: "9 Butir Kongres Partindo (1933)",
        isi: "Konferensi Partindo di Mataram menghasilkan 9 tesis pokok tentang Marhaenisme yang kemudian disetujui oleh Soekarno:\n\n1. Marhaenisme = Sosio-Nasionalisme dan Sosio-Demokrasi\n2. Marhaen = kaum proletar Indonesia + kaum tani melarat + kaum melarat lainnya\n3. Partindo memakai kata 'Marhaen' bukan 'proletar' karena proletar sudah termaktub dalam Marhaen\n4. Partindo yakin kaum melarat Indonesia lainnya harus menjadi elemen perjuangan\n5. Dalam perjuangan Marhaen, kaum proletar mengambil bagian yang besar sekali\n6. Marhaenisme menghendaki susunan masyarakat dan negara yang menyelamatkan Marhaen\n7. Marhaenisme adalah cara perjuangan revolusioner\n8. Marhaenisme menghendaki hilangnya kapitalisme dan imperialisme\n9. Marhaenis = setiap orang Indonesia yang menjalankan Marhaenisme"
      }
    ],
    kuis: [
      {
        soal: "Istilah 'Marhaen' berasal dari...",
        opsi: [
          "Nama seorang petani kecil di Bandung Selatan yang ditemui Bung Karno",
          "Nama sebuah organisasi buruh pada masa kolonial",
          "Singkatan dari Marx, Hegel, dan Engels",
          "Nama tokoh pergerakan asal Jawa Tengah"
        ],
        benar: 0,
        penjelasan: "Benar — nama 'Marhaen' diambil dari petani kecil yang ditemui Bung Karno di sekitar Bandung pada tahun 1926-1927. Meskipun ada anggapan bahwa Marhaen adalah singkatan dari Marx-Hegel-Engels, versi resmi yang diakui adalah kisah pertemuan dengan petani tersebut."
      },
      {
        soal: "Marhaen digambarkan sebagai sosok yang...",
        opsi: [
          "Tidak memiliki alat produksi sama sekali",
          "Memiliki alat produksi sendiri namun tetap miskin",
          "Bekerja sebagai buruh pabrik besar",
          "Menjadi pemilik tanah yang luas dan kaya raya"
        ],
        benar: 1,
        penjelasan: "Benar — Marhaen adalah simbol rakyat kecil yang memiliki alat produksi sendiri (seperti cangkul dan tanah kecil) tetapi tetap hidup melarat karena tertindas oleh sistem kolonial, feodal, dan kapitalisme."
      },
      {
        soal: "Menurut 9 Butir Kongres Partindo, Marhaenisme adalah...",
        opsi: [
          "Hanya nasionalisme sempit dan chauvinistik",
          "Sosio-Nasionalisme dan Sosio-Demokrasi",
          "Sistem ekonomi kapitalis murni",
          "Ajaran yang menolak persatuan bangsa"
        ],
        benar: 1,
        penjelasan: "Benar — Butir pertama Kongres Partindo menyatakan bahwa Marhaenisme adalah Sosio-Nasionalisme (nasionalisme yang berperikemanusiaan) dan Sosio-Demokrasi (demokrasi yang menjangkau keadilan ekonomi)."
      },
      {
        soal: "Perbedaan utama Marhaen dengan Proletar adalah...",
        opsi: [
          "Marhaen tidak memiliki alat produksi, Proletar memilikinya",
          "Marhaen memiliki alat produksi kecil, Proletar tidak memilikinya",
          "Marhaen adalah buruh pabrik, Proletar adalah petani",
          "Tidak ada perbedaan, keduanya sama"
        ],
        benar: 1,
        penjelasan: "Benar — Marhaen memiliki alat produksi kecil namun tetap miskin, sedangkan Proletar (dalam konsep Marx) adalah buruh industri yang tidak memiliki alat produksi sama sekali. Soekarno menegaskan bahwa Proletar termasuk ke dalam kaum Marhaen."
      }
    ]
  },

  // ==================== MODUL 2: MARHAENISME ====================
  {
    id: 2,
    judul: "Marhaenisme",
    tag: "Konsep Dasar & Etika",
    deskripsiSingkat: "Tiga asas utama, 7 asas perjuangan, dan etika politik Marhaenis.",
    subbab: [
      {
        id: "tiga-asas",
        judul: "Tiga Asas Marhaenisme",
        isi: "Marhaenisme berpijak pada tiga asas utama:\n\n1. SOSIO-NASIONALISME: Nasionalisme yang berperikemanusiaan, tidak sempit atau chauvinistik. Nasionalisme Indonesia sejiwa dengan social conscience of man (budi nurani sosial manusia). Internasionalisme adalah 'taman sari' dari nasionalisme. Nasionalisme Indonesia adalah bagian dari perjuangan umat manusia di dunia melawan penjajahan.\n\n2. SOSIO-DEMOKRASI: Demokrasi ala Indonesia yang berakar pada musyawarah mufakat, bukan demokrasi liberal yang bertumpu pada kekuatan mayoritas. Demokrasi ini tidak hanya politik, tetapi juga sosial dan ekonomi (sejalan dengan Trisakti: Berdaulat di Politik, Berdikari di Ekonomi, Berkepribadian dalam Budaya).\n\n3. KETUHANAN YANG MAHA ESA: Marhaenisme percaya pada eksistensi Tuhan dan menjunjung tinggi kebebasan berkeyakinan. Ada perbedaan antara 'berketuhanan' (kebebasan berkeyakinan) dan 'beragama' (menganut agama tertentu)."
      },
      {
        id: "tujuh-asas-perjuangan",
        judul: "7 Asas Perjuangan Marhaenisme",
        isi: "Asas perjuangan adalah jembatan antara cita-cita ideal (azas) dengan realitas yang dihadapi:\n\n1. RADIKAL-REVOLUSIONER: Menghendaki perubahan sosial dan politik secara mendasar dan menyeluruh ('menjebol lalu membangun dari awal').\n\n2. MACHTSVORMING: Pembentukan dan penyusunan kekuatan organisasi dan massa.\n\n3. MACHTSAANWENDING: Penggunaan kekuatan yang telah terbentuk untuk mencapai tujuan.\n\n4. MASSA-AKSI: Gerakan kolektif yang melibatkan massa rakyat untuk aksi nyata.\n\n5. NON-KOOPERATIF: Tidak mau bekerja sama dengan pemerintah kolonial. Kemerdekaan harus diusahakan sendiri.\n\n6. SELF-HELP: Belajar menolong diri sendiri dalam mengatasi masalah.\n\n7. SELF-RELIANCE: Mengembangkan kekuatan internal, mandiri, tidak bergantung pada pihak lain.\n\nCatatan: Ketujuh asas ini bersifat dinamis dan mengikuti perkembangan zaman."
      },
      {
        id: "marhaenis-dan-etika",
        judul: "Marhaenis dan Etika Politik",
        isi: "MARHAENIS adalah setiap orang Indonesia yang menjalankan dan memperjuangkan Marhaenisme dalam kehidupannya.\n\nETIKA POLITIK MARHAENIS menuntut keberpihakan yang tegas kepada golongan Marhaen dalam setiap sikap dan kebijakan. Seorang kader diharapkan:\n- Menempatkan kepentingan rakyat kecil di atas kepentingan pribadi atau golongan\n- Menolak segala bentuk penindasan, baik dari luar maupun dari dalam masyarakat\n- Berpihak pada kaum melarat, kaum tani, dan kaum tertindas (seperti kutipan Bung Karno: 'Barang siapa yang berpihak pada kaum melarat itu, kaum marhaen itu, kaum tani itu, mereka adalah marhaenis')\n\nDalam sejarahnya, Marhaenisme mencapai puncak popularitas ketika Soekarno berkuasa, namun setelah Orde Baru, kata ini perlahan menghilang. Di era Reformasi, muncul kembali partai-partai dan organisasi yang mengklaim diri Marhaenis."
      }
    ],
    kuis: [
      {
        soal: "Tiga asas utama Marhaenisme adalah...",
        opsi: [
          "Nasionalisme, Komunisme, dan Kapitalisme",
          "Sosio-Nasionalisme, Sosio-Demokrasi, dan Ketuhanan Yang Maha Esa",
          "Feodalisme, Liberalisme, dan Sosialisme",
          "Monarki, Teokrasi, dan Demokrasi"
        ],
        benar: 1,
        penjelasan: "Benar — Tiga asas Marhaenisme adalah Sosio-Nasionalisme (nasionalisme yang berperikemanusiaan), Sosio-Demokrasi (demokrasi yang menjangkau keadilan ekonomi), dan Ketuhanan Yang Maha Esa (kebebasan berkeyakinan)."
      },
      {
        soal: "Sosio-Demokrasi dalam Marhaenisme menekankan bahwa demokrasi harus...",
        opsi: [
          "Berhenti pada hak pilih di bilik suara",
          "Menjangkau keadilan ekonomi, bukan sekadar politik",
          "Diserahkan sepenuhnya pada mekanisme pasar",
          "Dijalankan tanpa keterlibatan rakyat"
        ],
        benar: 1,
        penjelasan: "Benar — Sosio-Demokrasi menuntut demokrasi yang tidak hanya politik tetapi juga sosial dan ekonomi, sejalan dengan Trisakti Bung Karno: Berdaulat di Politik, Berdikari di Ekonomi, Berkepribadian dalam Budaya."
      },
      {
        soal: "Asas perjuangan 'Non-Kooperatif' berarti...",
        opsi: [
          "Bekerja sama dengan pemerintah kolonial",
          "Tidak mau bekerja sama dengan pemerintah kolonial",
          "Menerima bantuan dari pihak asing",
          "Menjalin kerjasama dengan kapitalis"
        ],
        benar: 1,
        penjelasan: "Benar — Non-Kooperatif adalah strategi menolak kerja sama dengan pemerintah kolonial. Kemerdekaan harus diusahakan sendiri oleh bangsa Indonesia, tanpa campur tangan pihak lain."
      },
      {
        soal: "Seorang Marhaenis adalah...",
        opsi: [
          "Orang yang hanya membaca tulisan Soekarno",
          "Setiap orang Indonesia yang menjalankan Marhaenisme",
          "Anggota partai politik tertentu saja",
          "Orang yang kaya dan berkuasa"
        ],
        benar: 1,
        penjelasan: "Benar — Marhaenis adalah setiap orang Indonesia yang menjalankan dan memperjuangkan Marhaenisme, sebagaimana ditegaskan dalam 9 Butir Kongres Partindo."
      }
    ]
  },

  // ==================== MODUL 3: MDH ====================
  {
    id: 3,
    judul: "Materialisme-Dialektika-Historis",
    tag: "Metode Analisis Realitas",
    deskripsiSingkat: "Tiga dimensi analisis realitas: material, dialektika, dan historis.",
    subbab: [
      {
        id: "dimensi-material",
        judul: "Dimensi Material",
        isi: "MATERIALISME adalah pandangan yang menyatakan bahwa kenyataan yang nyata adalah materi itu sendiri, bukan sekadar pantulan inderawi atau kesadaran manusia. Materi bisa ada tanpa ada pengetahuan manusia tentangnya.\n\nKonsep BASIS dan SUPRASRUKTUR:\n- BASIS: Kondisi material/ekonomi masyarakat adalah prakondisi yang memungkinkan adanya suprastruktur.\n- SUPRASRUKTUR: Sistem politik, hukum, budaya, agama, dan kesadaran sosial yang muncul di atas basis.\n\nRumusan Marx: 'Bukan kesadaran manusia yang menentukan keadaan mereka, tetapi sebaliknya, keadaan sosial merekalah yang menentukan kesadaran mereka.'\n\nContoh: Kemiskinan petani (ekonomi/basis) menyebabkan kebijakan impor pangan (politik/suprastruktur), dan sebaliknya."
      },
      {
        id: "dimensi-dialektika",
        judul: "Dimensi Dialektika",
        isi: "DIALEKTIKA adalah cara berpikir tiga tahap: Tesis → Antitesis → Sintesis. Sintesis akan menjadi tesis baru yang akan menemui antitesis baru lagi, menciptakan sintesis baru. Proses ini terus berulang.\n\n3 HUKUM DIALEKTIKA:\n\n1. HUKUM KONTRADIKSI: Segala sesuatu selalu mengandung sisi-sisi yang berkontradiksi. Kontradiksi adalah penggerak perubahan.\n\n2. PERUBAHAN KUANTITATIF KE KUALITATIF: Perubahan terjadi secara bertahap (evolusioner) melalui perubahan kuantitatif. Pada titik tertentu (titik nodal), terjadi lompatan kualitatif yang mengubah sifat dasar sesuatu.\n\n3. NEGASI DARI NEGASI: Proses meniadakan yang meniadakan. Sesuatu berubah dari bentuk sederhana → lebih kompleks → lebih maju.\n\nDialektika vs Metafisika: Dialektika melihat segala sesuatu saling terhubung dan dinamis, sedangkan metafisika melihat segala sesuatu terisolasi dan statis."
      },
      {
        id: "dimensi-historis",
        judul: "Dimensi Historis dan Imperialisme",
        isi: "MATERIALISME HISTORIS adalah perluasan prinsip-prinsip materialisme dialektik pada analisis kehidupan masyarakat dan sejarah.\n\nINTI: 'Sejarah dari semua masyarakat yang ada sampai sekarang adalah sejarah perjuangan kelas.' (Manifesto Komunis)\n\nPERIODESASI SEJARAH BERDASARKAN CARA PRODUKSI:\n1. Komune Primitif → 2. Perbudakan → 3. Feodal → 4. Kapitalis → 5. Sosialis\n\nIMPERIALISME sebagai Perkembangan Tertinggi Kapitalisme:\n- Imperialisme adalah konsekuensi tak terhindarkan akibat 'ruang hidup' kapitalisme di negara maju sudah terlalu sempit.\n- Kolonialisme = Imperialisme: bukan sekedar tentara kolonial menyerbu, tetapi sistem dan investasi kapitalisme yang berpindah ke negeri jajahan.\n- Imperialisme Belanda di Indonesia: kapitalisme yang mencari bahan baku dengan harga murah, melahirkan kaum Marhaen (petani kecil yang tertindas) bukan proletar industri."
      }
    ],
    kuis: [
      {
        soal: "Dimensi material dalam MDH menegaskan bahwa...",
        opsi: [
          "Kesadaran manusia membentuk kondisi ekonomi",
          "Kondisi kebendaan/ekonomi menjadi dasar kesadaran dan struktur sosial",
          "Budaya sama sekali tidak berkaitan dengan ekonomi",
          "Sejarah tidak memiliki dasar material"
        ],
        benar: 1,
        penjelasan: "Benar — Dimensi material (materialisme) menyatakan bahwa kondisi ekonomi/material adalah basis yang membentuk kesadaran, budaya, dan struktur sosial (suprastruktur). Ini adalah inti dari ajaran Marx yang diadopsi oleh Marhaenisme."
      },
      {
        soal: "Dalam dialektika, sintesis muncul sebagai hasil dari...",
        opsi: [
          "Pengulangan sejarah masa lalu secara membosankan",
          "Pertentangan antara tesis dan antitesis",
          "Keputusan individu semata tanpa proses",
          "Struktur ekonomi yang tetap dan tidak berubah"
        ],
        benar: 1,
        penjelasan: "Benar — Sintesis lahir dari pertentangan tesis dan antitesis, dan akan menjadi tesis baru yang akan menemui antitesis baru lagi. Proses ini terus berulang tanpa henti."
      },
      {
        soal: "Hukum Negasi dari Negasi dalam dialektika berarti...",
        opsi: [
          "Segala sesuatu akan kembali ke keadaan semula",
          "Proses meniadakan yang meniadakan, menuju bentuk yang lebih maju",
          "Sejarah hanya berputar di tempat",
          "Tidak ada perubahan yang berarti dalam sejarah"
        ],
        benar: 1,
        penjelasan: "Benar — Negasi dari Negasi adalah proses meniadakan yang meniadakan, menghasilkan bentuk baru yang lebih maju dan kompleks. Contohnya: biji → tumbuhan → biji baru yang berlipat ganda."
      },
      {
        soal: "Materialisme Historis memandang sejarah sebagai...",
        opsi: [
          "Kumpulan cerita tokoh besar tanpa kaitannya dengan rakyat",
          "Sejarah perjuangan kelas antara penindas dan tertindas",
          "Takdir yang sudah ditentukan dan tidak bisa diubah",
          "Peristiwa yang tidak memiliki pola atau hukum"
        ],
        benar: 1,
        penjelasan: "Benar — Materialisme Historis memandang sejarah sebagai sejarah perjuangan kelas. Perubahan dari satu zaman ke zaman lain terjadi karena adanya konflik kepentingan ekonomi antara kelas yang menguasai alat produksi dan kelas yang dikuasai."
      },
      {
        soal: "Imperialisme, menurut MDH, adalah...",
        opsi: [
          "Hanya nafsu negara maju untuk menjajah",
          "Konsekuensi tak terhindarkan dari kapitalisme yang mencari ruang hidup baru",
          "Fenomena yang tidak terkait dengan ekonomi",
          "Sistem yang adil dan menguntungkan semua pihak"
        ],
        benar: 1,
        penjelasan: "Benar — Imperialisme adalah konsekuensi tak terhindarkan dari kapitalisme yang membutuhkan ruang hidup baru untuk mempertahankan eksistensinya. Kolonialisme adalah sistem dan investasi kapitalisme yang berpindah ke negeri jajahan."
      }
    ]
  }
];

/* ---------- Progres belajar (localStorage) ---------- */

const KUNCI_PROGRES = "gubukMarhaenProgres";

function ambilProgres() {
  try {
    return JSON.parse(localStorage.getItem(KUNCI_PROGRES)) || {};
  } catch (e) {
    return {};
  }
}

function simpanProgres(progres) {
  localStorage.setItem(KUNCI_PROGRES, JSON.stringify(progres));
}

function tandaiSubbabSelesai(modulId, subbabId) {
  const progres = ambilProgres();
  if (!progres[modulId]) progres[modulId] = { subbabSelesai: [] };
  if (!progres[modulId].subbabSelesai.includes(subbabId)) {
    progres[modulId].subbabSelesai.push(subbabId);
  }
  simpanProgres(progres);
}

function statusModul(modulId) {
  const modul = DATA_MODUL.find((m) => m.id === modulId);
  const progres = ambilProgres();
  const selesai = (progres[modulId] && progres[modulId].subbabSelesai) || [];
  if (selesai.length === 0) return "belum";
  if (selesai.length >= modul.subbab.length) return "selesai";
  return "berjalan";
}

/* ---------- Nav tab aktif ---------- */

function tandaiTabAktif() {
  const halaman = document.body.dataset.halaman;
  document.querySelectorAll("nav.tab-nav a").forEach((a) => {
    if (a.dataset.tab === halaman) a.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", tandaiTabAktif);

/* ---------- Halaman: Daftar Modul ---------- */

function renderDaftarModul() {
  const kontainer = document.getElementById("daftar-modul-list");
  if (!kontainer) return;

  const label = { selesai: "Selesai", berjalan: "Sedang berjalan", belum: "Belum dimulai" };
  const kelas = { selesai: "status-selesai", berjalan: "status-berjalan", belum: "status-belum" };

  kontainer.innerHTML = DATA_MODUL.map((m) => {
    const status = statusModul(m.id);
    return `
      <a class="module-card" href="belajar.html?modul=${m.id}">
        <div>
          <div class="module-number">Modul 0${m.id}</div>
          <h3>${m.judul}</h3>
          <div class="module-tag">${m.tag}</div>
          <p class="module-desc">${m.deskripsiSingkat}</p>
        </div>
        <span class="status-badge ${kelas[status]}">${label[status]}</span>
      </a>
    `;
  }).join("");
}

/* ---------- Halaman: Belajar ---------- */

function renderHalamanBelajar() {
  const sidebarEl = document.getElementById("sidebar-subbab");
  const kontenEl = document.getElementById("konten-belajar");
  if (!sidebarEl || !kontenEl) return;

  const params = new URLSearchParams(window.location.search);
  const modulId = parseInt(params.get("modul") || "1", 10);
  const modul = DATA_MODUL.find((m) => m.id === modulId) || DATA_MODUL[0];

  let subIndex = parseInt(params.get("sub") || "0", 10);
  if (subIndex < 0) subIndex = 0;
  if (subIndex >= modul.subbab.length) subIndex = modul.subbab.length - 1;

  const progres = ambilProgres();
  const selesaiList = (progres[modul.id] && progres[modul.id].subbabSelesai) || [];

  document.getElementById("sidebar-modul-label").textContent = `Modul 0${modul.id} · ${modul.judul}`;

  sidebarEl.innerHTML = modul.subbab.map((s, i) => {
    const aktif = i === subIndex ? "aktif" : "";
    const selesaiKelas = selesaiList.includes(s.id) ? "selesai" : "";
    return `<li><a href="belajar.html?modul=${modul.id}&sub=${i}" class="${aktif} ${selesaiKelas}">${s.judul}</a></li>`;
  }).join("") + `<li><a href="kuis.html?modul=${modul.id}">📝 Kuis modul ${modul.id}</a></li>`;

  const sub = modul.subbab[subIndex];
  // Mengubah newline menjadi <br> untuk tampilan
  const isiDenganBr = sub.isi.replace(/\n/g, '<br>');

  kontenEl.innerHTML = `
    <div class="subbab-label">Sub-bab aktif · ${subIndex + 1} dari ${modul.subbab.length}</div>
    <h2>${sub.judul}</h2>
    <p>${isiDenganBr}</p>
    <div class="ilustrasi-box">📖 ${sub.judul}</div>
    <div class="nav-buttons">
      <button class="btn-kembali" id="btn-kembali" ${subIndex === 0 ? "disabled" : ""}>&larr; Kembali</button>
      <button class="cta-button" id="btn-lanjut">${subIndex === modul.subbab.length - 1 ? "Lanjut ke kuis" : "Lanjut"} &rarr;</button>
    </div>
  `;

  tandaiSubbabSelesai(modul.id, sub.id);

  document.getElementById("btn-kembali").addEventListener("click", () => {
    if (subIndex > 0) {
      window.location.href = `belajar.html?modul=${modul.id}&sub=${subIndex - 1}`;
    }
  });

  document.getElementById("btn-lanjut").addEventListener("click", () => {
    if (subIndex < modul.subbab.length - 1) {
      window.location.href = `belajar.html?modul=${modul.id}&sub=${subIndex + 1}`;
    } else {
      window.location.href = `kuis.html?modul=${modul.id}`;
    }
  });
}

/* ---------- Halaman: Kuis ---------- */

const KUNCI_SESI_KUIS = "gubukMarhaenSesiKuis";

function renderHalamanKuis() {
  const wrap = document.getElementById("kuis-wrap");
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const modulId = parseInt(params.get("modul") || "1", 10);
  const modul = DATA_MODUL.find((m) => m.id === modulId) || DATA_MODUL[0];

  let sesi = JSON.parse(sessionStorage.getItem(KUNCI_SESI_KUIS) || "null");
  if (!sesi || sesi.modulId !== modulId) {
    sesi = { modulId, indeks: 0, benar: 0, dijawab: false };
    sessionStorage.setItem(KUNCI_SESI_KUIS, JSON.stringify(sesi));
  }

  function render() {
    const soal = modul.kuis[sesi.indeks];
    const huruf = ["A", "B", "C", "D"];

    wrap.innerHTML = `
      <div class="quiz-progress">Kuis modul ${modul.id} · soal ${sesi.indeks + 1} dari ${modul.kuis.length}</div>
      <div class="quiz-question">${soal.soal}</div>
      <div class="quiz-options" id="opsi-list">
        ${soal.opsi.map((opsi, i) => `
          <button class="quiz-option" data-index="${i}">
            <span class="huruf">${huruf[i]}</span> ${opsi}
          </button>
        `).join("")}
      </div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <div class="quiz-next"><button class="cta-button" id="btn-lanjut-soal" style="display:none;">
        ${sesi.indeks === modul.kuis.length - 1 ? "Lihat hasil" : "Soal berikutnya"} &rarr;
      </button></div>
    `;

    document.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => jawab(parseInt(btn.dataset.index, 10)));
    });

    document.getElementById("btn-lanjut-soal").addEventListener("click", lanjutSoal);
  }

  function jawab(indexPilihan) {
    if (sesi.dijawab) return;
    const soal = modul.kuis[sesi.indeks];
    const benar = indexPilihan === soal.benar;
    sesi.dijawab = true;
    if (benar) sesi.benar += 1;
    sessionStorage.setItem(KUNCI_SESI_KUIS, JSON.stringify(sesi));

    document.querySelectorAll(".quiz-option").forEach((btn, i) => {
      btn.disabled = true;
      if (i === soal.benar) btn.classList.add("jawaban-benar");
      if (i === indexPilihan) btn.classList.add("dipilih", benar ? "benar" : "salah");
    });

    const feedback = document.getElementById("quiz-feedback");
    feedback.textContent = (benar ? "✓ " : "✗ ") + soal.penjelasan;
    feedback.classList.add("tampil", benar ? "benar" : "salah");

    document.getElementById("btn-lanjut-soal").style.display = "inline-block";
  }

  function lanjutSoal() {
    if (sesi.indeks < modul.kuis.length - 1) {
      sesi.indeks += 1;
      sesi.dijawab = false;
      sessionStorage.setItem(KUNCI_SESI_KUIS, JSON.stringify(sesi));
      render();
    } else {
      const skor = Math.round((sesi.benar / modul.kuis.length) * 100);
      sessionStorage.removeItem(KUNCI_SESI_KUIS);
      window.location.href = `hasil-kuis.html?modul=${modul.id}&skor=${skor}`;
    }
  }

  render();
}

/* ---------- Halaman: Hasil Kuis ---------- */

function renderHasilKuis() {
  const wrap = document.getElementById("hasil-wrap");
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const modulId = parseInt(params.get("modul") || "1", 10);
  const skor = parseInt(params.get("skor") || "0", 10);
  const modul = DATA_MODUL.find((m) => m.id === modulId) || DATA_MODUL[0];
  const modulBerikut = DATA_MODUL.find((m) => m.id === modulId + 1);

  let pesan;
  if (skor >= 80) pesan = `Kerja bagus, kader! Kamu sudah memahami dasar dari modul "${modul.judul}". Teruslah belajar dan praxis-kan ilmunya!`;
  else if (skor >= 50) pesan = `Pemahamanmu sudah cukup baik. Tak ada salahnya membaca ulang beberapa sub-bab di modul "${modul.judul}" untuk memperdalam pemahaman.`;
  else pesan = `Modul "${modul.judul}" masih perlu didalami lagi. Yuk ulangi materinya sebelum mencoba kuis lagi. Ingat: "Tanpa teori yang revolusioner tidak akan ada praktik yang revolusioner!"`;

  wrap.innerHTML = `
    <div class="skor-lingkaran">
      <div class="angka">${skor}</div>
      <div class="total">/ 100</div>
    </div>
    <h2>${skor >= 50 ? "Kerja bagus, kader!" : "Terus semangat belajar!"}</h2>
    <p>${pesan}</p>
    <div class="hasil-buttons">
      <a href="kuis.html?modul=${modulId}" class="cta-secondary" id="btn-ulangi">🔄 Ulangi kuis</a>
      ${modulBerikut
        ? `<a href="belajar.html?modul=${modulBerikut.id}&sub=0" class="cta-button">Lanjut ke modul berikutnya</a>`
        : `<a href="daftar-modul.html" class="cta-button">Kembali ke daftar modul</a>`}
    </div>
  `;
}

// Inisialisasi semua fungsi saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  renderDaftarModul();
  renderHalamanBelajar();
  renderHalamanKuis();
  renderHasilKuis();
});