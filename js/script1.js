/* ==========================================================================
   Gubuk Marhaen — script.js
   Data modul, progres belajar (localStorage), dan logika kuis
   ========================================================================== */

const DATA_MODUL = [
  {
    id: 1,
    judul: "Pengantar Marhaenisme",
    tag: "Sejarah & Latar Belakang",
    deskripsiSingkat: "Sejarah lahirnya Marhaenisme dan latar belakang sosialnya.",
    subbab: [
      {
        id: "asal-usul",
        judul: "Asal-usul istilah Marhaen",
        isi: "Istilah 'Marhaen' berasal dari nama seorang petani kecil di Bandung Selatan yang ditemui Bung Karno sekitar tahun 1920-an. Petani itu memiliki tanah, cangkul, dan alat produksi sendiri, namun hasilnya hanya cukup untuk hidup sehari-hari. Sosok inilah yang kemudian dijadikan simbol rakyat kecil Indonesia: pekerja mandiri yang memiliki alat produksi sendiri tetapi tetap hidup dalam kemiskinan struktural."
      },
      {
        id: "konteks-sosial",
        judul: "Konteks sosial kelahirannya",
        isi: "Marhaenisme lahir dari pengamatan langsung terhadap kondisi petani, nelayan, dan pekerja kecil di Hindia Belanda yang tertindas oleh sistem kolonial sekaligus struktur ekonomi feodal. Gagasan ini muncul sebagai upaya merumuskan jalan perjuangan yang sesuai dengan kondisi riil rakyat Indonesia, bukan sekadar mengadopsi teori dari luar tanpa penyesuaian konteks."
      },
      {
        id: "tujuan-perumusan",
        judul: "Tujuan perumusan ajaran",
        isi: "Marhaenisme dirumuskan sebagai alat perjuangan untuk membebaskan Marhaen — representasi rakyat kecil — dari tiga bentuk penindasan sekaligus: penjajahan asing, feodalisme, dan kapitalisme yang eksploitatif. Ajaran ini menjadi dasar bagi gerakan kebangsaan yang berpihak pada golongan yang secara ekonomi lemah."
      }
    ],
    kuis: [
      {
        soal: "Istilah 'Marhaen' berasal dari...",
        opsi: [
          "Nama seorang petani kecil di Bandung Selatan",
          "Nama sebuah organisasi buruh",
          "Singkatan dari sebuah gerakan politik",
          "Nama tokoh pergerakan asal Jawa Tengah"
        ],
        benar: 0,
        penjelasan: "Benar — nama itu diambil dari petani kecil yang ditemui Bung Karno di Bandung Selatan."
      },
      {
        soal: "Marhaen digambarkan sebagai sosok yang...",
        opsi: [
          "Tidak memiliki alat produksi sama sekali",
          "Memiliki alat produksi sendiri namun tetap miskin",
          "Bekerja sebagai buruh pabrik besar",
          "Menjadi pemilik tanah yang luas"
        ],
        benar: 1,
        penjelasan: "Benar — Marhaen memiliki alat produksi sendiri, tetapi hasilnya tak cukup mengangkatnya dari kemiskinan."
      },
      {
        soal: "Marhaenisme dirumuskan sebagai alat perjuangan melawan...",
        opsi: [
          "Hanya penjajahan asing",
          "Hanya kapitalisme",
          "Penjajahan, feodalisme, dan kapitalisme sekaligus",
          "Hanya feodalisme lokal"
        ],
        benar: 2,
        penjelasan: "Benar — Marhaenisme ditujukan melawan tiga bentuk penindasan sekaligus."
      }
    ]
  },
  {
    id: 2,
    judul: "Marhaenisme",
    tag: "Konsep Dasar & Etika",
    deskripsiSingkat: "The guiding theory dan etika politik Marhaenis.",
    subbab: [
      {
        id: "asas-perjuangan",
        judul: "Asas dan cita perjuangan",
        isi: "Marhaenisme berpijak pada tiga cita utama: kedaulatan rakyat secara politik, kemandirian secara ekonomi, dan kepribadian bangsa secara kebudayaan. Ketiganya dipandang tidak dapat dipisahkan — kemerdekaan politik tanpa keadilan ekonomi dianggap belum menyelesaikan penindasan yang dialami rakyat kecil."
      },
      {
        id: "etika-politik",
        judul: "Etika politik Marhaenis",
        isi: "Sebagai etika politik, Marhaenisme menuntut keberpihakan yang tegas kepada golongan Marhaen dalam setiap sikap dan kebijakan. Seorang kader diharapkan menempatkan kepentingan rakyat kecil di atas kepentingan pribadi atau golongan, serta menolak segala bentuk penindasan, baik yang datang dari luar maupun dari dalam masyarakat sendiri."
      },
      {
        id: "sosio-nasionalisme",
        judul: "Sosio-nasionalisme dan sosio-demokrasi",
        isi: "Marhaenisme mengintegrasikan gagasan sosio-nasionalisme (nasionalisme yang berpihak pada rakyat kecil, bukan nasionalisme borjuis) dan sosio-demokrasi (demokrasi yang tidak berhenti di bilik suara, tetapi menjangkau keadilan ekonomi). Keduanya menjadi kerangka untuk memastikan kemerdekaan bermakna nyata bagi Marhaen."
      }
    ],
    kuis: [
      {
        soal: "Tiga cita utama Marhaenisme meliputi kedaulatan politik, kemandirian ekonomi, dan...",
        opsi: [
          "Kepribadian bangsa secara kebudayaan",
          "Ekspansi wilayah",
          "Dominasi partai tunggal",
          "Sentralisasi kekuasaan"
        ],
        benar: 0,
        penjelasan: "Benar — ketiga cita itu meliputi politik, ekonomi, dan kebudayaan."
      },
      {
        soal: "Etika politik Marhaenis menuntut kader untuk...",
        opsi: [
          "Mengutamakan kepentingan pribadi",
          "Netral terhadap segala bentuk penindasan",
          "Berpihak tegas pada golongan Marhaen",
          "Mengikuti kepentingan golongan elite"
        ],
        benar: 2,
        penjelasan: "Benar — keberpihakan tegas pada Marhaen adalah inti etika politiknya."
      },
      {
        soal: "Sosio-demokrasi dalam Marhaenisme menekankan bahwa demokrasi harus...",
        opsi: [
          "Berhenti pada hak pilih di bilik suara",
          "Menjangkau keadilan ekonomi, bukan sekadar politik",
          "Diserahkan sepenuhnya pada mekanisme pasar",
          "Dijalankan tanpa keterlibatan rakyat"
        ],
        benar: 1,
        penjelasan: "Benar — sosio-demokrasi menuntut keadilan ekonomi, tidak berhenti di hak politik semata."
      }
    ]
  },
  {
    id: 3,
    judul: "Materialisme-Dialektika-Historis",
    tag: "Metode Analisis Realitas",
    deskripsiSingkat: "Dimensi material, dialektika, dan historis.",
    subbab: [
      {
        id: "dimensi-material",
        judul: "Dimensi material",
        isi: "Dimensi material menegaskan bahwa kondisi kebendaan dan ekonomi suatu masyarakat menjadi dasar yang membentuk kesadaran, budaya, dan struktur sosialnya — bukan sebaliknya. Untuk memahami suatu persoalan sosial, seorang kader diajak melihat dahulu kondisi material yang melatarinya: siapa yang menguasai alat produksi, dan bagaimana kekayaan didistribusikan."
      },
      {
        id: "dimensi-dialektika",
        judul: "Dimensi dialektika",
        isi: "Dialektika membaca realitas lewat pertentangan (tesis–antitesis) yang melahirkan bentuk baru (sintesis). Bukan cara berpikir yang statis, melainkan gerak yang terus berubah. Setiap kondisi sosial mengandung kontradiksi di dalamnya, dan kontradiksi itulah yang mendorong perubahan menuju kondisi baru."
      },
      {
        id: "dimensi-historis",
        judul: "Dimensi historis",
        isi: "Dimensi historis menempatkan setiap persoalan dalam alur perkembangan sejarah, bukan sebagai peristiwa yang berdiri sendiri. Dengan memahami bagaimana suatu struktur sosial terbentuk dari waktu ke waktu, seorang kader dapat membaca arah perubahan yang sedang dan akan terjadi, alih-alih hanya bereaksi terhadap gejala permukaan."
      }
    ],
    kuis: [
      {
        soal: "Dimensi material dalam MDH menegaskan bahwa...",
        opsi: [
          "Kesadaran membentuk kondisi ekonomi",
          "Kondisi kebendaan/ekonomi menjadi dasar kesadaran dan struktur sosial",
          "Budaya sama sekali tidak berkaitan dengan ekonomi",
          "Sejarah tidak memiliki dasar material"
        ],
        benar: 1,
        penjelasan: "Benar — kondisi material dipandang sebagai dasar yang membentuk kesadaran dan struktur sosial."
      },
      {
        soal: "Dalam MDH, sintesis muncul sebagai hasil dari...",
        opsi: [
          "Pengulangan sejarah masa lalu",
          "Pertentangan tesis dan antitesis",
          "Keputusan individu semata",
          "Struktur ekonomi yang tetap"
        ],
        benar: 1,
        penjelasan: "Benar — sintesis lahir dari pertentangan tesis dan antitesis."
      },
      {
        soal: "Dimensi historis mengajarkan kader untuk melihat persoalan sebagai...",
        opsi: [
          "Peristiwa yang berdiri sendiri tanpa sebab",
          "Bagian dari alur perkembangan sejarah",
          "Sesuatu yang tidak berkaitan dengan struktur sosial",
          "Gejala permukaan semata"
        ],
        benar: 1,
        penjelasan: "Benar — dimensi historis menempatkan persoalan dalam alur perkembangan sejarah."
      },
      {
        soal: "Ketiga dimensi (material, dialektika, historis) digunakan bersama sebagai...",
        opsi: [
          "Tiga teori yang saling lepas",
          "Metode terpadu untuk membaca dan mengubah realitas sosial",
          "Ajaran yang hanya berlaku di bidang ekonomi",
          "Alat untuk menghafal sejarah"
        ],
        benar: 1,
        penjelasan: "Benar — ketiganya adalah satu metode terpadu untuk menganalisis dan mengubah realitas."
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
  }).join("") + `<li><a href="kuis.html?modul=${modul.id}">Kuis modul ${modul.id}</a></li>`;

  const sub = modul.subbab[subIndex];
  kontenEl.innerHTML = `
    <div class="subbab-label">Sub-bab aktif · ${subIndex + 1} dari ${modul.subbab.length}</div>
    <h2>${sub.judul}</h2>
    <p>${sub.isi}</p>
    <div class="ilustrasi-box">Ruang ilustrasi / animasi: ${sub.judul}</div>
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
  if (skor >= 80) pesan = `Kerja bagus, kader! Kamu sudah memahami dasar dari modul "${modul.judul}".`;
  else if (skor >= 50) pesan = `Pemahamanmu sudah cukup baik. Tak ada salahnya membaca ulang beberapa sub-bab di modul "${modul.judul}".`;
  else pesan = `Modul "${modul.judul}" masih perlu didalami lagi. Yuk ulangi materinya sebelum mencoba kuis lagi.`;

  wrap.innerHTML = `
    <div class="skor-lingkaran">
      <div class="angka">${skor}</div>
      <div class="total">/ 100</div>
    </div>
    <h2>${skor >= 50 ? "Kerja bagus, kader!" : "Terus semangat belajar!"}</h2>
    <p>${pesan}</p>
    <div class="hasil-buttons">
      <a href="kuis.html?modul=${modulId}" class="cta-secondary" id="btn-ulangi">Ulangi kuis</a>
      ${modulBerikut
        ? `<a href="belajar.html?modul=${modulBerikut.id}&sub=0" class="cta-button">Lanjut ke modul berikutnya</a>`
        : `<a href="daftar-modul.html" class="cta-button">Kembali ke daftar modul</a>`}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderDaftarModul();
  renderHalamanBelajar();
  renderHalamanKuis();
  renderHasilKuis();
});
