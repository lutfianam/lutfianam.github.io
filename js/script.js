/* ==========================================================================
   Gubuk Marhaen — script.js
   Data modul dengan pendekatan dialogis interaktif
   "Tuhan bersemayam di gubuknya si miskin"
   ========================================================================== */

const DATA_MODUL = [
  // ================================================================
  // MODUL 1: MENGENAL MARHAEN (PPAB - Pengantar)
  // ================================================================
  {
    id: 1,
    judul: "Mengenal Marhaen",
    tag: "PPAB - Pengantar",
    ikon: "🏠",
    deskripsiSingkat: "Seperti bertamu ke gubuk seorang Marhaen, kita akan mengenal siapa sebenarnya rakyat kecil yang diperjuangkan oleh Bung Karno.",
    
    // Sambutan awal modul
    sambutan: {
      teks: "Selamat datang di Gubuk Marhaen. Di sinilah tempat Bung Karno belajar tentang penderitaan rakyat. 'Tuhan bersemayam di gubuknya si miskin'—maka sebelum berbicara tentang perjuangan, mari kita mampir dan mendengar dulu suara mereka yang tinggal di gubuk-gubuk ini.",
      suara: "Pemandu Gubuk"
    },
    
    subbab: [
      // ---------- SESI 1: PERTEMUAN DI SAWAH ----------
      {
        id: "pertemuan-di-sawah",
        judul: "Pertemuan di Sawah",
        durasi: "10 menit",
        // Petunjuk media untuk developer
        media: {
          jenis: ["Ilustrasi", "Audio"],
          deskripsi: "Gambar petani di sawah dengan Bung Karno sedang berdialog. Audio narasi pembukaan dengan suara latar alam (sawah, angin).",
          saran: "Buat ilustrasi bergaya vintage hitam-putih atau sketsa pensil untuk nuansa klasik."
        },
        
        // Format dialog interaktif
        dialog: [
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Coba bayangkan: tahun 1923, di sebuah sawah di sekitar Bandung. Seorang pemuda bernama Soekarno sedang berjalan-jalan. Lalu ia bertemu dengan seorang petani. Apa yang terjadi, ya?"
          },
          {
            dari: "🇮🇩 Bung Karno",
            pesan: "'Siapa pemilik tanah ini?' tanyaku. 'Milik saya!' jawab petani itu. 'Pacul ini punya siapa?' tanyaku lagi. 'Milik saya!' 'Alat-alat ini, punya siapa?' 'Milik saya.'"
          },
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Bayangkan! Petani itu bekerja dengan kekuatan dan modalnya sendiri. Tanahnya sendiri, paculnya sendiri. TAPI... kenapa ia tetap miskin?",
            efek: "❓ Muncul pertanyaan di layar: 'Kenapa petani itu tetap miskin?'"
          },
          {
            dari: "🇮🇩 Bung Karno",
            pesan: "Dari situlah aku menamai dia 'Marhaen'. Marhaen adalah gambaran kemiskinan rakyat Indonesia. Bukan karena malas, bukan karena bodoh—tapi karena sistem."
          }
        ],
        
        // Materi inti (tampil setelah dialog)
        isi: "📖 APA ITU MARHAEN?\n\n" +
             "Marhaen adalah istilah yang diciptakan Bung Karno untuk menyebut rakyat kecil Indonesia yang melarat.\n\n" +
             "📌 Dalam pidato pembelaannya di pengadilan Belanda (1930), Bung Karno mendefinisikan Marhaen sebagai:\n\n" +
             "▸ 'Kaum tani kecil'\n" +
             "▸ 'Kaum buruh kecil'\n" +
             "▸ 'Kaum pedagang kecil'\n" +
             "▸ 'Kaum pelayar kecil'\n" +
             "▸ 'Kaum Marhaen yang apa-apanya semua kecil'\n\n" +
             "💡 Ciri-ciri Marhaen:\n" +
             "1. Bekerja dengan kekuatan sendiri\n" +
             "2. Punya alat produksi kecil (tanah, perahu, gerobak)\n" +
             "3. Tetapi tetap miskin karena dieksploitasi sistem\n" +
             "4. Tidak punya kekuatan tawar dalam ekonomi\n\n" +
             "🎯 INTI: Marhaen bukan karena malas. Marhaen miskin karena SISTEM.",
        
        kuisSesi: [
          {
            soal: "Siapa yang pertama kali menciptakan istilah 'Marhaen'?",
            opsi: ["Mohammad Hatta", "Soekarno", "Tan Malaka", "Ki Hajar Dewantara"],
            benar: 1,
            penjelasan: "Benar! Soekarno menciptakan istilah Marhaen setelah bertemu dengan petani di sawah sekitar Bandung pada tahun 1923."
          },
          {
            soal: "Apa ciri utama seorang Marhaen?",
            opsi: [
              "Orang yang malas bekerja",
              "Rakyat kecil yang bekerja dengan kekuatan sendiri tetapi tetap miskin karena sistem",
              "Orang kaya yang kehilangan harta",
              "Buruh pabrik yang tidak punya alat produksi"
            ],
            benar: 1,
            penjelasan: "Benar! Marhaen adalah rakyat kecil yang bekerja keras tetapi tetap miskin karena dieksploitasi sistem."
          },
          {
            soal: "Marhaen miskin karena mereka malas dan tidak mau bekerja keras.",
            opsi: ["Benar", "Salah"],
            benar: 1,
            penjelasan: "Salah! Marhaen miskin BUKAN karena malas, tapi karena SISTEM (kapitalisme, imperialisme, feodalisme) yang menindas mereka."
          }
        ]
      },

      // ---------- SESI 2: MARHAEN VS PROLETAR ----------
      {
        id: "marhaen-vs-proletar",
        judul: "Marhaen vs Proletar",
        durasi: "10 menit",
        media: {
          jenis: ["Tabel Perbandingan", "Infografis"],
          deskripsi: "Tabel perbandingan Marhaen vs Proletar dengan ikon visual. Infografis alur lahirnya Marhaen dari imperialisme Belanda.",
          saran: "Buat tabel dengan warna kontras (merah untuk Proletar, hijau untuk Marhaen). Tambahkan ilustrasi petani dan buruh pabrik."
        },
        
        dialog: [
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Nah, seringkali ada pertanyaan: 'Apa bedanya Marhaen dengan Proletar?' Proletar kan juga orang miskin. Mari kita bedah bersama."
          },
          {
            dari: "🇮🇩 Bung Karno",
            pesan: "Proletar adalah konsep dari Marx di Eropa. Buruh pabrik yang tidak punya apa-apa selain tenaganya. Tapi Indonesia berbeda! Di sini, petani punya tanah kecil, nelayan punya perahu. Mereka bukan proletar—mereka Marhaen!"
          },
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Jadi perbedaannya: Proletar TIDAK punya alat produksi sama sekali. Marhaen BISA punya alat produksi kecil—tapi tetap miskin karena sistem."
          }
        ],
        
        isi: "⚔️ MARHAEN vs PROLETAR:\n\n" +
             "┌─────────────────────┬─────────────────────┐\n" +
             "│ PROLETAR            │ MARHAEN             │\n" +
             "├─────────────────────┼─────────────────────┤\n" +
             "│ Buruh industri      │ Petani, nelayan,    │\n" +
             "│ di pabrik           │ tukang becak, dll   │\n" +
             "├─────────────────────┼─────────────────────┤\n" +
             "│ TIDAK punya alat    │ BISA punya alat     │\n" +
             "│ produksi            │ produksi kecil      │\n" +
             "├─────────────────────┼─────────────────────┤\n" +
             "│ Lahir di Eropa      │ Lahir di Indonesia  │\n" +
             "│ industri            │ agraris-kolonial    │\n" +
             "├─────────────────────┼─────────────────────┤\n" +
             "│ Kontradiksi:        │ Kontradiksi:        │\n" +
             "│ buruh vs kapitalis  │ petani vs tuan     │\n" +
             "│                     │ tanah + kapitalis   │\n" +
             "│                     │ asing               │\n" +
             "└─────────────────────┴─────────────────────┘\n\n" +
             "🌏 MENGAPA MARHAEN LAHIR?\n\n" +
             "Marhaen lahir dari imperialisme Belanda di Indonesia.\n\n" +
             "Belanda adalah negara kecil dengan SDA terbatas → kapitalisme Belanda mencari bahan baku → ingin membeli bahan baku semurah mungkin dari jajahannya.\n\n" +
             "Di Indonesia, kapitalis Belanda dan tuan tanah feodal BERSEKUTU—sama-sama untung dari eksploitasi petani.\n\n" +
             "AKIBATNYA: PETANI TERJEPIT!\n\n" +
             "┌─────────────────────┬─────────────────────┐\n" +
             "│ PIHAK               │ CARA EKSPLOITASI    │\n" +
             "├─────────────────────┼─────────────────────┤\n" +
             "│ Belanda             │ Beli hasil pertanian│\n" +
             "│                     │ dengan harga murah  │\n" +
             "├─────────────────────┼─────────────────────┤\n" +
             "│ Tuan Tanah          │ Memungut sewa/upeti │\n" +
             "├─────────────────────┼─────────────────────┤\n" +
             "│ Tengkulak           │ Beli murah, jual    │\n" +
             "│                     │ mahal               │\n" +
             "└─────────────────────┴─────────────────────┘\n\n" +
             "🎯 INTI: Marhaen lebih luas dari proletar. Marhaen mencakup semua rakyat kecil yang DIMELARATKAN oleh sistem.",
        
        kuisSesi: [
          {
            soal: "Apa perbedaan utama antara Marhaen dan Proletar?",
            opsi: [
              "Marhaen adalah petani, Proletar adalah buruh",
              "Marhaen bisa memiliki alat produksi kecil, Proletar tidak memiliki alat produksi",
              "Marhaen ada di perkotaan, Proletar di pedesaan",
              "Tidak ada perbedaan sama sekali"
            ],
            benar: 1,
            penjelasan: "Benar! Perbedaan utamanya: Marhaen BISA memiliki alat produksi kecil, sedangkan Proletar TIDAK PUNYA alat produksi sama sekali."
          },
          {
            soal: "Mengapa Marhaen menjadi kelas tertindas utama di Indonesia?",
            opsi: [
              "Karena petani Indonesia malas bekerja",
              "Karena Indonesia belum industrialisasi—imperialisme Belanda mencari bahan baku pertanian",
              "Karena Indonesia tidak punya buruh sama sekali",
              "Karena petani tidak mau bergabung dengan serikat"
            ],
            benar: 1,
            penjelasan: "Benar! Indonesia belum industrialisasi, sehingga imperialisme Belanda bersifat agraris—mencari bahan baku pertanian."
          },
          {
            soal: "Di Indonesia, kapitalis Belanda dan tuan tanah feodal bersekutu. Di Eropa, mereka bertentangan.",
            opsi: ["Benar", "Salah"],
            benar: 0,
            penjelasan: "Benar! Di Indonesia mereka BERSEKUTU karena sama-sama untung dari petani. Di Eropa mereka bertentangan."
          }
        ]
      },

      // ---------- SESI 3: MARHAEN SEKARANG ----------
      {
        id: "marhaen-sekarang",
        judul: "Marhaen Sekarang",
        durasi: "10 menit",
        media: {
          jenis: ["Galeri Foto", "Video Pendek"],
          deskripsi: "Galeri foto Marhaen masa kini: ojek online, buruh pabrik, pedagang pasar, petani. Video pendek testimoni rakyat kecil.",
          saran: "Gunakan foto-foto dokumenter dengan izin subjek. Video bisa berupa wawancara singkat (30-60 detik) dengan pekerja informal."
        },
        
        dialog: [
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Nah, kita sudah kenal Marhaen di masa lalu. Tapi pertanyaannya: siapa Marhaen SEKARANG?"
          },
          {
            dari: "🇮🇩 Bung Karno",
            pesan: "Marhaen bukan hanya petani di sawah. Marhaen adalah siapa pun yang tertindas oleh sistem. Jangan terpaku pada bentuk lamanya! Lihatlah realitas sekarang."
          },
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Marhaen sekarang bisa jadi ojek online, buruh pabrik, pedagang kecil yang kalah oleh marketplace, atau petani yang harga gabahnya jatuh. Mereka tetap miskin—tapi bentuknya beda."
          }
        ],
        
        isi: "🌏 SIAPA MARHAEN SEKARANG?\n\n" +
             "┌─────────────────────────────────────────────────────┐\n" +
             "│                   MARHAEN DULU                    │\n" +
             "├─────────────────────────────────────────────────────┤\n" +
             "│ Petani sawah    │ Nelayan        │ Tukang becak   │\n" +
             "└─────────────────────────────────────────────────────┘\n" +
             "                         ↓\n" +
             "┌─────────────────────────────────────────────────────┐\n" +
             "│                  MARHAEN SEKARANG                 │\n" +
             "├─────────────────────────────────────────────────────┤\n" +
             "│ Petani tergencet │ Ojek online    │ Pedagang kecil │\n" +
             "│ harga gabah      │ penghasilan    │ kalah oleh     │\n" +
             "│                  │ tidak menentu  │ marketplace    │\n" +
             "├─────────────────────────────────────────────────────┤\n" +
             "│ Buruh pabrik     │ Nelayan        │ Mahasiswa      │\n" +
             "│ upah minim       │ tangkapan      │ terjerat utang │\n" +
             "│                  │ menipis        │ pendidikan     │\n" +
             "└─────────────────────────────────────────────────────┘\n\n" +
             "⚠️ PERINGATAN BUNG KARNO:\n\n" +
             "'Barangsiapa yang tidak setuju dengan persatuan dan kesatuan yang progresif revolusioner adalah marhaenis gadungan.'\n\n" +
             "📌 Ciri Marhaen Sekarang:\n\n" +
             "1. Bekerja keras tetapi penghasilan tidak cukup\n" +
             "2. Tidak punya kekuatan tawar dalam sistem ekonomi\n" +
             "3. Dieksploitasi oleh sistem (platform, pasar, kebijakan)\n" +
             "4. Hidup dalam ketidakpastian\n\n" +
             "🎯 INTI: Marhaen berubah bentuk, tetapi tetap ada. Tugas kader adalah MENGENALI dan MEMBELA mereka.",
        
        kuisSesi: [
          {
            soal: "Siapa yang termasuk 'Marhaen' di era sekarang?",
            opsi: [
              "Hanya petani dan nelayan di desa",
              "Semua rakyat kecil yang dieksploitasi sistem—petani, buruh, ojek online, pedagang kecil",
              "Hanya orang miskin di perkotaan",
              "Hanya buruh pabrik"
            ],
            benar: 1,
            penjelasan: "Benar! Marhaen di era sekarang mencakup semua rakyat kecil yang dieksploitasi sistem, dalam berbagai bentuk."
          },
          {
            soal: "Apa pesan Bung Karno tentang Marhaenisme dan konsistensi?",
            opsi: [
              "Marhaenisme cukup dengan membaca tulisan Soekarno",
              "Marhaenisme adalah soal konsistensi membela rakyat kecil, bukan sekadar klaim",
              "Marhaenisme hanya untuk anggota partai tertentu",
              "Marhaenisme tidak perlu diperjuangkan lagi"
            ],
            benar: 1,
            penjelasan: "Benar! Marhaenisme bukan soal klaim, tapi soal konsistensi membela rakyat kecil."
          }
        ]
      }
    ],
    
    // Kuis Akhir Modul 1
    kuis: [
      {
        soal: "Siapa yang dimaksud dengan 'Marhaen' menurut Soekarno?",
        opsi: [
          "Hanya buruh pabrik yang tidak punya alat produksi",
          "Kaum melarat Indonesia yang terdiri dari tani kecil, nelayan, pedagang kecil",
          "Semua orang yang bekerja di perkotaan",
          "Kaum bangsawan yang kehilangan kekuasaan"
        ],
        benar: 1,
        penjelasan: "Benar! Marhaen adalah kaum melarat Indonesia—petani kecil, nelayan, pedagang kecil—yang apa-apanya kecil."
      },
      {
        soal: "Apa perbedaan utama antara Marhaen dan Proletar?",
        opsi: [
          "Marhaen bisa memiliki alat produksi kecil, Proletar tidak memiliki alat produksi",
          "Marhaen adalah petani, Proletar adalah buruh",
          "Marhaen ada di perkotaan, Proletar di pedesaan",
          "Tidak ada perbedaan sama sekali"
        ],
        benar: 0,
        penjelasan: "Benar! Perbedaan utamanya: Marhaen BISA memiliki alat produksi kecil, sedangkan Proletar TIDAK PUNYA alat produksi."
      },
      {
        soal: "Siapa yang termasuk 'Marhaen' di era sekarang?",
        opsi: [
          "Hanya petani dan nelayan di desa",
          "Semua rakyat kecil yang dieksploitasi sistem—petani, buruh, ojek online, pedagang kecil",
          "Hanya orang miskin di perkotaan",
          "Hanya buruh pabrik"
        ],
        benar: 1,
        penjelasan: "Benar! Marhaen di era sekarang mencakup semua rakyat kecil yang dieksploitasi sistem."
      },
      {
        soal: "Marhaen miskin karena mereka malas dan tidak mau bekerja keras.",
        opsi: ["Benar", "Salah"],
        benar: 1,
        penjelasan: "Salah! Marhaen miskin BUKAN karena malas, tapi karena SISTEM yang menindas mereka."
      }
    ]
  },

  // ================================================================
  // MODUL 2: MENGGUNAKAN PISAU BEDAH (MDH - Materi KTD)
  // ================================================================
  {
    id: 2,
    judul: "Menggunakan Pisau Bedah (MDH)",
    tag: "KTD - Metode Berpikir",
    ikon: "🔪",
    deskripsiSingkat: "Seperti dokter bedah yang punya pisau, Marhaenis punya MDH untuk membedah realitas. Mari belajar menggunakannya.",
    
    sambutan: {
      teks: "Sebelum kita bedah realitas, kita butuh pisau bedah yang tajam. Dalam Marhaenisme, pisau bedah itu bernama MDH: Materialisme, Dialektika, dan Historis. Mari kita pelajari satu per satu.",
      suara: "Pemandu Gubuk"
    },
    
    subbab: [
      // ---------- SESI 1: MATERIALISME ----------
      {
        id: "materialisme",
        judul: "Materialisme: Bukan Soal 'Matre'",
        durasi: "12 menit",
        media: {
          jenis: ["Animasi", "Ilustrasi"],
          deskripsi: "Animasi perbandingan cara pandang idealisme vs materialisme dengan analogi segelas kopi. Ilustrasi 'Pak Agus' miskin secara objektif.",
          saran: "Buat animasi dengan dua panel: kiri (idealisme) menunjukkan orang tersenyum di gubuk, kanan (materialisme) menunjukkan data angka pendapatan di bawah UMR."
        },
        
        dialog: [
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Sebelum kita masuk ke analisis, kita harus paham dulu cara berpikir Marhaenis. Dan cara berpikir itu dimulai dari MATERIALISME."
          },
          {
            dari: "🧑‍🎓 Pengunjung",
            pesan: "Eh, materialisme itu bukan yang suka harta ya? Matre gitu?",
            efek: "😅 Muncul ikon tertawa"
          },
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Hahaha, BUKAN! Itu salah kaprah. Materialisme di sini BUKAN soal 'matre'—itu kesalahpahaman besar dari lawan-lawan politik Marx dan Soekarno."
          },
          {
            dari: "🇮🇩 Bung Karno",
            pesan: "Materialisme adalah pandangan bahwa kenyataan objektif itu ada di luar kesadaran manusia. Bukan soal harta, tapi soal CARA MELIHAT REALITAS."
          }
        ],
        
        isi: "🔍 APA ITU MATERIALISME?\n\n" +
             "Materialisme adalah pandangan bahwa KENYATAAN OBJEKTIF ADA DI LUAR KESADARAN MANUSIA.\n\n" +
             "Artinya:\n" +
             "• Sesuatu tetap ADA meskipun tidak ada manusia yang melihatnya\n" +
             "• Gravitasi tetap ada, bahkan sebelum Newton menemukannya\n" +
             "• Kemiskinan tetap nyata, meskipun orang miskin itu 'merasa cukup'\n\n" +
             "⚔️ MATERIALISME vs IDEALISME:\n\n" +
             "┌─────────────────────┬─────────────────────┐\n" +
             "│ IDEALISME           │ MATERIALISME        │\n" +
             "├─────────────────────┼─────────────────────┤\n" +
             "│ Kenyataan = hasil   │ Kenyataan = materi  │\n" +
             "│ tangkapan otak      │ itu sendiri         │\n" +
             "├─────────────────────┼─────────────────────┤\n" +
             "│ 'Aku berpikir maka  │ Materi ada, tanpa   │\n" +
             "│  aku ada'           │ perlu dipikirkan    │\n" +
             "├─────────────────────┼─────────────────────┤\n" +
             "│ Kebenaran subjektif │ Kebenaran objektif  │\n" +
             "└─────────────────────┴─────────────────────┘\n\n" +
             "📌 CONTOH KASUS: KEMISKINAN\n\n" +
             "Pendekatan IDEALISME:\n" +
             "➜ 'Pak Agus merasa cukup. Ia pasrah. Jadi Pak Agus sejahtera.'\n\n" +
             "Pendekatan MATERIALISME:\n" +
             "➜ 'Pak Agus berpenghasilan Rp 800.000/bulan, kebutuhan Rp 2.000.000. Anaknya tidak sekolah. Rumahnya bocor. Secara objektif, Pak Agus MISKIN.'\n\n" +
             "🎯 INTI: Seorang Marhaenis tidak cukup hanya melihat 'perasaan'. Ia harus melihat FAKTA OBJEKTIF.",
        
        kuisSesi: [
          {
            soal: "Apa yang dimaksud dengan 'Materialisme' dalam Marhaenisme?",
            opsi: [
              "Sikap mengutamakan kekayaan materi",
              "Pandangan bahwa kenyataan objektif ada di luar kesadaran manusia",
              "Ajaran untuk menjadi kaya",
              "Penolakan terhadap semua hal spiritual"
            ],
            benar: 1,
            penjelasan: "Benar! Materialisme adalah pandangan bahwa realitas objektif ada di luar kesadaran manusia—BUKAN soal 'matre'."
          },
          {
            soal: "Manakah yang mencerminkan pendekatan MATERIALISME?",
            opsi: [
              "'Saya merasa cukup, jadi saya sejahtera'",
              "'Kemiskinan itu nyata karena data menunjukkan pendapatan di bawah UMR'",
              "'Semua tergantung pada bagaimana kita menyikapi hidup'",
              "'Kebahagiaan adalah soal pikiran, bukan materi'"
            ],
            benar: 1,
            penjelasan: "Benar! Pendekatan materialisme melihat fakta objektif (data pendapatan), bukan sekadar perasaan."
          },
          {
            soal: "Materialisme mengajarkan bahwa kesejahteraan cukup diukur dari perasaan subjektif.",
            opsi: ["Benar", "Salah"],
            benar: 1,
            penjelasan: "Salah! Materialisme menolak ukuran subjektif. Kesejahteraan harus diukur secara objektif."
          }
        ]
      },

      // ---------- SESI 2: DIALEKTIKA ----------
      {
        id: "dialektika",
        judul: "Dialektika: Cara Berpikir Gerak",
        durasi: "12 menit",
        media: {
          jenis: ["Animasi", "Diagram"],
          deskripsi: "Animasi roda berputar dengan tesis-antitesis-sintesis. Diagram alur perjuangan Marhaenis dari penjajahan ke kemerdekaan hingga cita-cita.",
          saran: "Buat animasi interaktif: pengguna bisa klik tombol untuk melihat tesis → antitesis → sintesis. Gunakan metafora roda (cokro manggilingan)."
        },
        
        dialog: [
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Materialisme mengajarkan APA yang harus dilihat. Sekarang, Dialektika mengajarkan BAGAIMANA cara melihatnya."
          },
          {
            dari: "🧑‍🎓 Pengunjung",
            pesan: "Dialektika? Kedengarannya rumit. Apa itu?"
          },
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Sebenarnya sederhana. Dialektika adalah cara berpikir tiga tahap: tesis → antitesis → sintesis. Seperti roda yang berputar. Dalam bahasa Jawa, ini mirip 'cokro manggilingan'."
          }
        ],
        
        isi: "🔍 APA ITU DIALEKTIKA?\n\n" +
             "Dialektika adalah cara berpikir tiga tahap:\n\n" +
             "     TESIS (pernyataan)\n" +
             "         ↓\n" +
             "     ANTITESIS (sanggahan/pertentangan)\n" +
             "         ↓\n" +
             "     SINTESIS (perpaduan baru yang lebih tinggi)\n\n" +
             "📌 CONTOH SEDERHANA: PULAU\n\n" +
             "┌──────────────┬──────────────────────────────────┐\n" +
             "│ TESIS        │ Pulau adalah tanah              │\n" +
             "├──────────────┼──────────────────────────────────┤\n" +
             "│ ANTITESIS    │ Pulau bukan hanya tanah—di      │\n" +
             "│              │ pinggirnya ada air              │\n" +
             "├──────────────┼──────────────────────────────────┤\n" +
             "│ SINTESIS     │ Pulau adalah tanah yang         │\n" +
             "│              │ dikelilingi air                 │\n" +
             "└──────────────┴──────────────────────────────────┘\n\n" +
             "🔄 Proses berlanjut tanpa henti.\n\n" +
             "🌏 DIALEKTIKA DALAM MASYARAKAT:\n\n" +
             "Perkembangan masyarakat digerakkan oleh KONTRADIKSI INTERNAL.\n\n" +
             "┌──────────────┬───────────────┬──────────────────┐\n" +
             "│ TESIS        │ ANTITESIS     │ SINTESIS         │\n" +
             "├──────────────┼───────────────┼──────────────────┤\n" +
             "│ Feodalisme   │ Kelas borjuis │ Kapitalisme      │\n" +
             "├──────────────┼───────────────┼──────────────────┤\n" +
             "│ Kapitalisme  │ Kesadaran     │ Sosialisme       │\n" +
             "│              │ kelas buruh   │ (cita-cita)      │\n" +
             "└──────────────┴───────────────┴──────────────────┘\n\n" +
             "📌 CONTOH PERJUANGAN MARHAENIS:\n\n" +
             "1. TESIS: Rakyat Indonesia dijajah Belanda\n" +
             "2. ANTITESIS: Gerakan nasional melawan penjajah\n" +
             "3. SINTESIS: Indonesia merdeka\n\n" +
             "🔄 PROSES BERLANJUT:\n" +
             "4. TESIS BARU: Merdeka tapi masih ada kapitalisme\n" +
             "5. ANTITESIS BARU: Perjuangan melawan kapitalisme\n" +
             "6. SINTESIS BARU: Masyarakat adil & makmur\n\n" +
             "🎯 INTI: Marhaenis tidak boleh berpikir statis. Dunia terus bergerak.",
        
        kuisSesi: [
          {
            soal: "Apa yang dimaksud dengan 'Dialektika'?",
            opsi: [
              "Cara berpikir satu arah yang tidak berubah",
              "Cara berpikir tiga tahap: tesis → antitesis → sintesis",
              "Cara berpikir yang hanya menerima satu kebenaran",
              "Cara berpikir yang menolak perubahan"
            ],
            benar: 1,
            penjelasan: "Benar! Dialektika adalah cara berpikir tiga tahap: tesis → antitesis → sintesis."
          },
          {
            soal: "Menurut dialektika, apa yang menggerakkan perkembangan sejarah?",
            opsi: [
              "Keinginan tokoh-tokoh besar",
              "Kontradiksi internal dalam masyarakat",
              "Takdir Tuhan",
              "Keberuntungan"
            ],
            benar: 1,
            penjelasan: "Benar! Perkembangan sejarah digerakkan oleh kontradiksi internal dalam masyarakat."
          },
          {
            soal: "Dalam dialektika, sintesis muncul sebagai hasil dari...",
            opsi: [
              "Pengulangan sejarah masa lalu",
              "Pertentangan antara tesis dan antitesis",
              "Keputusan individu tanpa proses",
              "Struktur ekonomi yang tetap"
            ],
            benar: 1,
            penjelasan: "Benar! Sintesis lahir dari pertentangan tesis dan antitesis."
          }
        ]
      },

      // ---------- SESI 3: BASIS & SUPRSTRUKTUR ----------
      {
        id: "basis-suprastruktur",
        judul: "Basis & Suprastruktur",
        durasi: "12 menit",
        media: {
          jenis: ["Diagram", "Ilustrasi"],
          deskripsi: "Diagram piramida: basis di bawah (ekonomi) dan suprastruktur di atas (politik, budaya). Ilustrasi segelas kopi sebagai analogi lapisan realitas.",
          saran: "Buat diagram interaktif: pengguna bisa hover/klik untuk melihat penjelasan setiap lapisan. Gunakan warna gradasi dari bawah ke atas."
        },
        
        dialog: [
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Dua pisau bedah sudah kita pelajari: Materialisme dan Dialektika. Sekarang alat analisis ketiga: Basis-Suprastruktur."
          },
          {
            dari: "🧑‍🎓 Pengunjung",
            pesan: "Apa itu Basis dan Suprastruktur?"
          },
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Coba bayangkan segelas kopi. Ada realitas fisika (atom), kimia, biologi, dan ekonomi. Itu seperti lapisan. Dalam masyarakat, lapisan paling dasar adalah EKONOMI. Itu BASIS."
          }
        ],
        
        isi: "🔍 APA ITU BASIS DAN SUPRSTRUKTUR?\n\n" +
             "┌──────────────────────────────────┬──────────────────────────────────┐\n" +
             "│ BASIS                           │ SUPRSTRUKTUR                    │\n" +
             "├──────────────────────────────────┼──────────────────────────────────┤\n" +
             "│ Sistem EKONOMI masyarakat       │ Politik, Budaya, Hukum, Agama   │\n" +
             "├──────────────────────────────────┼──────────────────────────────────┤\n" +
             "│ Produksi, Distribusi, Konsumsi  │ Pemerintahan, Pendidikan, Media │\n" +
             "├──────────────────────────────────┼──────────────────────────────────┤\n" +
             "│ PRAKONDISI untuk yang lain      │ BERADA DI ATAS basis            │\n" +
             "└──────────────────────────────────┴──────────────────────────────────┘\n\n" +
             "💡 LOGIKA DASAR:\n\n" +
             "'Tidak mungkin ada politik dan budaya dari kumpulan mayat.'\n\n" +
             "Manusia harus bisa HIDUP dulu (ekonomi) → baru bisa berpolitik.\n\n" +
             "🔗 HUBUNGAN TIMBAL BALIK:\n\n" +
             "┌──────────────────────────────────┬──────────────────────────────────┐\n" +
             "│ ARAH                            │ SIFAT                           │\n" +
             "├──────────────────────────────────┼──────────────────────────────────┤\n" +
             "│ Basis → Suprastruktur           │ ABSOLUT (menentukan)            │\n" +
             "├──────────────────────────────────┼──────────────────────────────────┤\n" +
             "│ Suprastruktur → Basis           │ RELATIF (mempengaruhi)          │\n" +
             "└──────────────────────────────────┴──────────────────────────────────┘\n\n" +
             "📌 CONTOH KASUS: KRISIS PANGAN\n\n" +
             "BASIS (Ekonomi):\n" +
             "• Petani gagal panen, harga pupuk mahal, harga gabah jatuh\n\n" +
             "SUPRSTRUKTUR (Politik):\n" +
             "• Pemerintah mengimpor beras, subsidi pupuk tidak tepat\n\n" +
             "🔄 TARIK-MENARIK:\n" +
             "1. Ekonomi (basis) → Kebijakan impor (suprastruktur)\n" +
             "2. Impor (suprastruktur) → Petani makin terpuruk (basis)\n" +
             "3. Petani terpuruk (basis) → Demonstrasi petani (suprastruktur)\n\n" +
             "🎯 INTI: Marhaenis tidak bisa hanya fokus pada politik tanpa melihat ekonomi.",
        
        kuisSesi: [
          {
            soal: "Apa yang dimaksud dengan 'Basis' dalam teori basis-suprastruktur?",
            opsi: [
              "Sistem politik dan pemerintahan",
              "Sistem ekonomi masyarakat (produksi, distribusi, konsumsi)",
              "Kebudayaan, seni, dan agama",
              "Lembaga-lembaga sosial"
            ],
            benar: 1,
            penjelasan: "Benar! Basis adalah sistem ekonomi yang menjadi prakondisi bagi suprastruktur."
          },
          {
            soal: "Manakah contoh relasi 'suprastruktur mempengaruhi basis'?",
            opsi: [
              "Petani menghasilkan beras → lahir kebijakan pertanian",
              "Kebijakan impor pangan → membuat petani bangkrut",
              "Buruh mogok → perusahaan merugi",
              "Panen raya → harga pangan turun"
            ],
            benar: 1,
            penjelasan: "Benar! Kebijakan impor (suprastruktur) mempengaruhi kondisi ekonomi petani (basis)."
          },
          {
            soal: "Suprastruktur sama sekali tidak pernah bisa mempengaruhi basis.",
            opsi: ["Benar", "Salah"],
            benar: 1,
            penjelasan: "Salah! Suprastruktur bisa mempengaruhi basis, meskipun sifatnya relatif."
          }
        ]
      }
    ],
    
    // Kuis Akhir Modul 2
    kuis: [
      {
        soal: "Apa yang dimaksud dengan 'Materialisme' dalam Marhaenisme?",
        opsi: [
          "Mengejar kekayaan materi",
          "Pandangan bahwa kenyataan objektif ada di luar kesadaran manusia",
          "Ajaran untuk menjadi kaya",
          "Penolakan terhadap semua hal spiritual"
        ],
        benar: 1,
        penjelasan: "Benar! Materialisme adalah pandangan bahwa realitas objektif ada di luar kesadaran manusia."
      },
      {
        soal: "Apa yang menggerakkan perubahan sosial menurut dialektika?",
        opsi: [
          "Keinginan pemimpin besar",
          "Kontradiksi internal dalam masyarakat",
          "Takdir",
          "Keberuntungan"
        ],
        benar: 1,
        penjelasan: "Benar! Perubahan sosial digerakkan oleh kontradiksi internal dalam masyarakat."
      },
      {
        soal: "Apa fungsi 'Basis' dalam teori basis-suprastruktur?",
        opsi: [
          "Sistem politik masyarakat",
          "Sistem ekonomi sebagai prakondisi bagi suprastruktur",
          "Kebudayaan dan seni",
          "Lembaga hukum"
        ],
        benar: 1,
        penjelasan: "Benar! Basis adalah sistem ekonomi sebagai prakondisi bagi suprastruktur."
      },
      {
        soal: "Seorang Marhaenis harus melihat fakta objektif, bukan hanya perasaan. Ini adalah ajaran dari...",
        opsi: ["Dialektika", "Materialisme", "Basis-Suprastruktur", "Historis"],
        benar: 1,
        penjelasan: "Benar! Materialisme mengajarkan kita untuk melihat fakta objektif."
      }
    ]
  },

  // ================================================================
  // MODUL 3: TERCETUSLAH MARHAENISME (Materi Inti KTD)
  // ================================================================
  {
    id: 3,
    judul: "Tercetuslah Marhaenisme",
    tag: "KTD - Inti Marhaenisme",
    ikon: "🔥",
    deskripsiSingkat: "Setelah mengenal Marhaen dan belajar MDH, sekarang kita masuk ke inti: apa itu Marhaenisme dan bagaimana memperjuangkannya.",
    
    sambutan: {
      teks: "Sekarang kita sudah punya dua bekal: kenal dengan Marhaen, dan punya pisau bedah MDH. Saatnya kita masuk ke ruang inti: apa itu Marhaenisme, dan bagaimana kita memperjuangkannya.",
      suara: "Pemandu Gubuk"
    },
    
    subbab: [
      // ---------- SESI 1: TIGA ASAS ----------
      {
        id: "tiga-asas",
        judul: "Tiga Asas Marhaenisme",
        durasi: "12 menit",
        media: {
          jenis: ["Infografis", "Poster"],
          deskripsi: "Poster tiga pilar Marhaenisme dengan ikon: Sosio-Nasionalisme (bendera), Sosio-Demokrasi (palu & arit bersayap), Ketuhanan (simbol keagamaan universal).",
          saran: "Buat visual dengan tiga pilar/tiang yang saling menopang. Tambahkan kutipan Bung Karno di setiap pilar."
        },
        
        dialog: [
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Ini adalah fondasi Marhaenisme yang tidak bisa diganggu gugat. Tiga pilar yang menjadi dasar segalanya."
          },
          {
            dari: "🇮🇩 Bung Karno",
            pesan: "Marhaenisme berdiri di atas tiga asas: Sosio-Nasionalisme, Sosio-Demokrasi, dan Ketuhanan Yang Maha Esa. Kalian harus paham ini!"
          }
        ],
        
        isi: "🔍 TIGA ASAS MARHAENISME:\n\n" +
             "1️⃣ SOSIO-NASIONALISME:\n" +
             "   Nasionalisme yang BERPERIKEMANUSIAAN, tidak sempit atau chauvinistik.\n\n" +
             "   • Nasionalisme Indonesia sejiwa dengan budi nurani sosial\n" +
             "   • Internasionalisme adalah 'taman sari' dari nasionalisme\n" +
             "   • Bagian dari perjuangan umat manusia melawan penjajahan\n\n" +
             "   ⚠️ Jangan sampai nasionalisme menjadi chauvinistik—membela kapitalis nasional secara membabi buta.\n\n" +
             "2️⃣ SOSIO-DEMOKRASI:\n" +
             "   Demokrasi ala Indonesia yang berakar pada MUSYAWARAH MUFAKAT.\n\n" +
             "   • Bukan demokrasi liberal yang bertumpu pada kekuatan mayoritas\n" +
             "   • Demokrasi tidak hanya POLITIK, tetapi juga SOSIAL dan EKONOMI\n" +
             "   • Sejalan dengan TRISAKTI\n\n" +
             "3️⃣ KETUHANAN YANG MAHA ESA:\n" +
             "   Marhaenisme percaya pada eksistensi Tuhan dan menjunjung tinggi kebebasan berkeyakinan.\n\n" +
             "   • Ada perbedaan antara 'BERKETUHANAN' dan 'BERAGAMA'\n\n" +
             "📌 KUTIPAN BUNG KARNO:\n\n" +
             "'Kalau Pancasila diperas menjadi Trisila: Sosio-Nasionalisme, Sosio-Demokrasi, dan Ketuhanan.'\n\n" +
             "🎯 INTI: Tiga asas ini adalah fondasi yang tidak bisa diganggu gugat.",
        
        kuisSesi: [
          {
            soal: "Tiga asas utama Marhaenisme adalah...",
            opsi: [
              "Nasionalisme, Komunisme, dan Kapitalisme",
              "Sosio-Nasionalisme, Sosio-Demokrasi, dan Ketuhanan Yang Maha Esa",
              "Feodalisme, Liberalisme, dan Sosialisme",
              "Monarki, Teokrasi, dan Demokrasi"
            ],
            benar: 1,
            penjelasan: "Benar! Tiga asas Marhaenisme adalah Sosio-Nasionalisme, Sosio-Demokrasi, dan Ketuhanan Yang Maha Esa."
          },
          {
            soal: "Sosio-Demokrasi menekankan bahwa demokrasi harus...",
            opsi: [
              "Berhenti pada hak pilih di bilik suara",
              "Menjangkau keadilan ekonomi, bukan sekadar politik",
              "Diserahkan pada mekanisme pasar",
              "Dijalankan tanpa rakyat"
            ],
            benar: 1,
            penjelasan: "Benar! Sosio-Demokrasi menuntut demokrasi yang tidak hanya politik tetapi juga sosial dan ekonomi."
          }
        ]
      },

      // ---------- SESI 2: 7 ASAS PERJUANGAN ----------
      {
        id: "tujuh-asas",
        judul: "7 Asas Perjuangan Marhaenisme",
        durasi: "12 menit",
        media: {
          jenis: ["Kartu", "Infografis"],
          deskripsi: "7 kartu asas perjuangan dengan ikon masing-masing. Bisa di-flip untuk melihat penjelasan detail.",
          saran: "Buat kartu digital yang bisa diklik untuk membalik. Desain seperti kartu remi dengan logo GMNI di belakang."
        },
        
        dialog: [
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Azas adalah cita-cita. Tapi bagaimana cara mencapainya? Di sinilah asas perjuangan berperan."
          },
          {
            dari: "🇮🇩 Bung Karno",
            pesan: "Azas perjuangan adalah jembatan antara cita-cita ideal dengan realitas. Jika keadaan berubah, asas perjuangan harus ikut berubah."
          }
        ],
        
        isi: "⚔️ 7 ASAS PERJUANGAN MARHAENISME:\n\n" +
             "1️⃣ RADIKAL-REVOLUSIONER: Perubahan mendasar ('menjebol lalu membangun dari awal')\n\n" +
             "2️⃣ MACHTSVORMING: Pembentukan kekuatan organisasi dan massa\n\n" +
             "3️⃣ MACHTSAANWENDING: Penggunaan kekuatan yang terbentuk\n\n" +
             "4️⃣ MASSA-AKSI: Gerakan kolektif massa untuk aksi nyata\n\n" +
             "5️⃣ NON-KOOPERATIF: Menolak kerja sama dengan pemerintah kolonial\n\n" +
             "6️⃣ SELF-HELP: Menolong diri sendiri dalam mengatasi masalah\n\n" +
             "7️⃣ SELF-RELIANCE: Mandiri, tidak bergantung pada pihak lain\n\n" +
             "⚠️ CATATAN: Ketujuh asas ini DINAMIS dan mengikuti perkembangan zaman.\n\n" +
             "'Jika nanti keadaan berubah, maka mungkin sangat perlu diubah azas perjuangan itu sendiri.' — Bung Karno\n\n" +
             "📌 CONTOH APLIKASI KONTEMPORER:\n\n" +
             "┌─────────────────────┬─────────────────────────────────┐\n" +
             "│ ASAS PERJUANGAN    │ APLIKASI KONTEMPORER           │\n" +
             "├─────────────────────┼─────────────────────────────────┤\n" +
             "│ Machtsvorming      │ Membangun organisasi & jaringan │\n" +
             "├─────────────────────┼─────────────────────────────────┤\n" +
             "│ Massa-Aksi         │ Demonstrasi, petisi, advokasi  │\n" +
             "├─────────────────────┼─────────────────────────────────┤\n" +
             "│ Self-Reliance      │ Gerakan berdikari ekonomi      │\n" +
             "└─────────────────────┴─────────────────────────────────┘",
        
        kuisSesi: [
          {
            soal: "Asas perjuangan 'Non-Kooperatif' berarti...",
            opsi: [
              "Bekerja sama dengan pemerintah kolonial",
              "Tidak mau bekerja sama dengan pemerintah kolonial",
              "Menerima bantuan dari pihak asing",
              "Menjalin kerjasama dengan kapitalis"
            ],
            benar: 1,
            penjelasan: "Benar! Non-Kooperatif adalah strategi menolak kerja sama dengan pemerintah kolonial."
          },
          {
            soal: "Apa perbedaan antara 'azas' dan 'azas perjuangan'?",
            opsi: [
              "Tidak ada perbedaan",
              "Azas adalah cita-cita ideal, azas perjuangan adalah strategi",
              "Azas perjuangan lebih penting",
              "Azas adalah strategi, azas perjuangan adalah tujuan"
            ],
            benar: 1,
            penjelasan: "Benar! Azas adalah cita-cita ideal, azas perjuangan adalah strategi untuk mencapainya."
          }
        ]
      },

      // ---------- SESI 3: MARHAENISME VS MARXISME ----------
      {
        id: "marhaenisme-vs-marxisme",
        judul: "Marhaenisme vs Marxisme",
        durasi: "12 menit",
        media: {
          jenis: ["Tabel Perbandingan", "Ilustrasi"],
          deskripsi: "Tabel perbandingan Marhaenisme dan Marxisme. Ilustrasi Bung Karno dan Karl Marx berdialog.",
          saran: "Buat ilustrasi dua tokoh: Bung Karno dengan latar Indonesia (sawah, gunung) dan Marx dengan latar Eropa (pabrik, industri)."
        },
        
        dialog: [
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Sering ada pertanyaan: 'Marhaenisme itu kan cuma Marxisme versi Indonesia?' Mari kita bedah."
          },
          {
            dari: "🇮🇩 Bung Karno",
            pesan: "Aku mengagumi Marx. Tapi aku tidak meniru buta. Marhaenisme adalah Marxisme yang diterapkan sesuai dengan kondisi Indonesia—bukan salinan!"
          }
        ],
        
        isi: "🔍 PERSAMAAN MARHAENISME & MARXISME:\n\n" +
             "┌─────────────────────┬─────────────────────────────────┐\n" +
             "│ ASPEK               │ PERSAMAAN                       │\n" +
             "├─────────────────────┼─────────────────────────────────┤\n" +
             "│ Analisis Kelas      │ Masyarakat terbagi dalam kelas │\n" +
             "├─────────────────────┼─────────────────────────────────┤\n" +
             "│ Anti-Kapitalisme    │ Menolak sistem kapitalis       │\n" +
             "├─────────────────────┼─────────────────────────────────┤\n" +
             "│ Anti-Imperialisme   │ Menolak penjajahan/eksploitasi │\n" +
             "├─────────────────────┼─────────────────────────────────┤\n" +
             "│ Perubahan           │ Menghendaki perubahan mendasar │\n" +
             "│ Revolusioner        │                                 │\n" +
             "└─────────────────────┴─────────────────────────────────┘\n\n" +
             "⚔️ PERBEDAAN:\n\n" +
             "┌─────────────────────┬─────────────────┬───────────────┐\n" +
             "│ ASPEK               │ MARXISME        │ MARHAENISME   │\n" +
             "├─────────────────────┼─────────────────┼───────────────┤\n" +
             "│ Subjek Perjuangan   │ Proletar        │ Marhaen       │\n" +
             "├─────────────────────┼─────────────────┼───────────────┤\n" +
             "│ Kepemilikan Alat    │ TIDAK punya     │ BISA punya    │\n" +
             "│ Produksi            │                 │ kecil          │\n" +
             "├─────────────────────┼─────────────────┼───────────────┤\n" +
             "│ Konteks Lahir       │ Eropa industri  │ Indonesia     │\n" +
             "│                     │                 │ agraris-      │\n" +
             "│                     │                 │ kolonial      │\n" +
             "├─────────────────────┼─────────────────┼───────────────┤\n" +
             "│ Nasionalisme        │ (Tergantung     │ SOSIO-        │\n" +
             "│                     │ aliran)         │ NASIONALISME  │\n" +
             "└─────────────────────┴─────────────────┴───────────────┘\n\n" +
             "🤔 KONTRADIKASI YANG SERING DITANYAKAN:\n\n" +
             "'Jika Marhaenisme adalah Marxisme, kenapa Marhaen punya alat produksi?'\n\n" +
             "JAWABAN:\n" +
             "1. Marhaenisme tidak melihat alat produksi sebagai satu-satunya ukuran kelas\n" +
             "2. Fokus Marhaenisme: 'Siapa yang dieksploitasi sistem?'\n" +
             "3. Konteks Indonesia berbeda dengan Eropa\n\n" +
             "📌 KUTIPAN DEKLARASI MARHAENISME 1964:\n\n" +
             "'Marhaenisme adalah Marxisme yang diterapkan sesuai dengan kondisi Indonesia.'\n\n" +
             "🎯 KESIMPULAN: Marhaenisme lebih luas dan sesuai realitas Indonesia.",
        
        kuisSesi: [
          {
            soal: "Apa hubungan antara Marhaenisme dan Marxisme?",
            opsi: [
              "Marhaenisme adalah salinan persis dari Marxisme",
              "Marhaenisme adalah Marxisme yang diterapkan sesuai kondisi Indonesia",
              "Marhaenisme bertentangan dengan Marxisme",
              "Tidak ada hubungan"
            ],
            benar: 1,
            penjelasan: "Benar! Marhaenisme adalah Marxisme yang diterapkan sesuai kondisi Indonesia."
          },
          {
            soal: "Seorang petani yang memiliki tanah kecil dan tetap miskin disebut...",
            opsi: ["Proletar", "Marhaen", "Borjuis", "Feodal"],
            benar: 1,
            penjelasan: "Benar! Petani dengan tanah kecil yang tetap miskin disebut Marhaen."
          }
        ]
      },

      // ---------- SESI 4: ETIKA POLITIK & RELEVANSI ----------
      {
        id: "etika-relevansi",
        judul: "Etika Politik & Relevansi Marhaenisme",
        durasi: "12 menit",
        media: {
          jenis: ["Kutipan Visual", "Video"],
          deskripsi: "Kutipan Bung Karno 'Barang siapa yang berpihak pada kaum melarat...' dengan latar foto rakyat kecil. Video singkat tentang Marhaen kekinian.",
          saran: "Buat tipografi kutipan dengan font klasik/retro. Video kompilasi foto Marhaen dari berbagai daerah dengan narasi pengantar."
        },
        
        dialog: [
          {
            dari: "🧑‍🌾 Pemandu Gubuk",
            pesan: "Setelah paham teorinya, sekarang kita bicara tentang SIKAP. Bagaimana seharusnya seorang Marhaenis bersikap?"
          },
          {
            dari: "🇮🇩 Bung Karno",
            pesan: "'Barang siapa yang berpihak pada kaum melarat itu, kaum marhaen itu, kaum tani itu, mereka adalah marhaenis.' Itulah etika politik Marhaenis."
          }
        ],
        
        isi: "👤 SIAPA MARHAENIS?\n\n" +
             "MARHAENIS adalah setiap orang Indonesia yang menjalankan dan memperjuangkan Marhaenisme.\n\n" +
             "⚖️ ETIKA POLITIK MARHAENIS:\n\n" +
             "Menuntut KEBERPIHAKAN yang tegas kepada golongan Marhaen.\n\n" +
             "Seorang kader diharapkan:\n" +
             "• Menempatkan kepentingan rakyat kecil di atas kepentingan pribadi\n" +
             "• Menolak segala bentuk penindasan\n" +
             "• Berpihak pada kaum melarat, kaum tani, dan kaum tertindas\n\n" +
             "📌 KUTIPAN BUNG KARNO:\n\n" +
             "'Barang siapa yang berpihak pada kaum melarat itu, kaum marhaen itu, kaum tani itu, mereka adalah marhaenis.'\n\n" +
             "🌏 RELEVANSI DI ERA SEKARANG:\n\n" +
             "┌─────────────────────┬─────────────────────────────────┐\n" +
             "│ DULU (1930-an)     │ SEKARANG                        │\n" +
             "├─────────────────────┼─────────────────────────────────┤\n" +
             "│ Imperialisme fisik  │ Neokolonialisme (ekonomi &     │\n" +
             "│ (penjajahan)       │ digital)                       │\n" +
             "├─────────────────────┼─────────────────────────────────┤\n" +
             "│ Feodalisme kuat    │ Oligarki (penguasa + pengusaha)│\n" +
             "├─────────────────────┼─────────────────────────────────┤\n" +
             "│ Marhaen: petani,   │ Marhaen: ojek online, buruh    │\n" +
             "│ nelayan            │ pabrik, pedagang kecil         │\n" +
             "└─────────────────────┴─────────────────────────────────┘\n\n" +
             "⚠️ DUA KESALAHAN FATAL:\n\n" +
             "1. Menganggap Marhaenisme sebagai DOGMA → Pemikiran beku\n" +
             "2. Tidak menafsirkan secara KREATIF → Marhaenisme mati\n\n" +
             "✅ SOLUSI: Berikan tafsir kreatif! Kontekstualisasi ulang sesuai zaman.\n\n" +
             "📌 MOTTO PERJUANGAN:\n\n" +
             "'Kennis zonder daad is doelloos. Daad zonder kennis is richtingloos.'\n" +
             "(Pengetahuan tanpa tindakan tidak bertujuan, tindakan tanpa pengetahuan tidak berarah.)\n\n" +
             "🎯 INTI: Marhaenisme bukan soal klaim, tapi KONSISTENSI MEMBELA RAKYAT KECIL.",
        
        kuisSesi: [
          {
            soal: "Seorang Marhaenis adalah...",
            opsi: [
              "Orang yang hanya membaca tulisan Soekarno",
              "Setiap orang Indonesia yang menjalankan Marhaenisme",
              "Anggota partai tertentu",
              "Orang yang kaya dan berkuasa"
            ],
            benar: 1,
            penjelasan: "Benar! Marhaenis adalah setiap orang yang menjalankan Marhaenisme."
          },
          {
            soal: "Apa kesalahan terbesar dalam memahami Marhaenisme?",
            opsi: [
              "Menganggapnya sebagai teori ilmiah",
              "Menganggapnya sebagai dogma mati",
              "Menganggapnya relevan dengan zaman",
              "Menganggapnya sebagai metode berpikir"
            ],
            benar: 1,
            penjelasan: "Benar! Kesalahan terbesar adalah menganggap Marhaenisme sebagai dogma mati."
          },
          {
            soal: "Apa motto perjuangan GMNI?",
            opsi: [
              "'Kennis zonder daad is doelloos. Daad zonder kennis is richtingloos.'",
              "'Merdeka atau Mati!'",
              "'Sekali Merdeka Tetap Merdeka!'",
              "'Bersatu Kita Teguh'"
            ],
            benar: 0,
            penjelasan: "Benar! Pengetahuan tanpa tindakan tidak bertujuan, tindakan tanpa pengetahuan tidak berarah."
          }
        ]
      }
    ],
    
    // Kuis Akhir Modul 3
    kuis: [
      {
        soal: "Tiga asas utama Marhaenisme adalah...",
        opsi: [
          "Nasionalisme, Komunisme, Kapitalisme",
          "Sosio-Nasionalisme, Sosio-Demokrasi, Ketuhanan Yang Maha Esa",
          "Feodalisme, Liberalisme, Sosialisme",
          "Monarki, Teokrasi, Demokrasi"
        ],
        benar: 1,
        penjelasan: "Benar! Tiga asas Marhaenisme adalah Sosio-Nasionalisme, Sosio-Demokrasi, dan Ketuhanan Yang Maha Esa."
      },
      {
        soal: "Apa hubungan antara Marhaenisme dan Marxisme?",
        opsi: [
          "Marhaenisme salinan persis Marxisme",
          "Marhaenisme adalah Marxisme yang diterapkan sesuai kondisi Indonesia",
          "Marhaenisme bertentangan dengan Marxisme",
          "Tidak ada hubungan"
        ],
        benar: 1,
        penjelasan: "Benar! Marhaenisme adalah Marxisme yang diterapkan sesuai kondisi Indonesia."
      },
      {
        soal: "Apa perbedaan utama antara Marhaen dan Proletar?",
        opsi: [
          "Marhaen bisa memiliki alat produksi kecil, Proletar tidak",
          "Marhaen adalah petani, Proletar adalah buruh",
          "Marhaen di kota, Proletar di desa",
          "Tidak ada perbedaan"
        ],
        benar: 0,
        penjelasan: "Benar! Marhaen BISA memiliki alat produksi kecil, Proletar TIDAK PUNYA."
      },
      {
        soal: "Apa yang dituntut oleh Etika Politik Marhaenis?",
        opsi: [
          "Keberpihakan pada kepentingan pribadi",
          "Keberpihakan yang tegas kepada golongan Marhaen",
          "Netralitas",
          "Mendukung semua kebijakan pemerintah"
        ],
        benar: 1,
        penjelasan: "Benar! Etika Politik Marhaenis menuntut keberpihakan yang tegas kepada golongan Marhaen."
      },
      {
        soal: "Apa motto perjuangan GMNI?",
        opsi: [
          "'Kennis zonder daad is doelloos. Daad zonder kennis is richtingloos.'",
          "'Merdeka atau Mati!'",
          "'Sekali Merdeka Tetap Merdeka!'",
          "'Bersatu Kita Teguh'"
        ],
        benar: 0,
        penjelasan: "Benar! Pengetahuan tanpa tindakan tidak bertujuan, tindakan tanpa pengetahuan tidak berarah."
      }
    ]
  }
];

/* ================================================================
   FUNGSI UTILITY
   ================================================================ */

// ---------- PROGRES BELAJAR (localStorage) ----------
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
  if (!modul) return "belum";
  if (selesai.length === 0) return "belum";
  if (selesai.length >= modul.subbab.length) return "selesai";
  return "berjalan";
}

// ---------- NAV TAB ----------
function tandaiTabAktif() {
  const halaman = document.body.dataset.halaman;
  document.querySelectorAll("nav.tab-nav a").forEach((a) => {
    if (a.dataset.tab === halaman) a.classList.add("active");
  });
}

// ---------- RENDER DAFTAR MODUL ----------
function renderDaftarModul() {
  const kontainer = document.getElementById("daftar-modul-list");
  if (!kontainer) return;

  const label = { selesai: "✅ Selesai", berjalan: "🔄 Sedang berjalan", belum: "⬜ Belum dimulai" };
  const kelas = { selesai: "status-selesai", berjalan: "status-berjalan", belum: "status-belum" };

  kontainer.innerHTML = DATA_MODUL.map((m) => {
    const status = statusModul(m.id);
    return `
      <a class="module-card" href="belajar.html?modul=${m.id}">
        <div>
          <div class="module-number">${m.ikon} Modul 0${m.id}</div>
          <h3>${m.judul}</h3>
          <div class="module-tag">${m.tag}</div>
          <p class="module-desc">${m.deskripsiSingkat}</p>
        </div>
        <span class="status-badge ${kelas[status]}">${label[status]}</span>
      </a>
    `;
  }).join("");
}

// ---------- RENDER HALAMAN BELAJAR ----------
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

  document.getElementById("sidebar-modul-label").textContent = `${modul.ikon} Modul 0${modul.id} · ${modul.judul}`;

  // Render sidebar
  sidebarEl.innerHTML = modul.subbab.map((s, i) => {
    const aktif = i === subIndex ? "aktif" : "";
    const selesaiKelas = selesaiList.includes(s.id) ? "selesai" : "";
    const ikonSelesai = selesaiList.includes(s.id) ? "✅ " : "";
    return `<li><a href="belajar.html?modul=${modul.id}&sub=${i}" class="${aktif} ${selesaiKelas}">${ikonSelesai}${s.judul}</a></li>`;
  }).join("") + `<li><a href="kuis.html?modul=${modul.id}">📝 Kuis modul ${modul.id}</a></li>`;

  // Render konten
  const sub = modul.subbab[subIndex];
  const isiDenganBr = sub.isi.replace(/\n/g, '<br>');

  // Tampilkan sambutan jika di subbab pertama
  let sambutanHtml = "";
  if (subIndex === 0 && modul.sambutan) {
    sambutanHtml = `
      <div class="sambutan-box">
        <span class="sambutan-ikon">🧑‍🌾</span>
        <p><em>"${modul.sambutan.teks}"</em></p>
        <span class="sambutan-sumber">— ${modul.sambutan.suara}</span>
      </div>
    `;
  }

  // Tampilkan dialog jika ada
  let dialogHtml = "";
  if (sub.dialog && sub.dialog.length > 0) {
    dialogHtml = `<div class="dialog-box">`;
    sub.dialog.forEach((d) => {
      const emoji = d.dari.includes("Bung Karno") ? "🇮🇩" : 
                    d.dari.includes("Pemandu") ? "🧑‍🌾" : "🧑‍🎓";
      dialogHtml += `
        <div class="dialog-item">
          <span class="dialog-speaker">${emoji} ${d.dari}</span>
          <p class="dialog-message">${d.pesan}</p>
          ${d.efek ? `<span class="dialog-efek">${d.efek}</span>` : ""}
        </div>
      `;
    });
    dialogHtml += `</div>`;
  }

  // Tampilkan info media
  let mediaHtml = "";
  if (sub.media) {
    mediaHtml = `
      <div class="media-box">
        <span class="media-ikon">🎬</span>
        <div>
          <strong>Media pendukung:</strong> ${sub.media.jenis.join(" · ")}
          <br><span class="media-desk">${sub.media.deskripsi}</span>
          <br><span class="media-saran">💡 Saran: ${sub.media.saran}</span>
        </div>
      </div>
    `;
  }

  kontenEl.innerHTML = `
    <div class="subbab-label">${modul.ikon} Sub-bab ${subIndex + 1} dari ${modul.subbab.length} · ⏱ ${sub.durasi || "10 menit"}</div>
    ${sambutanHtml}
    <h2>${sub.judul}</h2>
    ${dialogHtml}
    <div class="materi-inti">
      <p>${isiDenganBr}</p>
    </div>
    ${mediaHtml}
    <div class="nav-buttons">
      <button class="btn-kembali" id="btn-kembali" ${subIndex === 0 ? "disabled" : ""}>&larr; Kembali</button>
      <button class="cta-button" id="btn-lanjut">${subIndex === modul.subbab.length - 1 ? "📝 Lanjut ke kuis" : "Lanjut &rarr;"}</button>
    </div>
  `;

  // Tandai selesai
  tandaiSubbabSelesai(modul.id, sub.id);

  // Event listener
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

// ---------- RENDER HALAMAN KUIS ----------
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
      <div class="quiz-header">
        <span class="quiz-modul">${modul.ikon} Modul ${modul.id}</span>
        <span class="quiz-progress">Soal ${sesi.indeks + 1} dari ${modul.kuis.length}</span>
      </div>
      <div class="quiz-question">${soal.soal}</div>
      <div class="quiz-options" id="opsi-list">
        ${soal.opsi.map((opsi, i) => `
          <button class="quiz-option" data-index="${i}">
            <span class="huruf">${huruf[i]}</span> ${opsi}
          </button>
        `).join("")}
      </div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <div class="quiz-next">
        <button class="cta-button" id="btn-lanjut-soal" style="display:none;">
          ${sesi.indeks === modul.kuis.length - 1 ? "📊 Lihat hasil" : "Soal berikutnya &rarr;"}
        </button>
      </div>
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
    feedback.textContent = (benar ? "✅ " : "❌ ") + soal.penjelasan;
    feedback.className = "quiz-feedback tampil " + (benar ? "feedback-benar" : "feedback-salah");

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

// ---------- RENDER HALAMAN HASIL KUIS ----------
function renderHasilKuis() {
  const wrap = document.getElementById("hasil-wrap");
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const modulId = parseInt(params.get("modul") || "1", 10);
  const skor = parseInt(params.get("skor") || "0", 10);
  const modul = DATA_MODUL.find((m) => m.id === modulId) || DATA_MODUL[0];
  const modulBerikut = DATA_MODUL.find((m) => m.id === modulId + 1);

  let pesan, emoji;
  if (skor >= 80) {
    emoji = "🎉";
    pesan = `Kerja bagus, kader! Kamu sudah memahami dasar dari modul "${modul.judul}". Teruslah belajar dan praxis-kan ilmunya! Ingat: 'Kennis zonder daad is doelloos'—pengetahuan tanpa tindakan tidak bertujuan.`;
  } else if (skor >= 50) {
    emoji = "📖";
    pesan = `Pemahamanmu sudah cukup baik. Tak ada salahnya membaca ulang beberapa sub-bab di modul "${modul.judul}" untuk memperdalam pemahaman.`;
  } else {
    emoji = "💪";
    pesan = `Modul "${modul.judul}" masih perlu didalami lagi. Yuk ulangi materinya sebelum mencoba kuis lagi. Ingat: 'Tanpa teori yang revolusioner tidak akan ada praktik yang revolusioner!'`;
  }

  wrap.innerHTML = `
    <div class="hasil-container">
      <div class="skor-lingkaran ${skor >= 70 ? "skor-baik" : skor >= 50 ? "skor-cukup" : "skor-kurang"}">
        <div class="angka">${skor}</div>
        <div class="total">/ 100</div>
      </div>
      <h2>${emoji} ${skor >= 70 ? "Kerja bagus, kader!" : skor >= 50 ? "Terus semangat!" : "Jangan menyerah!"}</h2>
      <p>${pesan}</p>
      <div class="hasil-buttons">
        <a href="kuis.html?modul=${modulId}" class="cta-secondary" id="btn-ulangi">🔄 Ulangi kuis</a>
        ${modulBerikut
          ? `<a href="belajar.html?modul=${modulBerikut.id}&sub=0" class="cta-button">${modulBerikut.ikon} Lanjut ke modul berikutnya</a>`
          : `<a href="daftar-modul.html" class="cta-button">🏠 Kembali ke daftar modul</a>`}
      </div>
    </div>
  `;
}

// ================================================================
// INISIALISASI
// ================================================================

document.addEventListener("DOMContentLoaded", () => {
  tandaiTabAktif();
  renderDaftarModul();
  renderHalamanBelajar();
  renderHalamanKuis();
  renderHasilKuis();
});