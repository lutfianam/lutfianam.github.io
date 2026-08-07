/* ==========================================================================
   Gubuk Marhaen — script.js
   Data modul, progres belajar (localStorage), dan logika kuis
   Berdasarkan ringkasan materi Pengantar Marhaenisme, Marhaenisme, & MDH
   Lengkap untuk kebutuhan PPAB dan KTD GMNI
   ========================================================================== */

const DATA_MODUL = [
  // ==================== MODUL 1: PENGANTAR MARHAENISME ====================
  {
    id: 1,
    judul: "Pengantar Marhaenisme",
    tag: "PPAB · Sejarah & Latar Belakang",
    deskripsiSingkat: "Sejarah lahirnya Marhaenisme, definisi kaum Marhaen, 9 butir Kongres Partindo, dan pengenalan GMNI.",
    subbab: [
      {
        id: "definisi-asal-usul",
        judul: "Definisi dan Asal-Usul Marhaenisme",
        isi: `MARHAENISME adalah ideologi perjuangan yang dikembangkan oleh Ir. Soekarno sebagai bentuk perlawanan terhadap penindasan manusia dan bangsa. Ini adalah adaptasi dari Marxisme yang diterapkan sesuai dengan kondisi dan kultur Indonesia, bukan sekadar jiplakan mentah-mentah dari teori Barat.

  ASAL-USUL:
  Marhaenisme lahir dari pertemuan Soekarno dengan seorang petani muda bernama Marhaen di sekitar Bandung pada tahun 1926-1927. Soekarno yang saat itu berusia 20 tahun sedang gelisah melihat penderitaan rakyat akibat kolonialisme.

  DIALOG SOEKARNO DENGAN MARHAEN:
  "Milik siapa tanah ini?" tanya Soekarno.
  "Saya," jawab Marhaen.
  "Cangkul ini milik siapa?"
  "Saya."
  "Hasil panen ini untuk siapa?"
  "Untuk saya."
  "Apakah itu cukup untuk keperluan kamu?"
  "Hasilnya pas-pasan."

  Dari dialog ini, Soekarno mendapatkan pencerahan bahwa rakyat Indonesia bukanlah proletar dalam konsepsi Marx (buruh industri tanpa alat produksi), melainkan kaum yang memiliki alat produksi kecil namun tetap melarat karena sistem kolonial. Nama "Marhaen" kemudian menjadi simbol perjuangan.

  Puncak popularitas Marhaenisme terjadi saat Soekarno menggunakannya dalam pidato pembelaan "Indonesia Menggugat" di Landraad Bandung pada tahun 1930.`
      },
      {
        id: "siapa-marhaen",
        judul: "Siapa Kaum Marhaen?",
        isi: `MARHAEN adalah personifikasi atau simbol dari seluruh rakyat kecil Indonesia yang tertindas. Bukan hanya nama seorang petani.

  KARAKTERISTIK KAUM MARHAEN:
  1. Memiliki alat produksi (tanah, cangkul, perahu) namun dalam skala sangat kecil
  2. Bekerja untuk diri sendiri dan keluarga, bukan untuk orang lain
  3. Tetap hidup melarat dan miskin meskipun memiliki alat produksi
  4. Penyebab kemiskinan bukan karena kemalasan, melainkan karena sistem ekonomi kolonial dan imperialisme

  PERBEDAAN MARHAEN DENGAN PROLETAR:
  ┌─────────────────┬──────────────────┬──────────────────┐
  │     ASPEK       │    PROLETAR      │     MARHAEN      │
  ├─────────────────┼──────────────────┼──────────────────┤
  │ Alat Produksi   │ Tidak memiliki   │ Memiliki (kecil) │
  │ Lingkungan      │ Industri (pabrik)│ Agraris (sawah)  │
  │ Sumber Hidup    │ Upah buruh       │ Hasil produksi   │
  │ Status          │ Buruh pabrik     │ Petani/nelayankecil│
  └─────────────────┴──────────────────┴──────────────────┘

  PENTING: Soekarno menegaskan bahwa PROLETAR TERMASUK ke dalam kaum Marhaen. Marhaen adalah konsep yang LEBIH LUAS dari proletar.`
      },
      {
        id: "sembilan-butir",
        judul: "9 Butir Kongres Partindo (1933)",
        isi: `Konferensi Partindo di Mataram menghasilkan 9 tesis pokok tentang Marhaenisme yang disetujui oleh Soekarno:

  1. Marhaenisme = SOSIO-NASIONALISME dan SOSIO-DEMOKRASI
  2. Marhaen = kaum proletar Indonesia + kaum tani melarat + kaum melarat lainnya
  3. Partindo memakai kata "Marhaen" BUKAN "proletar" karena proletar sudah termaktub dalam Marhaen
  4. Partindo yakin kaum melarat Indonesia lainnya harus menjadi elemen perjuangan
  5. Dalam perjuangan Marhaen, kaum proletar mengambil bagian yang BESAR SEKALI
  6. Marhaenisme menghendaki susunan masyarakat dan negara yang MENYELAMATKAN MARHAEN
  7. Marhaenisme adalah CARA PERJUANGAN REVOLUSIONER
  8. Marhaenisme menghendaki HILANGNYA KAPITALISME DAN IMPERIALISME
  9. MARHAENIS = setiap orang Indonesia yang menjalankan Marhaenisme`
      },
      {
        id: "sejarah-gmni",
        judul: "Sejarah dan Ke-GMNI-an",
        isi: `GMNI (Gerakan Mahasiswa Nasional Indonesia) adalah organisasi perjuangan yang lahir pada tanggal 23 November 1954 di Semarang.

  LATAR BELAKANG:
  GMNI didirikan oleh sekelompok mahasiswa yang terinspirasi oleh pemikiran Bung Karno tentang Marhaenisme. Mereka ingin menghadirkan organisasi mahasiswa yang berlandaskan ideologi perjuangan rakyat kecil.

  DINAMIKA SEJARAH GMNI:
  - 1954: GMNI didirikan di Semarang
  - Masa Demokrasi Terpimpin: GMNI menjadi salah satu pilar pendukung Manifesto Politik Bung Karno
  - Masa Orde Baru: GMNI mengalami tekanan politik karena dianggap terkait dengan PNI dan Bung Karno
  - Era Reformasi: GMNI bangkit kembali sebagai organisasi mahasiswa yang konsisten dengan Marhaenisme

  ASAS GMNI:
  Sosio-Nasionalisme dan Sosio-Demokrasi (Marhaenisme)

  MAKNA SIMBOL:
  Kepala Banteng melambangkan kekuatan, kegigihan, dan keberanian dalam memperjuangkan nasib kaum Marhaen.`
      },
      {
        id: "pejuang-pemikir",
        judul: "Konsepsi Pejuang-Pemikir, Pemikir-Pejuang",
        isi: `"PEJUANG PEMIKIR - PEMIKIR PEJUANG" adalah jati diri GMNI.

  MAKNA:
  Seorang kader GMNI bukan hanya aktivis yang bergerak secara fisik, tetapi juga intelektual yang memiliki kapasitas pemikiran yang mendalam.

  PEJUANG BERMAKNA:
  - Memiliki kesadaran mengabdikan diri untuk kebermanfaatan luas
  - Bukan untuk kepentingan pribadi atau golongan
  - Siap berkorban untuk rakyat kecil (Marhaen)

  PEMIKIR BERMAKNA:
  - Memiliki intelektualitas mumpuni
  - Memiliki perspektif yang kuat
  - Pemikiran kritis, radikal, dan objektif
  - Mampu memberikan sumbangsih pemikiran untuk kemaslahatan masyarakat

  SEPERTI BUNG KARNO:
  Bung Karno bukan hanya pejuang yang gigih, tetapi juga seorang pemikir, intelektual dengan berbagai konsep perjuangan yang telah dirumuskannya. Ia mewariskan pemikiran-pemikiran besar yang berguna bagi bangsa ini hingga sekarang.

  KUTIPAN PENTING:
  "Kennis zonder daad is doelloos. Daad zonder kennis is richtingloos."
  (Pengetahuan tanpa tindakan tidak memiliki tujuan. Tindakan tanpa pengetahuan tidak memiliki arah.)`
      },
      {
        id: "sarinah",
        judul: "Pengantar Ke-Sarinahan",
        isi: `SARINAH adalah konsep pemikiran Bung Karno tentang kesetaraan dan peran perempuan dalam perjuangan.

  ASAL-USUL SARINAH:
  Sarinah adalah nama seorang pengasuh Bung Karno semasa kecil. Sosok Sarinah mengajarkan Bung Karno tentang kasih sayang, kesederhanaan, dan pentingnya perjuangan perempuan.

  PEMIKIRAN TENTANG PEREMPUAN:
  Bung Karno memandang bahwa perjuangan kemerdekaan tidak akan lengkap tanpa melibatkan perempuan. Perempuan adalah bagian penting dari kaum Marhaen yang juga tertindas oleh sistem kolonial dan feodal.

  SARINAH DALAM KONTEKS PERJUANGAN:
  - Perempuan harus dibebaskan dari belenggu tradisi yang menindas
  - Perempuan memiliki hak yang sama dalam perjuangan
  - Emansipasi perempuan adalah bagian dari emansipasi kaum Marhaen secara keseluruhan

  KUTIPAN BUNG KARNO:
  "Perempuan-perempuan Indonesia, ibu-ibu Indonesia, adalah tiang negara. Kalau perempuan-perempuan Indonesia sudah terdidik, sudah sadar, sudah cakap, maka amatlah besarnya pengaruhnya kepada kemajuan bangsa Indonesia."

  DI GMNI:
  Sarinah menjadi salah satu pilar perjuangan yang menekankan pentingnya peran perempuan dalam gerakan dan kesetaraan gender dalam perjuangan Marhaenisme.`
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
        penjelasan: "— nama 'Marhaen' diambil dari petani kecil yang ditemui Bung Karno di sekitar Bandung pada tahun 1926-1927."
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
        penjelasan: "— Marhaen adalah simbol rakyat kecil yang memiliki alat produksi sendiri tetapi tetap hidup melarat karena tertindas oleh sistem kolonial, feodal, dan kapitalisme."
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
        penjelasan: "— Butir pertama Kongres Partindo menyatakan bahwa Marhaenisme adalah Sosio-Nasionalisme dan Sosio-Demokrasi."
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
        penjelasan: "— Marhaen memiliki alat produksi kecil namun tetap miskin, sedangkan Proletar adalah buruh industri yang tidak memiliki alat produksi. Soekarno menegaskan bahwa Proletar termasuk ke dalam kaum Marhaen."
      },
      {
        soal: "GMNI didirikan pada tanggal...",
        opsi: [
          "1 Juni 1945",
          "23 November 1954",
          "17 Agustus 1945",
          "20 September 2024"
        ],
        benar: 1,
        penjelasan: "— GMNI (Gerakan Mahasiswa Nasional Indonesia) didirikan pada tanggal 23 November 1954 di Semarang."
      },
      {
        soal: "Jati diri GMNI adalah...",
        opsi: [
          "Pejuang Fisik dan Aktivis Jalanan",
          "Pejuang Pemikir - Pemikir Pejuang",
          "Mahasiswa Biasa dan Pasif",
          "Intelektual Tanpa Aksi"
        ],
        benar: 1,
        penjelasan: "— 'Pejuang Pemikir - Pemikir Pejuang' adalah jati diri GMNI, yang menekankan keseimbangan antara pemikiran dan tindakan perjuangan."
      },
      {
        soal: "Sosok Sarinah dalam pemikiran Bung Karno adalah...",
        opsi: [
          "Seorang pahlawan nasional dari Jawa Timur",
          "Pengasuh Bung Karno yang mengajarkan kasih sayang dan kesederhanaan",
          "Ibu dari Bung Karno",
          "Seorang tokoh komunis terkenal"
        ],
        benar: 1,
        penjelasan: "— Sarinah adalah nama pengasuh Bung Karno semasa kecil yang mengajarkan tentang kasih sayang, kesederhanaan, dan pentingnya perjuangan perempuan."
      }
    ]
  },

  // ==================== MODUL 2: MARHAENISME ====================
  {
    id: 2,
    judul: "Marhaenisme",
    tag: "KTD · Konsep Dasar & Etika",
    deskripsiSingkat: "Tiga asas utama, 7 asas perjuangan, etika politik, dan kader sebagai subjek gerakan.",
    subbab: [
      {
        id: "tiga-asas",
        judul: "Tiga Asas Marhaenisme",
        isi: `Marhaenisme berpijak pada TIGA ASAS UTAMA:

  1. SOSIO-NASIONALISME
  Nasionalisme yang berperikemanusiaan. Nasionalisme Indonesia sejiwa dengan social conscience of man (budi nurani sosial manusia).
  
  - Bukan nasionalisme sempit atau chauvinistik (cinta tanah air buta)
  - Nasionalisme adalah bagian dari internasionalisme ("taman sari")
  - Indonesia adalah bagian dari dunia, perjuangannya adalah bagian dari perjuangan umat manusia melawan penindasan
  - Peringatan: Nasionalisme tidak boleh membela buta kapitalis nasional atau komprador pribumi

  KUTIPAN BUNG KARNO:
  "Internasionalisme adalah nasionalisme yang tumbuh di taman sari internasional."

  2. SOSIO-DEMOKRASI
  Demokrasi ala Indonesia yang berakar pada musyawarah mufakat.
  
  - Bukan demokrasi liberal yang bertumpu pada kekuatan mayoritas (voting)
  - Adalah "perundingan demokratis model Asia"
  - Demokrasi tidak hanya politik, tetapi juga sosial dan ekonomi
  - Bertujuan untuk kesejahteraan bersama dan keadilan sosial

  TRISAKTI BUNG KARNO:
  1. Berdaulat dalam Politik
  2. Berdikari dalam Ekonomi
  3. Berkepribadian dalam Budaya

  3. KETUHANAN YANG MAHA ESA
  Marhaenisme percaya pada eksistensi Tuhan dan menjunjung tinggi kebebasan berkeyakinan.
  
  PERBEDAAN:
  - Berketuhanan: Kebebasan memeluk agama atau keyakinan apapun
  - Beragama: Secara otomatis percaya pada agama-agama samawi atau agama tertentu`
      },
      {
        id: "tujuh-asas-perjuangan",
        judul: "7 Asas Perjuangan Marhaenisme",
        isi: `Asas perjuangan adalah JEMBATAN antara cita-cita ideal (azas) dengan realitas yang dihadapi. Ini adalah STRATEGI untuk mencapai tujuan.

  ┌───┬────────────────────┬──────────────────────────────────────────────┐
  │No │     ASAS           │                 DEFINISI                    │
  ├───┼────────────────────┼──────────────────────────────────────────────┤
  │ 1 │ RADIKAL-           │ Menghendaki perubahan sosial dan politik     │
  │   │ REVOLUSIONER       │ secara mendasar dan menyeluruh ("menjebol    │
  │   │                    │ lalu membangun dari awal")                   │
  ├───┼────────────────────┼──────────────────────────────────────────────┤
  │ 2 │ MACHTSVORMING      │ Pembentukan dan penyusunan kekuatan          │
  │   │                    │ organisasi dan massa                         │
  ├───┼────────────────────┼──────────────────────────────────────────────┤
  │ 3 │ MACHTSAANWENDING   │ Penggunaan kekuatan yang telah terbentuk     │
  │   │                    │ untuk mencapai tujuan                        │
  ├───┼────────────────────┼──────────────────────────────────────────────┤
  │ 4 │ MASSA-AKSI         │ Gerakan kolektif yang melibatkan massa       │
  │   │                    │ rakyat untuk aksi nyata                      │
  ├───┼────────────────────┼──────────────────────────────────────────────┤
  │ 5 │ NON-KOOPERATIF     │ Tidak mau bekerja sama dengan pemerintah     │
  │   │                    │ kolonial. Kemerdekaan harus diusahakan sendiri│
  ├───┼────────────────────┼──────────────────────────────────────────────┤
  │ 6 │ SELF-HELP          │ Belajar menolong diri sendiri dalam          │
  │   │                    │ mengatasi masalah dan kondisi tertentu       │
  ├───┼────────────────────┼──────────────────────────────────────────────┤
  │ 7 │ SELF-RELIANCE      │ Mengembangkan kekuatan internal, mandiri,    │
  │   │                    │ tidak bergantung pada pihak lain             │
  └───┴────────────────────┴──────────────────────────────────────────────┘

  CATATAN: Ketujuh asas ini bersifat DINAMIS dan mengikuti perkembangan zaman. Soekarno menyatakan: "Jika nanti keadaan berubah maka mungkin sangat perlu dirubah azas perjuangan itu sendiri."`
      },
      {
        id: "marhaenis-dan-etika",
        judul: "Marhaenis dan Etika Politik",
        isi: `MARHAENIS adalah setiap orang Indonesia yang menjalankan dan memperjuangkan Marhaenisme dalam kehidupannya.

  ETIKA POLITIK MARHAENIS:
  Etika politik Marhaenis menuntut keberpihakan yang tegas kepada golongan Marhaen dalam setiap sikap dan kebijakan.

  SEORANG KADER MARHAENIS DIHARAPKAN:
  1. Menempatkan kepentingan rakyat kecil di atas kepentingan pribadi atau golongan
  2. Menolak segala bentuk penindasan, baik dari luar maupun dari dalam masyarakat
  3. Berpihak pada kaum melarat, kaum tani, dan kaum tertindas

  KUTIPAN BUNG KARNO:
  "Barang siapa yang berpihak pada kaum melarat itu, kaum marhaen itu, kaum tani itu, mereka adalah marhaenis."

  SEJARAH SINGKAT MARHAENISME:
  - Puncak kejayaan: Saat Soekarno berkuasa
  - 1975: Berakhir sebagai asas partai (PNI fusi ke PDI)
  - Orde Baru: Pancasila sebagai asas tunggal, Marhaenisme tidak boleh digunakan
  - Era Reformasi: Muncul partai-partai Marhaenis (PNI Front Marhaen, PNI Massa Marhaen, Partai Rakyat Marhaen, dll.)
  - Deklarasi Lembang (1964): Marhaenisme adalah Marxisme yang diterapkan sesuai kondisi Indonesia
  - Pencabutan (1966): Marhaenisme dinyatakan identik dengan Pancasila`
      },
      {
        id: "kader-subjek-gerakan",
        judul: "Kader Sebagai Subjek Gerakan",
        isi: `KADER adalah tenaga penggerak organisasi, bukan sekadar status formal. Kader adalah ujung tombak sekaligus tulang punggung kontinuitas organisasi.

  KONSEP DIRI KADER GMNI:

  1. KESADARAN KRITIS
  - Kemampuan melihat sistem & struktur sebagai sumber masalah
  - Mengidentifikasi ketidakadilan dalam sistem dan struktur
  - Mampu melakukan analisis bagaimana sistem dan struktur itu bekerja
  - Mampu merumuskan sistem alternatif menuju transformasi sosial

  2. POWER OF KNOWLEDGE
  - Pengetahuan adalah sumber daya dan kekuatan utama
  - Kader sebagai kaum cendekiawan yang mengedepankan pengetahuan

  3. INTELEKTUAL ORGANIK
  - Menyadarkan masyarakat dengan pengetahuan yang dimiliki
  - Memantik kesadaran perlawanan terhadap agenda yang tidak berpihak pada rakyat
  - Intelektual yang bisa memberikan dampak bagi kesadaran masyarakat luas

  4. SELF RELIANCE DAN SELF HELP
  - Jiwa berdikari: "cara meraih usaha dengan tenaga dan kekuatan sendiri"
  - Percaya pada kekuatan sendiri dan kekuatan organisasi

  5. ORGANISATORIS
  - Taat pada AD/ART dan disiplin organisasi
  - Menjunjung tinggi nama dan kehormatan organisasi

  6. RASIONAL
  - Berpikir berdasarkan nalar dan logika
  - Mampu memilah informasi berdasarkan kebenaran data/fakta

  7. DIALEKTIS
  - Senantiasa berada dalam ruang-ruang dialektika
  - Tidak melihat masalah dengan statis atau kaku
  - Terbuka terhadap perubahan

  8. PROGRESIF REVOLUSIONER
  - Berpikir yang mengarah pada kemajuan
  - Mampu menjebol dan membangun
  - Menghendaki perubahan mendasar dalam struktur sosial

  9. MERITROKRASI
  - Menjunjung tinggi nilai berdasarkan kapasitas atau kemampuan
  - Bukan atas dasar latar belakang etnis, klan, suku, atau afiliasi politik`
      },
      {
        id: "sarinah-perspektif",
        judul: "Sarinah dalam Perspektif Gerakan",
        isi: `SARINAH adalah konsep pemikiran Bung Karno tentang kesetaraan dan peran perempuan dalam perjuangan.

  ASAL-USUL SARINAH:
  Sarinah adalah nama seorang pengasuh Bung Karno semasa kecil. Sosok Sarinah mengajarkan Bung Karno tentang kasih sayang, kesederhanaan, dan pentingnya perjuangan perempuan.

  PEMIKIRAN BUNG KARNO TENTANG PEREMPUAN:
  Bung Karno memandang bahwa perjuangan kemerdekaan tidak akan lengkap tanpa melibatkan perempuan. Perempuan adalah bagian penting dari kaum Marhaen yang juga tertindas oleh sistem kolonial dan feodal.

  EMPAT PILAR PERJUANGAN PEREMPUAN:
  1. Perempuan harus dibebaskan dari belenggu tradisi yang menindas
  2. Perempuan memiliki hak yang sama dalam perjuangan
  3. Emansipasi perempuan adalah bagian dari emansipasi kaum Marhaen secara keseluruhan
  4. Perempuan adalah tiang negara dan penggerak perubahan

  KUTIPAN BUNG KARNO:
  "Perempuan-perempuan Indonesia, ibu-ibu Indonesia, adalah tiang negara. Kalau perempuan-perempuan Indonesia sudah terdidik, sudah sadar, sudah cakap, maka amatlah besarnya pengaruhnya kepada kemajuan bangsa Indonesia."

  SARINAH DALAM KONTEKS GERAKAN:
  - Sarinah menjadi bagian integral dari cita-cita Marhaenisme
  - Menekankan pentingnya peran perempuan dalam perjuangan kelas
  - Mengajarkan bahwa kesetaraan gender adalah bagian dari keadilan sosial
  - Dalam GMNI, Sarinah menjadi salah satu pilar perjuangan yang menekankan pentingnya peran perempuan dalam gerakan`
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
        penjelasan: "Benar — Tiga asas Marhaenisme adalah Sosio-Nasionalisme, Sosio-Demokrasi, dan Ketuhanan Yang Maha Esa."
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
        penjelasan: "Benar — Sosio-Demokrasi menuntut demokrasi yang tidak hanya politik tetapi juga sosial dan ekonomi."
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
        penjelasan: "Benar — Non-Kooperatif adalah strategi menolak kerja sama dengan pemerintah kolonial. Kemerdekaan harus diusahakan sendiri."
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
        penjelasan: "Benar — Marhaenis adalah setiap orang Indonesia yang menjalankan dan memperjuangkan Marhaenisme."
      },
      {
        soal: "Kesadaran kritis yang harus dimiliki kader GMNI adalah...",
        opsi: [
          "Menerima semua keadaan apa adanya",
          "Kemampuan melihat sistem dan struktur sebagai sumber masalah",
          "Hanya mengikuti perintah atasan",
          "Tidak peduli dengan keadaan masyarakat"
        ],
        benar: 1,
        penjelasan: "Benar — Kesadaran kritis adalah kemampuan melihat sistem dan struktur sebagai sumber masalah, bukan hanya menyalahkan korban."
      },
      {
        soal: "Sarinah dalam pemikiran Bung Karno mengajarkan tentang...",
        opsi: [
          "Kekuasaan dan politik praktis",
          "Kesetaraan dan peran perempuan dalam perjuangan",
          "Strategi militer dan pertahanan",
          "Ekonomi pasar bebas"
        ],
        benar: 1,
        penjelasan: "Benar — Sarinah mengajarkan tentang kesetaraan dan peran penting perempuan dalam perjuangan kemerdekaan dan pembangunan bangsa."
      }
    ]
  },

  // ==================== MODUL 3: MDH ====================
  {
    id: 3,
    judul: "Materialisme-Dialektika-Historis",
    tag: "KTD · Metode Analisis Realitas",
    deskripsiSingkat: "Tiga dimensi analisis realitas: material, dialektika, dan historis sebagai pisau bedah realitas sosial.",
    subbab: [
      {
        id: "pengantar-mdh",
        judul: "Pengantar MDH",
        isi: `MDH (Materialisme-Dialektika-Historis) adalah "SENJATA FILSAFAT" atau metode berpikir yang diajarkan oleh Karl Marx dan diadopsi oleh Marhaenisme. Ini adalah "PISAU BEDAH" untuk menganalisis masalah masyarakat.

  TUJUAN MDH:
  1. Menghindari pemikiran klenik (magis-mistis) yang hanya menerima takdir
  2. Menghindari pemikiran spekulatif-avonturistik (aksi tanpa analisis)
  3. Menciptakan pencerahan akal budi
  4. Mempersenjatai diri melawan paham-paham kaum penghisap-penindas

  KUTIPAN PENTING:
  "Pemikiran ini BUKAN UNTUK HIASAN SALON INTELEKTUAL SEMATA. NAMUN UNTUK DIPAHAMI DAN DI-PRAXIS-KAN UNTUK KALANGAN LUAS RAKYAT TERTINDAS!"

  "Tanpa teori yang revolusioner tidak akan ada praktik yang revolusioner." — Bung Karno

  TIGA KOMPONEN MDH:
  1. MATERIALISME (Cara Pandang terhadap Realitas)
  2. DIALEKTIKA (Cara Berpikir)
  3. HISTORIS (Cara Membaca Sejarah)`
      },
      {
        id: "dimensi-material",
        judul: "Dimensi Material",
        isi: `MATERIALISME adalah pandangan yang menyatakan bahwa KENYATAAN YANG NYATA ADALAH MATERI ITU SENDIRI, bukan sekadar pantulan inderawi atau kesadaran manusia.

  KESALAHPAHAMAN UMUM:
  Materialisme BUKAN berarti "sikap mementingkan mengejar materi" atau "matre".

  DEFINISI SEBENARNYA:
  Materi bisa ada TANPA ADA PENGETAHUAN MANUSIA TENTANGNYA.
  - Gravitasi tetap ada meskipun manusia belum menemukan hukumnya
  - Ponsel tetap ada meskipun tidak ada yang melihatnya

  MATERIALISME VS IDEALISME:
  ┌─────────────────┬──────────────────┬──────────────────┐
  │     ASPEK       │  MATERIALISME    │    IDEALISME     │
  ├─────────────────┼──────────────────┼──────────────────┤
  │ Pandangan       │ Materi realitas  │ Kenyataan =      │
  │                 │ nyata            │ pantulan pikiran │
  │ Ontologi        │ Objektif-Fisikalis│ Subjektif-Psikologis│
  │ Contoh          │ "Aku ada, maka   │ "Aku berpikir,   │
  │                 │ aku berpikir"    │ maka aku ada"    │
  └─────────────────┴──────────────────┴──────────────────┘

  KONSEP BASIS DAN SUPRASRUKTUR:

  ┌─────────────────────────────────────────────────────────────┐
  │                  SUPRASRUKTUR                              │
  │  (Politik, Hukum, Budaya, Agama, Kesadaran Sosial)        │
  │                     ↑                                      │
  │            dibangun di atas                                │
  │                     ↑                                      │
  │                     │                                      │
  │                   BASIS                                    │
  │      (Sistem Ekonomi: Produksi, Distribusi, Konsumsi)     │
  └─────────────────────────────────────────────────────────────┘

  RUMUSAN MARX:
  "Bukan kesadaran manusia yang menentukan keadaan mereka, tetapi sebaliknya, keadaan sosial merekalah yang menentukan kesadaran mereka."`
      },
      {
        id: "dimensi-dialektika",
        judul: "Dimensi Dialektika",
        isi: `DIALEKTIKA adalah cara berpikir tiga tahap: TESIS → ANTITESIS → SINTESIS.

  PROSES DIALEKTIKA:
  1. TESIS (pernyataan awal)
  2. ANTITESIS (lawan/pertentangan)
  3. SINTESIS (hasil baru dari pertentangan)

  Catatan: Sintesis akan menjadi tesis baru yang akan menemui antitesis baru lagi, menciptakan sintesis baru. Proses ini terus berulang.

  ILUSTRASI SEDERHANA:
  1. TESIS: Pulau adalah tanah
  2. ANTITESIS: Pulau bukan hanya tanah, di pinggirnya ada air
  3. SINTESIS: Pulau adalah tanah yang dikelilingi air

  3 HUKUM DIALEKTIKA:

  1. HUKUM KONTRADIKSI
  - Segala sesuatu selalu mengandung sisi-sisi yang berkontradiksi
  - Kontradiksi adalah penggerak perubahan
  - Jenis kontradiksi: Umum, Khusus, Dasar, Pokok, Mutasi, Antagonis

  2. PERUBAHAN KUANTITATIF KE KUALITATIF
  - Perubahan terjadi secara bertahap (evolusioner)
  - Pada titik tertentu (titik nodal), terjadi LOMPATAN KUALITATIF
  - Contoh: Air dipanaskan → suhu naik → pada 100°C berubah menjadi uap

  3. NEGASI DARI NEGASI
  - Proses meniadakan yang meniadakan
  - Sesuatu berubah dari bentuk sederhana → lebih kompleks → lebih maju
  - Contoh: Biji → Tumbuhan → Biji baru yang berlipat ganda

  DIALEKTIKA VS METAFISIKA:
  ┌─────────────────┬──────────────────┬──────────────────┐
  │     ASPEK       │   DIALEKTIKA     │   METAFISIKA     │
  ├─────────────────┼──────────────────┼──────────────────┤
  │ Pandangan       │ Saling terhubung │ Terisolasi       │
  │ Sifat           │ Dinamis          │ Statis           │
  │ Perubahan       │ Kuantitatif →    │ Hanya kuantitatif│
  │                 │ Kualitatif       │                  │
  │ Kontradiksi     │ Penggerak        │ Gangguan/harmoni │
  └─────────────────┴──────────────────┴──────────────────┘`
      },
      {
        id: "dimensi-historis",
        judul: "Dimensi Historis dan Imperialisme",
        isi: `MATERIALISME HISTORIS adalah perluasan prinsip-prinsip materialisme dialektik pada analisis kehidupan masyarakat dan sejarah.

  INTI MATERIALISME HISTORIS:
  "Sejarah dari semua masyarakat yang ada sampai sekarang adalah sejarah perjuangan kelas." — Manifesto Komunis

  PERIODESASI SEJARAH BERDASARKAN CARA PRODUKSI:
  ┌─────────────────┬──────────────────┬──────────────────┬──────────────────┐
  │  ZAMAN          │  CARA PRODUKSI   │  PENINDAS        │  TERTINDAS       │
  ├─────────────────┼──────────────────┼──────────────────┼──────────────────┤
  │ Komune Primitif │ Berburu & meramu │ -                │ -                │
  │ Perbudakan      │ Pertanian        │ Pemilik budak    │ Budak            │
  │ Feodal          │ Pertanian (tanah)│ Tuan tanah       │ Petani           │
  │ Kapitalis       │ Industri &       │ Kapitalis/Burjuis│ Proletar/Buruh   │
  │                 │ perdagangan      │                  │                  │
  │ Sosialis        │ Kolektif         │ -                │ -                │
  └─────────────────┴──────────────────┴──────────────────┴──────────────────┘

  IMPERIALISME SEBAGAI PERKEMBANGAN TERTINGGI KAPITALISME:

  IMPERIALISME adalah tingkat kematangan tertinggi dari kapitalisme.

  Dua Pandangan:
  1. IDEALISTIS: Imperialisme adalah "nafsu" negara maju menjajah
  2. MATERIALISTIS: Imperialisme adalah konsekuensi tak terhindarkan akibat "ruang hidup" kapitalisme sudah terlalu sempit

  IMPERIALISME BELANDA DI INDONESIA:
  - Karakter: Mencari bahan baku dengan harga murah
  - Akibat: Melahirkan kaum Marhaen (petani kecil tertindas), bukan proletar industri
  - Sebab: Feodalisme dan kapitalisme memiliki kepentingan sebangun (tidak berseberangan seperti di Eropa)

  KARAKTER IMPERIALISME BELANDA vs INGGRIS:
  ┌─────────────────┬──────────────────┬──────────────────┐
  │     ASPEK       │  BELANDA         │    INGGRIS       │
  ├─────────────────┼──────────────────┼──────────────────┤
  │ Lahir dari      │ Mencari bahan    │ Surplus produksi │
  │                 │ baku             │                  │
  │ Karakter        │ "Mencari hasil   │ "Menjual hasil   │
  │                 │ produksi"        │ produksi"        │
  │ Strategi        │ Mematikan        │ Menghambat tapi  │
  │                 │ produsen pribumi │ tidak mematikan  │
  │ Julukan         │ "Kolot"          │ "Banci"          │
  └─────────────────┴──────────────────┴──────────────────┘`
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
        penjelasan: "— Dimensi material menyatakan bahwa kondisi ekonomi/material adalah basis yang membentuk kesadaran, budaya, dan struktur sosial (suprastruktur)."
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
        penjelasan: "— Sintesis lahir dari pertentangan tesis dan antitesis, dan akan menjadi tesis baru yang akan menemui antitesis baru lagi."
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
        penjelasan: "— Negasi dari Negasi adalah proses meniadakan yang meniadakan, menghasilkan bentuk baru yang lebih maju dan kompleks."
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
        penjelasan: "— Materialisme Historis memandang sejarah sebagai sejarah perjuangan kelas. Perubahan dari satu zaman ke zaman lain terjadi karena adanya konflik kepentingan ekonomi."
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
        penjelasan: "— Imperialisme adalah konsekuensi tak terhindarkan dari kapitalisme yang membutuhkan ruang hidup baru untuk mempertahankan eksistensinya."
      },
      {
        soal: "Karakter imperialisme Belanda di Indonesia adalah...",
        opsi: [
          "Menjual hasil produksi ke negara jajahan",
          "Mencari bahan baku dengan harga murah",
          "Membangun industri besar di Indonesia",
          "Mendukung kemerdekaan Indonesia"
        ],
        benar: 1,
        penjelasan: "— Imperialisme Belanda lahir dari kapitalisme yang mencari bahan baku. Ini yang menyebabkan lahirnya kaum Marhaen (petani kecil tertindas) di Indonesia."
      },
      {
        soal: "MDH disebut sebagai 'pisau bedah' untuk...",
        opsi: [
          "Menghafal sejarah dengan mudah",
          "Menganalisis dan mengubah realitas sosial",
          "Membaca buku-buku filsafat",
          "Berkarir di bidang politik praktis"
        ],
        benar: 1,
        penjelasan: "— MDH adalah pisau bedah untuk menganalisis dan mengubah realitas sosial, bukan sekadar teori tanpa aplikasi."
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
    feedback.textContent = (benar ? "✓ Benar " : "✗ Salah ") + soal.penjelasan;
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
  if (skor >= 80) pesan = `Kerja bagus, kader! Kamu sudah memahami dasar dari modul "${modul.judul}". Teruslah belajar dan praxis-kan ilmunya! Ingat: "Pengetahuan tanpa tindakan tidak memiliki tujuan."`;
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