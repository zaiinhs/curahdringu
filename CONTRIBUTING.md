# Panduan Kontribusi — Website Desa Curah Dringu

Terima kasih sudah ingin ikut merawat dan mengembangkan website Desa Curah
Dringu! 🙌

Dokumen ini menjelaskan cara berkontribusi, baik untuk **pengelola desa**
(memperbarui konten tanpa coding) maupun **pengembang** (mengubah kode).

---

## 📋 Daftar Isi

- [Alur Kerja Singkat](#-alur-kerja-singkat)
- [Untuk Pengelola Desa (Update Konten)](#-untuk-pengelola-desa-update-konten)
  - [Menambah / mengubah berita](#menambah--mengubah-berita)
  - [Mengubah perangkat desa](#mengubah-perangkat-desa)
  - [Mengubah statistik](#mengubah-statistik)
  - [Mengubah agenda kegiatan](#mengubah-agenda-kegiatan)
  - [Mengubah kontak desa](#mengubah-kontak-desa)
- [Untuk Pengembang](#-untuk-pengembang)
  - [Menyiapkan lingkungan](#menyiapkan-lingkungan)
  - [Konvensi penamaan cabang](#konvensi-penamaan-cabang)
  - [Konvensi pesan commit](#konvensi-pesan-commit)
  - [Gaya kode](#gaya-kode)
  - [Menambah halaman baru](#menambah-halaman-baru)
- [Checklist Sebelum Push / Pull Request](#-checklist-sebelum-push--pull-request)

---

## 🔄 Alur Kerja Singkat

```bash
# 1. Buat cabang baru dari main
git checkout -b jenis/nama-singkat

# 2. Lakukan perubahan, lalu cek
yarn lint
yarn build

# 3. Commit & push
git add .
git commit -m "jenis: deskripsi singkat"
git push origin jenis/nama-singkat

# 4. Buka Pull Request ke main di GitHub
```

> Untuk perubahan kecil oleh pemilik repo, boleh langsung commit ke `main`.
> Untuk perubahan besar, gunakan cabang + Pull Request agar mudah ditinjau.

---

## 🧑‍🌾 Untuk Pengelola Desa (Update Konten)

**Hampir semua konten website ada di satu file:**
[`src/data/site.ts`](src/data/site.ts). Anda tidak perlu menyentuh kode tampilan
— cukup ubah teks di file ini, simpan, lalu commit.

### Menambah / mengubah berita

Cari `export const NEWS` lalu tambahkan satu objek baru di paling atas daftar
(agar tampil pertama):

```ts
export const NEWS: NewsItem[] = [
  {
    slug: "judul-berita-unik",                 // tanpa spasi, pakai tanda hubung
    title: "Judul Berita Anda",
    category: "Kegiatan",                      // mis. Kegiatan / Kesehatan / Ekonomi
    date: "11 Juni 2026",
    excerpt: "Ringkasan singkat 1–2 kalimat.",
    image: "https://link-gambar.jpg",          // URL gambar (atau /nama-file.jpg dari folder public)
  },
  // ...berita lama di bawah
];
```

### Mengubah perangkat desa

Cari `export const OFFICERS`:

```ts
export const OFFICERS: Officer[] = [
  { name: "Tiyayah", role: "Kepala Desa" },
  { name: "Nama Sekdes", role: "Sekretaris Desa" },
  // ...
];
```

### Mengubah statistik

Cari `export const STATS` (angka akan otomatis dianimasikan di beranda):

```ts
{ label: "Total Penduduk", value: 4820, suffix: "+", helper: "Jiwa terdaftar" },
```

### Mengubah agenda kegiatan

Cari `export const AGENDA`:

```ts
{
  day: "14",
  month: "Jun",
  title: "Musyawarah Desa",
  time: "19.30 WIB",
  place: "Balai Desa Curah Dringu",
},
```

### Mengubah kontak desa

Cari `export const VILLAGE` dan ubah nilai `phone`, `email`, `address`,
`hours`, dll.

> 💡 **Tips gambar:** untuk gambar milik desa, taruh file di folder `public/`
> (mis. `public/berita-1.jpg`) lalu rujuk dengan `"/berita-1.jpg"`.

---

## 💻 Untuk Pengembang

### Menyiapkan lingkungan

```bash
yarn install     # instal dependency
yarn dev         # jalankan di http://localhost:3000
```

Lihat [README.md](README.md) untuk detail teknologi & struktur proyek.

### Konvensi penamaan cabang

Gunakan format `jenis/deskripsi-singkat`:

| Prefiks     | Untuk                              | Contoh                     |
| ----------- | ---------------------------------- | -------------------------- |
| `feat/`     | Fitur baru                         | `feat/galeri-foto`         |
| `fix/`      | Perbaikan bug                      | `fix/navbar-mobile`        |
| `docs/`     | Dokumentasi                        | `docs/panduan-deploy`      |
| `chore/`    | Pemeliharaan / update konten       | `chore/update-perangkat`   |
| `style/`    | Perubahan tampilan/format          | `style/warna-footer`       |

### Konvensi pesan commit

Mengikuti gaya [Conventional Commits](https://www.conventionalcommits.org/):

```
jenis: deskripsi singkat dalam bahasa Indonesia

(opsional) penjelasan lebih detail bila perlu.
```

Contoh:
- `feat: tambah halaman galeri foto kegiatan`
- `fix: perbaiki tautan menu di drawer mobile`
- `chore: perbarui data statistik penduduk 2026`

### Gaya kode

- **TypeScript** untuk semua komponen — beri tipe pada props.
- **Komponen tampilan** diletakkan di `src/components/views/<NamaHalaman>/`.
- File di `src/pages/` dibuat **tipis** — hanya merender komponen `View`.
- Gunakan komponen UI bersama dari `src/components/ui/` bila memungkinkan
  (`Reveal`, `SectionHeading`, `PageHero`, `NewsCard`, `CountUp`).
- Pakai token tema (`brand`, `sand`, `ink`) — hindari warna hardcode.
- Pastikan setiap tampilan **responsif** (uji di lebar 375px).

### Menambah halaman baru

1. Buat komponen view: `src/components/views/NamaHalaman/index.tsx`, bungkus
   dengan `<Layout>` dan gunakan `<PageHero>` untuk header.
2. Buat rute tipis: `src/pages/namahalaman.tsx` yang merender view tersebut.
3. Tambahkan tautan ke `NAV_LINKS` di `src/data/site.ts` bila perlu muncul di
   menu.
4. Jalankan `yarn build` untuk memastikan tidak ada error.

---

## ✅ Checklist Sebelum Push / Pull Request

- [ ] `yarn lint` tidak ada error
- [ ] `yarn build` berhasil tanpa error
- [ ] Tampilan sudah dicek di **desktop** dan **mobile** (lebar 375px)
- [ ] Tidak ada teks/placeholder yang tertinggal secara tidak sengaja
- [ ] Pesan commit mengikuti konvensi di atas

---

<p align="center">Terima kasih atas kontribusinya untuk warga Desa Curah Dringu! 💙</p>
