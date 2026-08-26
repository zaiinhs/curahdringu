# Panduan Verifikasi SEO untuk Admin

## ✅ Checklist Post-Deploy

Setelah website di-deploy ke https://curahdringu.my.id, verifikasi hal-hal berikut:

### 1. Akses Dasar
- [ ] Website bisa diakses via https://curahdringu.my.id
- [ ] HTTPS aktif (gembok hijau di browser)
- [ ] www.curahdringu.my.id redirect ke curahdringu.my.id
- [ ] Semua halaman (Beranda, Profil, Layanan, Berita, Potensi, BUMDesa, Kontak) bisa diakses

### 2. Files SEO Penting
Cek apakah file-file ini bisa diakses:
- [ ] https://curahdringu.my.id/robots.txt
- [ ] https://curahdringu.my.id/sitemap.xml
- [ ] https://curahdringu.my.id/manifest.json
- [ ] https://curahdringu.my.id/humans.txt

### 3. Meta Tags (View Page Source)
Klik kanan > View Page Source di halaman homepage, pastikan ada:
- [ ] `<title>` tag dengan nama desa
- [ ] `<meta name="description">` ada
- [ ] `<meta property="og:image">` ada
- [ ] `<link rel="canonical">` ada
- [ ] `<script type="application/ld+json">` ada (minimal 3)

### 4. Google Tools (WAJIB!)

**A. Google Search Console**
1. Buka: https://search.google.com/search-console
2. Klik "Add Property" → pilih "URL prefix"
3. Masukkan: `https://curahdringu.my.id`
4. Verifikasi dengan salah satu metode:
   - **Metode DNS** (paling mudah jika Anda punya akses domain):
     - Copy TXT record yang diberikan Google
     - Tambahkan ke DNS settings di registrar domain
     - Klik Verify
   - **Metode HTML tag**:
     - Copy kode verifikasi (contoh: `abc123def...`)
     - Edit file `src/data/site.ts` baris 45
     - Ganti `googleSiteVerification: ""` jadi `googleSiteVerification: "abc123def..."`
     - Deploy ulang
     - Kembali ke Google Search Console dan klik Verify

5. Setelah verified, submit sitemap:
   - Di menu kiri, klik "Sitemaps"
   - Masukkan: `sitemap.xml`
   - Klik Submit

**B. Google Business Profile** (untuk Local SEO)
1. Buka: https://business.google.com
2. Klik "Manage now" atau "Add business"
3. Isi informasi:
   - **Nama bisnis**: Desa Curah Dringu
   - **Kategori**: Government Office
   - **Tambah lokasi**: Ya, kami melayani pelanggan di lokasi fisik
   - **Alamat**: Jl. Raya Curah Dringu, Tongas, Kabupaten Probolinggo, Jawa Timur 67252
   - **Area layanan**: Tambahkan Tongas dan sekitarnya
   - **Telepon**: +6282332477256
   - **Website**: https://curahdringu.my.id
4. Verifikasi bisnis (biasanya via pos/telepon)
5. Setelah verified, lengkapi profil:
   - Upload foto kantor desa
   - Isi jam operasional: Senin-Jumat 08:00-15:00
   - Tambah deskripsi

### 5. Testing Tools

Setelah deploy, test dengan tools ini:

**A. Google Rich Results Test**
- URL: https://search.google.com/test/rich-results
- Masukkan: https://curahdringu.my.id
- Tunggu hasil scan
- ✅ Harus muncul: Organization, LocalBusiness, BreadcrumbList

**B. PageSpeed Insights**
- URL: https://pagespeed.web.dev
- Masukkan: https://curahdringu.my.id
- Target Score:
  - Mobile: > 85
  - Desktop: > 90
- Jika score rendah, bisa minta bantuan developer

**C. Mobile-Friendly Test**
- URL: https://search.google.com/test/mobile-friendly
- Masukkan: https://curahdringu.my.id
- ✅ Harus muncul: "Page is mobile friendly"

**D. Schema Markup Validator**
- URL: https://validator.schema.org
- Masukkan: https://curahdringu.my.id
- ✅ Harus 0 errors (warnings boleh diabaikan)

### 6. Social Media Sharing Test

**Facebook Debugger**
- URL: https://developers.facebook.com/tools/debug/
- Masukkan: https://curahdringu.my.id
- Klik "Scrape Again"
- ✅ Image preview harus muncul

**Twitter Card Validator**
- URL: https://cards-dev.twitter.com/validator
- Masukkan: https://curahdringu.my.id
- ✅ Card preview harus muncul

### 7. Monitor di Google Search Console (Setelah 7-14 hari)

Check progress SEO setiap minggu:

1. **Performance Report**:
   - Menu: Performance
   - Lihat: Total clicks, Total impressions, Average CTR
   - Target minggu 1-2: Mulai muncul impressions
   - Target minggu 3-4: Mulai ada clicks

2. **Coverage Report**:
   - Menu: Coverage
   - ✅ Valid pages: 7 pages (semua halaman utama)
   - ❌ Errors: harus 0

3. **Enhancements**:
   - Menu: Enhancements
   - Check: Logo, Sitelinks, Breadcrumbs
   - ✅ Harus muncul valid structured data

4. **Search Queries**:
   - Menu: Performance > Queries
   - Lihat keyword apa yang membawa traffic
   - Target keywords: "desa curah dringu", "curahdringu tongas", "layanan desa curah dringu"

---

## 🆘 Troubleshooting

**Q: Website tidak muncul di Google setelah 2 minggu**
- Cek Search Console apakah sudah submit sitemap
- Cek Coverage report ada error atau tidak
- Request indexing manual: Search Console > URL Inspection > masukkan URL > Request Indexing

**Q: Rich results tidak muncul**
- Test di https://search.google.com/test/rich-results
- Jika error, screenshot dan minta bantuan developer

**Q: PageSpeed score rendah (<70)**
- Pastikan gambar tidak terlalu besar
- Gunakan format WebP untuk gambar
- Minta developer untuk optimasi

**Q: Google Business Profile tidak muncul di Maps**
- Pastikan sudah verified (cek email/pos dari Google)
- Pastikan kategori "Government Office" sudah dipilih
- Tunggu 3-7 hari setelah verifikasi

---

## 📞 Kontak Developer

Jika ada masalah teknis atau butuh bantuan:
- Email: desacurahdringu@gmail.com
- Atau hubungi developer yang handle project ini

---

## 📈 Target SEO (3 Bulan Pertama)

**Bulan 1:**
- Website terindex Google (7-14 hari)
- Muncul untuk keyword "desa curah dringu"
- Impressions: 50-100/hari

**Bulan 2:**
- Muncul di halaman 1 untuk "desa curah dringu tongas"
- Clicks: 5-10/hari
- Impressions: 100-200/hari

**Bulan 3:**
- Muncul di halaman 1 untuk berbagai long-tail keywords
- Clicks: 10-20/hari
- Impressions: 200-500/hari
- Google Business Profile muncul di Maps

---

Semoga berhasil! 🚀
