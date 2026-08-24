# Template Laporan Keuangan BUMDesa Lancar Jaya

Template `TEMPLATE_LAPORAN_KEUANGAN_BUMDESA_LANCAR_JAYA.xlsx` adalah satu workbook untuk transaksi sepanjang tahun. Identitas awalnya adalah BUMDesa Lancar Jaya, Desa Curahdringu, Kecamatan Tongas, Kabupaten Probolinggo; Direktur **DITA TIA MUKARROMAH** dan Bendahara **ROBIATUL HUSNA**.

## Cara membuat atau memperbarui file

Generator tidak membutuhkan dependency baru selain `openpyxl`:

```bash
python3 docs/laporan-bumdesa/generate_template.py
```

Perintah tersebut membuat ulang file XLSX final di folder yang sama. Contoh transaksi September 2025 ditandai `[CONTOH]`; hapus atau ganti baris contoh sebelum laporan resmi dipakai.

## Alur penggunaan

1. Buka **PENGATURAN**, lengkapi Penasihat/Pengawas bila sudah tersedia, lalu pilih Bulan aktif dan Tahun aktif.
2. Periksa atau tambah daftar unit usaha di **PENGATURAN**.
3. Masukkan jurnal pada **TRANSAKSI**. Satu baris adalah satu akun; satu transaksi harus memiliki baris Debet dan Kredit yang seimbang. Pilih Unit Usaha, Jenis, dan Kode Akun dari dropdown.
4. Jangan mengetik `Nama Akun`, `Bulan`, dan `Tahun` secara manual. Ketiganya terisi dari formula.
5. Cek status **Jurnal Debet = Kredit?** dan **Neraca balance?** pada PENGATURAN.
6. Gunakan **BULANAN** untuk tren Jan–Des, **LABA RUGI** untuk periode aktif, **ARUS KAS** untuk saldo rekening kas, serta **NERACA SALDO** dan **POSISI KEUANGAN** untuk pemeriksaan posisi.
7. Gunakan akun yang sudah tersedia di **AKUN**. Untuk akun baru permanen, tambahkan tuple akun ke daftar `COA` di `generate_template.py`, lalu jalankan ulang generator agar akun mendapat baris di semua laporan. Menambah baris langsung di AKUN hanya memperbarui pilihan/dropdown dan VLOOKUP, bukan struktur baris laporan.
8. Saat memigrasikan transaksi lama, pertahankan kode referensi yang sama—terutama kode beban kelas `6.*` dan beban lain-lain `7.*`; jangan mengubahnya ke kode `5.*`.

## Import ke Google Sheets

1. Di Google Drive pilih **New > File upload**, lalu unggah file XLSX.
2. Klik kanan file dan pilih **Open with > Google Sheets**. Alternatifnya, dari spreadsheet pilih **File > Import > Upload** dan pilih **Create new spreadsheet**.
3. Setelah impor, periksa format tanggal/rupiah, dropdown pada TRANSAKSI, dan dua kontrol balance di PENGATURAN. Google Sheets akan menghitung ulang formula saat file dibuka.

## Struktur template baru

Urutan sembilan sheet final adalah: **PENGATURAN**, **TRANSAKSI**, **BULANAN**, **LABA RUGI**, **ARUS KAS**, **NERACA SALDO**, **POSISI KEUANGAN**, **AKUN**, dan **PETUNJUK**.

- **PENGATURAN** menyimpan identitas, periode aktif, daftar unit, KPI, dan kontrol jurnal/neraca.
- **TRANSAKSI** menyediakan satu tabel jurnal tahunan sampai baris 1000. Formula `VLOOKUP`, `MONTH`, dan `YEAR` mengisi kolom turunan.
- **BULANAN** menampilkan matriks pendapatan dan beban per akun untuk Jan–Des, total tahunan, surplus/rugi per bulan, dan saldo kas akhir.
- **LABA RUGI** menghitung Bulan Ini dan S/D Bulan Ini dengan pemilihan periode di PENGATURAN serta tanda tangan yang mengikuti identitas/periode.
- **ARUS KAS** merinci saldo awal, penerimaan, pengeluaran, arus bersih, dan saldo akhir per rekening; kriterianya kode akun `1.1.01*`, bukan uraian.
- **NERACA SALDO** menampilkan mutasi kumulatif sampai periode aktif, saldo Debet/Kredit, laba/rugi berjalan, dan cek total.
- **POSISI KEUANGAN** menyandingkan aset dengan kewajiban dan ekuitas, termasuk laba berjalan, total, selisih, serta check balance.
- **AKUN** adalah COA yang sudah dibersihkan dan menjadi sumber dropdown kode akun. Daftar baris laporan pendapatan/beban/aset/kewajiban/ekuitas dibentuk dari `COA` di generator.
- **PETUNJUK** merangkum alur kerja dan import.

Semua agregasi laporan memakai `SUMIFS` berdasarkan kode akun dan tanggal/periode. Dengan demikian laporan tidak bergantung pada posisi baris jurnal dan tidak memakai pencocokan uraian transaksi.

## Analisis efisiensi terhadap workbook referensi

Workbook referensi memiliki **11 tab**: `dashbord`, `AKUN`, `BUKU JURNAL`, `BUKU BESAR`, `NERACA SALDO`, `JURNAL PENYESUAIAN`, `KERTAS KERJA`, `Laba Rugi`, `LPE`, `Neraca`, dan `LAK`. Temuan serta perbaikannya:

| Tab referensi | Temuan | Efisiensi pada template baru |
|---|---|---|
| `dashbord` | Nama tab typo (`dashbord`), identitas dan periode bercampur dengan tampilan dashboard. | Dipindah ke PENGATURAN yang menjadi satu sumber identitas, periode, KPI, dan kontrol. |
| `AKUN` | Banyak kode memiliki trailing spaces dan terdapat duplikat. Akun baru harus dipelihara manual di beberapa laporan. | AKUN menjadi COA bersih dengan kode referensi standar; dropdown transaksi mengambil satu sumber. Akun baru permanen harus ditambahkan ke `COA` generator lalu dibuat ulang agar semua laporan mendapat barisnya. |
| `BUKU JURNAL` | Struktur berulang untuk satu unit/satu periode dan baris pasangan jurnal mengandalkan salin formula. | TRANSAKSI menampung satu tabel tahunan multi-unit/multi-bulan dengan 1000 baris formula siap pakai. |
| `BUKU BESAR` | Penuh `#REF!` karena referensi ke baris jurnal dibuat manual dan rapuh saat baris dipindah. | Tidak ada buku besar berbasis posisi; laporan baru melakukan agregasi `SUMIFS` berdasarkan kode akun dan tanggal. |
| `NERACA SALDO` | Daftar akun dan formula harus disalin/pelihara untuk setiap periode. | Semua akun COA diringkas kumulatif sampai periode aktif secara formula, dengan cek total Debet/Kredit. |
| `JURNAL PENYESUAIAN` | Jurnal penyesuaian berada di tab terpisah dan pasangan baris manual mudah terlewat. | Penyesuaian menjadi nilai `Jenis = Penyesuaian` dalam tabel TRANSAKSI yang sama, sehingga tetap masuk ke seluruh laporan. |
| `KERTAS KERJA` | Kolom neraca saldo, penyesuaian, laba rugi, dan neraca mengulang klasifikasi akun secara manual. | Klasifikasi disimpan satu kali di AKUN; laporan langsung memakai kode akun dan periode. |
| `Laba Rugi` | Akun pendapatan/beban perlu dimasukkan manual berulang, dan periode bersifat hardcoded. | Pendapatan/beban diambil dari COA, tersedia Bulan Ini dan S/D Bulan Ini, dan periodenya dikendalikan dropdown. |
| `LPE` | Perubahan ekuitas memakai link langsung ke posisi sel laporan lain. | Laba berjalan ditarik dari agregasi periode aktif dan ditampilkan langsung di POSISI KEUANGAN. |
| `Neraca` | Susunan akun dan link antarbaris rawan berubah ketika baris sumber berubah. | Aset, kewajiban, ekuitas, dan laba berjalan dihitung per kode akun; ada selisih dan check balance. |
| `LAK` | Pencocokan teks uraian transaksi dengan `SUMIF` sangat rapuh: perubahan ejaan uraian dapat menghilangkan arus kas. | ARUS KAS menggunakan pola kode rekening `1.1.01*`, tanggal, dan Debet/Kredit; uraian tidak menjadi kunci. |

Masalah lintas workbook referensi lainnya adalah periode hardcoded, satu file/unit/bulan yang menyulitkan komparasi, dan saldo awal yang harus diulang. Template baru menyimpan satu transaksi tahunan dalam satu workbook; BULANAN memberi komparasi Jan–Des dan saldo awal hanya dicatat sebagai transaksi yang memang terjadi.

## Catatan teknis

- Formula menggunakan fungsi klasik yang kompatibel dengan Excel dan Google Sheets: `SUMIFS`, `IFERROR`, `VLOOKUP`, `MONTH`, `YEAR`, `DATE`, `EOMONTH`, dan `SUM`.
- Sheet tidak diproteksi agar mudah diedit.
- Format rupiah, tanggal, freeze panes, filter tabel transaksi, tab color, data validation, dan conditional formatting sudah disertakan.
- File yang dihasilkan tidak menggunakan formula dengan literal `#REF!`.
