# Website Resmi Desa Curah Dringu

Website resmi **Desa Curah Dringu** — sebuah desa pesisir di tepi Selat Madura,
Kecamatan Tongas, Kabupaten Probolinggo, Jawa Timur.

Tujuan utama website ini adalah **melayani dan memberikan informasi yang akurat
kepada masyarakat** dengan tampilan yang modern, ramah, dan mudah diakses dari
perangkat apa pun (mobile-friendly).

> Identitas visual mengangkat tema **pesisir** — perpaduan warna *teal laut* dan
> *amber senja* — agar berbeda dari website desa pada umumnya.

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Teknologi](#-teknologi)
- [Memulai (Getting Started)](#-memulai-getting-started)
- [Struktur Proyek](#-struktur-proyek)
- [Halaman & Rute](#-halaman--rute)
- [Mengelola Konten](#-mengelola-konten-srcdatasitets)
- [Sistem Desain](#-sistem-desain-srctheme)
- [Komponen Penting](#-komponen-penting)
- [Deploy](#-deploy)
- [Kontak](#-kontak)

---

## ✨ Fitur Utama

- **Beranda informatif** — hero pesisir, pintasan layanan, statistik desa
  (angka beranimasi), berita terbaru, potensi desa, agenda kegiatan, ajakan
  pengaduan, dan peta lokasi.
- **Layanan administrasi** — daftar layanan surat-menyurat beserta persyaratan
  dan alur pengurusan yang jelas.
- **Profil desa** — sejarah, visi & misi, serta struktur perangkat desa.
- **Berita & pengumuman** — kanal informasi terkini untuk warga.
- **Potensi desa** — etalase wisata pesisir, UMKM, dan hasil pertanian.
- **Kontak & pengaduan** — formulir aspirasi/pengaduan dengan validasi dan
  notifikasi (toast).
- **Mobile-friendly** — navigasi *drawer* di perangkat kecil, tata letak
  responsif di seluruh halaman.
- **SEO & berbagi** — meta tag, Open Graph, dan Twitter Card di setiap halaman.

---

## 🛠 Teknologi

| Kategori        | Teknologi                          |
| --------------- | ---------------------------------- |
| Framework       | [Next.js](https://nextjs.org/) 14 (Pages Router) |
| Bahasa          | TypeScript                         |
| UI Library      | [Chakra UI](https://chakra-ui.com/) v2 |
| Animasi         | [Framer Motion](https://www.framer.com/motion/) |
| Ikon            | [React Icons](https://react-icons.github.io/react-icons/) |
| Font            | Plus Jakarta Sans (Google Fonts)   |

---

## 🚀 Memulai (Getting Started)

### Prasyarat
- **Node.js** v18 atau lebih baru (diuji pada v22)
- **Yarn** atau **npm**

### Instalasi & Menjalankan

```bash
# 1. Instal dependency
yarn install        # atau: npm install

# 2. Jalankan mode pengembangan
yarn dev            # atau: npm run dev
# Buka http://localhost:3000

# 3. Build untuk produksi
yarn build          # atau: npm run build

# 4. Jalankan hasil build
yarn start          # atau: npm run start
```

### Skrip yang Tersedia

| Perintah       | Fungsi                                  |
| -------------- | --------------------------------------- |
| `yarn dev`     | Menjalankan server pengembangan          |
| `yarn build`   | Membuat build produksi yang teroptimasi  |
| `yarn start`   | Menjalankan server dari hasil build      |
| `yarn lint`    | Menjalankan ESLint                       |
| `npm run build:pages` | Membuat static export Cloudflare Pages di `out/` |
| `npm run preview` | Build dan preview lokal dengan Wrangler |
| `npm run deploy` | Build dan deploy ke proyek Pages `curahdringu` |

---

## 📁 Struktur Proyek

```
curahdringu/
├── public/                     # Aset statis (logo, favicon, gambar konten)
│   ├── logo.png
│   ├── favicon.ico
│   └── content.jpeg
├── src/
│   ├── data/
│   │   └── site.ts             # ⭐ Pusat semua data konten (lihat di bawah)
│   ├── theme/
│   │   └── index.ts            # Tema Chakra: warna, font, gaya komponen
│   ├── components/
│   │   ├── Layout/             # Pembungkus halaman (Head + Navbar + Footer)
│   │   ├── Head/               # Meta tag & SEO
│   │   ├── Navbar/             # Navigasi sticky + drawer mobile
│   │   ├── Footer/             # Footer multi-kolom
│   │   ├── ui/                 # Komponen UI reusable
│   │   │   ├── Reveal.tsx          # Animasi muncul saat di-scroll
│   │   │   ├── CountUp.tsx         # Angka beranimasi (statistik)
│   │   │   ├── SectionHeading.tsx  # Judul section konsisten
│   │   │   ├── PageHero.tsx        # Header untuk halaman dalam
│   │   │   └── NewsCard.tsx        # Kartu berita
│   │   └── views/              # Komposisi tiap halaman
│   │       ├── Home/
│   │       │   ├── index.tsx
│   │       │   └── Fragments/      # Section-section beranda
│   │       │       ├── Hero.tsx
│   │       │       ├── Stats.tsx
│   │       │       ├── ServicesPreview.tsx
│   │       │       ├── NewsSection.tsx
│   │       │       ├── PotensiSection.tsx
│   │       │       ├── AgendaSection.tsx
│   │       │       ├── CtaSection.tsx
│   │       │       └── Maps.tsx
│   │       ├── Profil/
│   │       ├── Layanan/
│   │       ├── Berita/
│   │       ├── Potensi/
│   │       └── Kontak/
│   ├── pages/                  # Rute (Next.js Pages Router)
│   │   ├── _app.tsx                # Bungkus ChakraProvider + tema
│   │   ├── _document.tsx           # HTML dasar + pemuatan font
│   │   ├── index.tsx               # /         → Beranda
│   │   ├── profil.tsx              # /profil
│   │   ├── layanan.tsx             # /layanan
│   │   ├── berita.tsx              # /berita
│   │   ├── potensi.tsx             # /potensi
│   │   ├── kontak.tsx              # /kontak
│   │   ├── about.tsx               # /about    → redirect ke /profil
│   │   └── ...                     # Halaman Next.js (Pages Router)
│   └── styles/
│       └── globals.css
├── next.config.js
├── tsconfig.json
└── package.json
```

**Pola arsitektur:** file di `pages/` sengaja dibuat tipis — hanya merender
komponen `View` terkait dari `components/views/`. Seluruh logika tampilan ada di
`views`, sehingga rute mudah dibaca dan tampilan mudah dirawat.

---

## 🗺 Halaman & Rute

| Rute        | Halaman          | Isi                                                                 |
| ----------- | ---------------- | ------------------------------------------------------------------- |
| `/`         | Beranda          | Hero, statistik, layanan, berita, potensi, agenda, CTA, peta        |
| `/profil`   | Profil Desa      | Sejarah, visi & misi, struktur perangkat desa                       |
| `/layanan`  | Layanan          | Daftar layanan + persyaratan + alur "Cara Mengurus Surat"           |
| `/berita`   | Berita           | Daftar berita & pengumuman                                          |
| `/potensi`  | Potensi Desa     | Wisata pesisir, UMKM, pertanian                                     |
| `/kontak`   | Kontak           | Info kontak, peta, formulir pengaduan/aspirasi                      |
| `/about`    | —                | Pengalihan permanen (301) ke `/profil`                              |

---

## 📝 Mengelola Konten (`src/data/site.ts`)

**Semua konten website terpusat di satu file: `src/data/site.ts`.** Untuk
memperbarui informasi desa, cukup ubah file ini — tidak perlu menyentuh kode
tampilan.

| Konstanta       | Mengatur                                                        |
| --------------- | -------------------------------------------------------------- |
| `VILLAGE`       | Nama, tagline, alamat, telepon, email, jam layanan, embed peta |
| `NAV_LINKS`     | Menu navigasi navbar & footer                                  |
| `STATS`         | Statistik desa (penduduk, KK, luas wilayah, RT/RW)             |
| `SERVICES`      | Daftar layanan administrasi + persyaratan                      |
| `NEWS`          | Berita & pengumuman                                            |
| `POTENSI`       | Potensi desa (wisata/UMKM/agro)                                |
| `AGENDA`        | Jadwal kegiatan desa                                           |
| `OFFICERS`      | Nama & jabatan perangkat desa                                  |
| `MISI`          | Poin-poin misi desa                                            |
| `QUICK_ACTIONS` | Pintasan cepat di hero beranda                                 |

### Contoh: mengubah perangkat desa

```ts
export const OFFICERS: Officer[] = [
  { name: "Tiyayah", role: "Kepala Desa" },
  { name: "Siti Maesaroh", role: "Sekretaris Desa" },
  // ...tambah/ubah sesuai data asli
];
```

### Contoh: mengubah kontak desa

```ts
export const VILLAGE = {
  name: "Desa Curah Dringu",
  phone: "+6282332477256",   // ← ganti dengan nomor asli
  email: "desacurahdringu@gmail.com",
  // ...
};
```

> **Catatan:** sebagian data saat ini masih berupa **contoh/placeholder**
> (statistik, berita, agenda). Ganti dengan data sebenarnya sebelum publikasi.

---

## 🎨 Sistem Desain (`src/theme`)

Tema Chakra kustom mendefinisikan identitas visual desa:

- **`brand`** (teal laut) — warna utama: tombol, aksen, tautan aktif.
- **`sand`** (amber senja) — warna sekunder: CTA & sorotan.
- **`ink`** (abu kebiruan) — teks & latar netral.
- **Font:** Plus Jakarta Sans (dimuat via `_document.tsx`).
- **Default komponen:** tombol membulat penuh (`borderRadius: full`), warna
  bawaan `brand`.

Untuk mengganti warna utama, cukup sunting palet `brand`/`sand` di
`src/theme/index.ts`.

---

## 🧩 Komponen Penting

- **`Layout`** — membungkus setiap halaman dengan `Head` (SEO), `Navbar`, dan
  `Footer`. Menerima prop `title` & `description` untuk SEO per halaman.
- **`Reveal`** — animasi *fade-up* halus saat elemen masuk ke layar
  (Framer Motion + IntersectionObserver).
- **`CountUp`** — menganimasikan angka statistik saat terlihat di layar.
- **`PageHero`** — header standar untuk halaman dalam (judul + breadcrumb).
- **`NewsCard`** — kartu berita yang dipakai ulang di beranda & halaman berita.

---

## ☁️ Deploy

Website di-deploy ke proyek Cloudflare Pages `curahdringu` sebagai static
export Next.js. Konfigurasi Git Pages menggunakan:

- **Build command:** `npm run build:pages`
- **Build output directory:** `out`
- **Production branch:** `main`

Setiap `push` ke `main` akan menjalankan build dan deployment produksi. Untuk
deploy langsung dari CLI:

```bash
npx wrangler login
npm run deploy
```

Berita eksternal diambil saat build Pages. Jalankan deployment baru untuk
memperbarui hasil agregasi tanpa perubahan kode.

---

## 🤝 Berkontribusi

Ingin ikut memperbarui konten atau mengembangkan website? Baca
[**CONTRIBUTING.md**](CONTRIBUTING.md) — tersedia panduan untuk pengelola desa
(update konten tanpa coding) maupun pengembang (alur cabang, konvensi commit,
gaya kode, menambah halaman).

---

## 📞 Kontak

Untuk diskusi lebih lanjut dengan pemilik repository ini, hubungi via
[WhatsApp](https://wa.me/6282332477256).

---

<p align="center">Dibuat dengan 💙 untuk warga Desa Curah Dringu</p>
