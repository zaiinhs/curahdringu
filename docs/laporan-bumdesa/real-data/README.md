# Laporan Keuangan BUMDesa Lancar Jaya — Data Transaksi Sumber

Workbook ini merupakan turunan template sebelumnya dengan jurnal dan laporan yang dibangun dari:

`/private/var/folders/ly/c2b907xs1p739r22v9bx0t1h0000gn/T/opencode/bumdesa-real/source.xlsx`

Jalankan generator dari akar repositori:

```bash
python3 docs/laporan-bumdesa/real-data/generate_real_report.py
```

Generator menghasilkan:

- `LAPORAN_KEUANGAN_BUMDESA_LANCAR_JAYA_AGU2025_AGU2026.xlsx`
- `classified_source.csv` sebagai daftar pemeriksaan klasifikasi baris sumber.

## Sumber dan batas waktu

- Sheet yang dibaca adalah `TRANSAKSI`, dari transaksi pertama sampai batas **23 Agustus 2026**.
- Nilai transaksi utama dibaca dari kolom C. Baris sumber 252 memiliki nilai Rp2.000.000 pada kolom D dan tetap dihitung sebagai catatan penarikan.
- Kategori asli dan catatan kolom E:H dipertahankan di `DATA SUMBER` untuk kebutuhan pemeriksaan.
- Baris bernilai nol yang memiliki uraian atau catatan tetap ditampilkan sebagai catatan/rencana, tetapi tidak dibuat jurnal.
- Baris sumber 302 tanggal 25 Agustus 2026 sebesar Rp900.000 ditampilkan sebagai `DIKECUALIKAN — SETELAH BATAS WAKTU` dan tidak masuk jurnal.
- Hasil ekstraksi: 297 baris sumber, termasuk 117 baris bernilai tidak nol sampai batas waktu.

Dua unit operasi yang digunakan:

1. `PEMBIBITAN DAN BUDIDAYA KAMBING`
2. `BUDIDAYA PERTANIAN`

`REKONSILIASI (BUKAN UNIT USAHA)` hanya digunakan untuk dana awal dan ringkasan saldo. Identitas pengurus: Ketua/Direktur **DITA TIA MUKARROMAH**, Sekretaris **SOLIHIN**, dan Bendahara **ROBIATUL HUSNA**.

## Model Bank Jatim langsung

1. Dana awal Rp144.060.000 dicatat pada 1 Agustus 2025: Debet Bank Jatim dan Kredit Dana Ketahanan Pangan/Penyertaan Modal Desa.
2. Semua pembelian dan belanja sumber langsung dikredit ke Bank Jatim. Semua hasil panen langsung didebet ke Bank Jatim.
3. Sembilan baris penarikan sumber, termasuk baris 252, tetap ada di `DATA SUMBER` dengan keputusan **CATATAN PENARIKAN SUMBER — TIDAK DIJURNAL DALAM MODEL BANK LANGSUNG**. Baris tersebut tidak membuat jurnal dan tidak mengubah saldo Bank Jatim pada model konsolidasian.
4. Total belanja melalui Bank Jatim sampai batas waktu Rp125.640.000 dan pendapatan panen Rp7.100.000.
5. Rekonsiliasi: `Rp144.060.000 + Rp7.100.000 - Rp125.640.000 = Rp25.520.000`.
6. Saldo akhir yang ditampilkan adalah Bank Jatim Rp25.520.000. Arus kas hanya menyajikan Bank Jatim.

7. Transaksi operasional dicatat per akun beban dan dibayar langsung melalui Bank Jatim.

## Kambing dan aset

- 18 pembelian kambing dicatat sebagai aset biologis, total Rp42.100.000.
- Empat kematian dicatat terpisah pada 30 November 2025, 31 Januari 2026, 31 Maret 2026, dan 31 Mei 2026; total kerugian kematian Rp9.355.556.
- Nilai aset biologis tersisa adalah Rp32.744.444 dan jumlah tercatat tersisa 14 ekor.
- Ringkasan daftar kambing: Dibeli 18, Mati 4, Tersisa 14, Nilai pembelian Rp42.100.000, Kerugian kematian Rp9.355.556, Nilai aset tersisa Rp32.744.444.
- Kandang Rp24.000.000 siap digunakan 5 Oktober 2025, umur manfaat 5 tahun, penyusutan sampai batas waktu Rp4.400.000.
- Mesin pencacah pakan Rp6.000.000 siap digunakan 6 November 2025, umur manfaat 5 tahun, penyusutan sampai batas waktu Rp1.000.000.
- Sewa lahan kambing Rp8.000.000 dibayar di muka. Amortisasi Sep–Jul memakai Rp133.333 per bulan dan Agustus Rp133.337, total Rp1.600.000.

## Pertanian

- Sewa lahan per siklus Rp2.000.000 dialokasikan Rp1.000.000 pada panen 1 Februari 2026 dan Rp1.000.000 pada panen 18 Mei 2026.
- Sewa lahan pertanian 5 tahun Rp10.000.000 diamortisasi Feb–Jul Rp166.667 per bulan dan Agustus Rp166.665, total Rp1.166.667 sampai batas waktu.
- Siklus 1 memakai baris `[29,40,45,46,74,76,94,95]`: biaya langsung Rp3.440.000, pendapatan Rp1.100.000, rugi langsung Rp2.340.000, dan rugi setelah alokasi sewa Rp3.340.000.
- Siklus 2 memakai baris `[99,100,101,102,103,104,106,109,111,114,118,135,195,196,197]`: biaya langsung Rp5.500.000, pendapatan Rp6.000.000, laba langsung sebelum alokasi Rp500.000, dan rugi setelah alokasi sewa Rp500.000.
- Rencana bernilai nol pada 28 Mei–1 Juni tetap ada di `DATA SUMBER`, tetapi tidak dibuat jurnal.

## Cara membaca sheet

### Aset Dalam Penyelesaian

Aset Dalam Penyelesaian adalah biaya pembangunan kandang yang belum siap digunakan. Saat kandang selesai, nilai tersebut dipindahkan ke aset Bangunan Kandang Kambing dan kemudian disusutkan.

### Biaya Produksi Dalam Proses

Biaya Produksi Dalam Proses adalah biaya tanam dan perawatan yang dikumpulkan sampai panen. Biaya tersebut belum langsung dianggap beban laba rugi sebelum hasil panen dijual.

### Beban Pokok Hasil Panen

Beban Pokok Hasil Panen adalah biaya produksi yang dipindahkan menjadi beban ketika hasil panen dijual. Dengan demikian biaya yang masih tersimpan dan biaya yang telah menghasilkan pendapatan dapat dibaca terpisah.

### NERACA SALDO

Kode dan Nama Akun menunjukkan akun yang dipakai. Mutasi Debet dan Mutasi Kredit menunjukkan jumlah pergerakan selama periode. Saldo Debet dan Saldo Kredit menunjukkan posisi akhirnya. Total Debet dan Kredit wajib sama. Aset dan beban umumnya bersaldo Debet, sedangkan kewajiban, modal, dan pendapatan umumnya bersaldo Kredit. Selisih berarti ada jurnal yang perlu diperiksa.

### LABA RUGI

Pendapatan dikurangi Beban menghasilkan laba atau rugi. Bandingkan kolom Bulan Dipilih dengan kolom Seluruh Periode. Pembelian kambing, kandang, mesin, dan sewa dibayar di muka tidak langsung menjadi beban. Penyusutan, amortisasi, biaya operasi, kerugian kematian, dan beban pokok hasil panen yang sudah diakui masuk ke laba rugi. Transaksi operasional dicatat pada akun beban masing-masing.

### JADWAL ASET

Nilai Buku = Nilai Perolehan - Akumulasi Penyusutan/Amortisasi. Baca juga umur manfaat, periode pemakaian, dan catatan asumsi. Nilai buku adalah nilai akuntansi aset; nilainya berbeda dari saldo Bank Jatim dan tidak sama dengan laba.

## Pencatatan operasional dan daftar kambing

1. Transaksi operasional dicatat langsung pada akun beban masing-masing dan mengurangi Bank Jatim.
2. Kerugian kematian dicatat pada empat tanggal kejadian di `TRANSAKSI` dan diringkas di `DAFTAR KAMBING`.
3. DAFTAR KAMBING merangkum dibeli 18 ekor, mati 4 ekor, tersisa 14 ekor, dan nilai aset tersisa Rp32.744.444.
4. Jalankan ulang generator dan pastikan total Debet/Kredit, saldo Bank Jatim, serta posisi keuangan tetap seimbang.
5. Bila ada akun permanen baru, tambahkan baris akun pada `generate_real_report.py` dan jalankan ulang. Jangan hanya menambah baris pada sheet AKUN.

## Impor ke Google Sheets

Unggah `LAPORAN_KEUANGAN_BUMDESA_LANCAR_JAYA_AGU2025_AGU2026.xlsx` ke Google Drive, lalu pilih **Open with → Google Sheets**. Cara lain: pilih **File → Import → Upload → Create new spreadsheet**. Setelah impor, periksa format tanggal/rupiah, formula, filter, validasi data, Status Bukti, dan pemeriksaan keseimbangan.

## Urutan sheet

1. `PENGATURAN`
2. `REKONSILIASI`
3. `DATA SUMBER`
4. `TRANSAKSI`
5. `REKAP 13 BULAN`
6. `PER UNIT`
7. `SIKLUS PERTANIAN`
8. `DAFTAR KAMBING`
9. `JADWAL ASET`
10. `LABA RUGI`
11. `ARUS KAS`
12. `NERACA SALDO`
13. `POSISI KEUANGAN`
14. `AKUN`
15. `PETUNJUK`

Catatan pengendalian: transaksi operasional dan kerugian kematian empat kambing telah dicatat dalam laporan manajemen internal.
