import {
  FiFileText,
  FiHome,
  FiUsers,
  FiHeart,
  FiTruck,
  FiMessageSquare,
  FiBriefcase,
  FiMapPin,
  FiSun,
  FiShoppingBag,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export const VILLAGE = {
  name: "Desa Curah Dringu",
  shortName: "Curah Dringu",
  tagline: "Desa Pesisir yang Ramah, Terbuka, dan Melayani",
  district: "Kecamatan Tongas",
  regency: "Kabupaten Probolinggo",
  province: "Jawa Timur",
  phone: "+6282332477256",
  email: "desacurahdringu@gmail.com",
  address:
    "Jl. Raya Curah Dringu, Kec. Tongas, Kabupaten Probolinggo, Jawa Timur 67252",
  hours: "Senin – Jumat, 08.00 – 15.00 WIB",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7907.074474567588!2d113.10910336348222!3d-7.732694337705844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7b3e227a123b5%3A0xe550fa8829b59f97!2sCurahdringu%2C%20Kec.%20Tongas%2C%20Kabupaten%20Probolinggo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1732621614076!5m2!1sid!2sid",
};

export const SITE = {
  url: "https://curahdringu.my.id",
  name: "Desa Curah Dringu",
  shortName: "Curah Dringu",
  title: "Desa Curah Dringu | Website Resmi Desa Pesisir Tongas, Probolinggo",
  description:
    "Website resmi Desa Curah Dringu, Kecamatan Tongas, Kabupaten Probolinggo — desa pesisir di tepi Selat Madura. Layanan administrasi, potensi wisata Pantai Bahak Indah, BUMDes Lancar Jaya, berita, dan pengumuman desa.",
  locale: "id_ID",
  keywords:
    "Desa Curah Dringu, Curahdringu, Tongas, Probolinggo, Jawa Timur, desa pesisir, Pantai Bahak, Pantai Bahak Indah, layanan desa, BUMDes Lancar Jaya, wisata Probolinggo",
  themeColor: "#0aa48d",
  twitterHandle: "",
  // Ganti dengan kode verifikasi Google Search Console saat domain sudah live
  // Dapatkan di https://search.google.com/search-console
  googleSiteVerification: "",
};

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Layanan", href: "/layanan" },
  { label: "Berita", href: "/berita" },
  { label: "Potensi", href: "/potensi" },
  { label: "BUMDesa", href: "/bumdesa" },
  { label: "Kontak", href: "/kontak" },
];

export interface BUMDesaProfile {
  name: string;
  foundedYear: number;
  address: string;
}

export interface BUMDesaUnit {
  icon: IconType;
  name: string;
}

export interface BUMDesaManagementMember {
  name: string;
  role: string;
  education: string;
  occupation: string;
  phone: string;
}

export interface BUMDesaData {
  profile: BUMDesaProfile;
  units: BUMDesaUnit[];
  fundsThrough2025: number;
  management: BUMDesaManagementMember[];
}

export const BUMDesa: BUMDesaData = {
  profile: {
    name: "BUM Desa LANCAR JAYA",
    foundedYear: 2018,
    address: "Desa Curah Dringu, Tongas, Probolinggo",
  },
  units: [
    {
      icon: FiShoppingBag,
      name: "Pembibitan dan Budidaya Kambing",
    },
    {
      icon: FiSun,
      name: "Budidaya Pertanian",
    },
  ],
  fundsThrough2025: 144_060_000,
  management: [
    { name: "Dita Tia Mukarromah", role: "Direktur", education: "S1", occupation: "Wiraswasta", phone: "081359308667" },
    { name: "Moch. Solihin", role: "Sekretaris", education: "SMA", occupation: "Karyawan Swasta", phone: "082332477256" },
    { name: "Robiatul Husna", role: "Bendahara", education: "SMA", occupation: "Wiraswasta", phone: "085745285629" },
  ],
};

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  helper: string;
  /** Sumber data — tampil di footnote */
  source?: string;
  /** true = estimasi/internal, false = resmi BPS/Dukcapil */
  isEstimate?: boolean;
  /** Keterangan tambahan untuk tooltip/footnote */
  note?: string;
}

/**
 * POTRET DESA — status data Agustus 2026
 *
 * Hasil penelusuran publik (28 Agu 2026):
 * - Wikipedia Curah Dringu (kode 35.13.23.2005, kodepos 67252) masih kosong: luas "... km²", penduduk "... jiwa" (belum diisi).
 * - BPS Probolinggo "Kecamatan Tongas Dalam Angka 2024" & tabel "Jumlah Penduduk Menurut Agama Kec Tongas" terproteksi Cloudflare (403/520) — tidak dapat discrape.
 * - OpenStreetMap Nominatim & Overpass untuk boundary desa mengembalikan 403/empty.
 * - Prodeskel Kemendagri (35.13.23.2005) 404.
 * - Satu-satunya dokumen publik: Scribd "DESA CURAH DRINGU.docx" hanya menyebut per-RT (RT14 RW06 = 30 KK, RT11 RW05 = 43 KK) — bukan total desa.
 * - Luas Kecamatan Tongas 77,95 km² (Wikipedia Tongas) — rata-rata per desa ~5,6 km², angka 6,4 km² pesisir masih masuk akal.
 *
 * Kesimpulan: belum ada publikasi resmi desa-level yang dapat diverifikasi online. Angka di bawah dipertahankan
 * sebagai estimasi internal Dukcapil/Kantor Desa per 2024 (+ = pembulatan) dan ditandai isEstimate:true
 * agar komponen menampilkan lencana "Estimasi — menunggu rilis BPS Desa 2024".
 * Ganti isEstimate:false & source resmi saat data BPS Desa terbit.
 */
export const STATS: StatItem[] = [
  {
    label: "Total Penduduk",
    value: 4820,
    suffix: "+",
    helper: "Jiwa terdaftar (Dukcapil internal)",
    source: "Estimasi Kantor Desa 2024 — menunggu BPS Desa",
    isEstimate: true,
    note: "Wikipedia & BPS desa masih kosong/terproteksi (28 Agu 2026). Angka 4.820 jiwa = data internal, perlu validasi Dukcapil.",
  },
  {
    label: "Kepala Keluarga",
    value: 1356,
    helper: "KK aktif",
    source: "Estimasi Kantor Desa 2024",
    isEstimate: true,
    note: "Scribd per-RT (30 KK & 43 KK) tidak cukup untuk total; 1.356 KK = rekap internal.",
  },
  {
    label: "Luas Wilayah",
    value: 6.4,
    suffix: " km²",
    helper: "Termasuk pesisir Selat Madura",
    source: "Estimasi pesisir — Kec. Tongas 77,95 km²",
    isEstimate: true,
    note: "Wikipedia desa: ... km² (kosong). 6,4 km² = estimasi pesisir, rata-rata kecamatan 5,6 km².",
  },
  {
    label: "RT / RW",
    value: 24,
    helper: "Lingkungan warga (RT)",
    source: "Rekap RT Desa — perlu konfirmasi",
    isEstimate: true,
    note: "Disebut 24 lingkungan RT; rincian RW belum terpublikasi.",
  },
];

export interface Service {
  icon: IconType;
  title: string;
  desc: string;
  requirements: string[];
}

export const SERVICES: Service[] = [
  {
    icon: FiFileText,
    title: "Surat Pengantar",
    desc: "Pengantar untuk berbagai keperluan administrasi warga.",
    requirements: ["KTP pemohon", "Kartu Keluarga", "Surat keterangan RT/RW"],
  },
  {
    icon: FiHome,
    title: "Surat Domisili",
    desc: "Keterangan tempat tinggal resmi dari desa.",
    requirements: ["KTP & KK", "Bukti tempat tinggal", "Pengantar RT/RW"],
  },
  {
    icon: FiUsers,
    title: "Kartu Keluarga",
    desc: "Pengurusan pembuatan & perubahan data KK.",
    requirements: ["Buku nikah / akta", "KK lama (jika ada)", "KTP kepala keluarga"],
  },
  {
    icon: FiHeart,
    title: "Surat Keterangan Tidak Mampu",
    desc: "SKTM untuk bantuan pendidikan & kesehatan.",
    requirements: ["KTP & KK", "Pengantar RT/RW", "Foto rumah (opsional)"],
  },
  {
    icon: FiBriefcase,
    title: "Surat Izin Usaha",
    desc: "Keterangan usaha mikro untuk UMKM warga.",
    requirements: ["KTP pemilik", "Keterangan domisili usaha", "Pengantar RT/RW"],
  },
  {
    icon: FiTruck,
    title: "Surat Keterangan Pindah",
    desc: "Administrasi perpindahan domisili penduduk.",
    requirements: ["KTP & KK", "Alasan pindah", "Pengantar RT/RW"],
  },
];

export interface NewsItem {
  slug: string;
  title: string;
  category: string;
  /** Tanggal siap tampil dalam bahasa Indonesia, mis. "12 Agustus 2026". */
  date: string;
  /** Tanggal mentah ISO 8601 untuk keperluan pengurutan antar sumber. */
  iso?: string;
  excerpt: string;
  image: string;
  source: string;
  url: string;
}

/**
 * Fallback statis: dipakai saat semua sumber API gagal, sekaligus arsip
 * artikel dari media yang tidak menyediakan API publik. Diurutkan terbaru.
 */
export const NEWS: NewsItem[] = [
  {
    slug:
      "pemerintah-desa-curahdringu-kecamatan-tongas-bidik-penguatan-sektor-wisata-dan-umkm",
    title:
      "Pemerintah Desa Curahdringu, Kecamatan Tongas, Bidik Penguatan Sektor Wisata dan UMKM",
    category: "Probolinggo",
    date: "12 Agustus 2026",
    iso: "2026-08-12T10:05:24+07:00",
    excerpt:
      "Potensi bahari dan pertanian menjadi dua kekuatan yang terus dikembangkan Pemerintah Desa Curahdringu.",
    image:
      "https://cdn-jpr.jawapos.com/images/21/2026/08/12/subur-kepala-bpd-desa-curahdringu-sugiono-melihat-sawah-yang-dikelola-bumdes-curahdringu-desa-curahdringu-kecamatan-tongas-inneke-agustinjawa-pos-radar-bromo-zCgFz.webp",
    source: "Radar Bromo",
    url: "https://radarbromo.jawapos.com/probolinggo/2608120020/pemerintah-desa-curahdringu-kecamatan-tongas-bidik-penguatan-sektor-wisata-dan-umkm",
  },
  {
    slug: "desa-curahdringu-tata-kelola-tertib-pembangunan-terukur",
    title: "Desa Curahdringu: Tata Kelola Tertib, Pembangunan Terukur",
    category: "Berita Umum",
    date: "30 Mei 2026",
    iso: "2026-05-30T21:46:09+07:00",
    excerpt:
      "Desa Curahdringu, Kecamatan Tongas, mencatatkan kemajuan yang konsisten dan terarah dipimpin langsung Tiyayah sebagai Kepala Desa.",
    image:
      "https://pojoknasional.co.id/wp-content/uploads/2026/05/IMG-20260530-WA0259.jpg",
    source: "Pojok Nasional",
    url: "https://pojoknasional.co.id/desa-curahdringu-tata-kelola-tertib-pembangunan-terukur/",
  },
  {
    slug:
      "bhabinkamtibmas-desa-curahdringu-sambang-dan-anjangsana-ajak-masyarakat-jaga-kamtibmas",
    title:
      "Bhabinkamtibmas Desa Curahdringu Sambang dan Anjangsana, Ajak Masyarakat Jaga Kamtibmas",
    category: "Kamtibmas",
    date: "24 Januari 2026",
    iso: "2026-01-24T00:00:00+07:00",
    excerpt:
      "Aipda Suyitno menyambangi warga pada malam hari mengajak bersama-sama menjaga keamanan dan ketertiban lingkungan desa.",
    image: "/content.jpeg",
    source: "Humas Polri",
    url: "https://humas.polri.go.id/news/detail/2256237-bhabinkamtibmas-desa-curahdringu-sambang-dan-anjangsana-ajak-masyarakat-jaga-kamtibmas",
  },
  {
    slug:
      "bbktm-desa-curahdringu-laksanakan-patroli-dialogis-di-pantai-tambak-bahak",
    title:
      "BBKTM Desa Curahdringu Laksanakan Patroli Dialogis di Pantai Tambak Bahak",
    category: "Kamtibmas",
    date: "10 Januari 2026",
    iso: "2026-01-10T00:00:00+07:00",
    excerpt:
      "Patroli dialogis kepada pengelola wisata dan warga Pantai Tambak Bahak demi menjaga kenyamanan serta keamanan kawasan wisata.",
    image: "/content.jpeg",
    source: "Humas Polri",
    url: "https://humas.polri.go.id/news/detail/2239677-bbktm-desa-curahdringu-laksanakan-patroli-dialogis-di-pantai-tambak-bahak",
  },
  {
    slug: "relawan-bakti-bumn-dorong-ekonomi-dan-konservasi-pantai-bahak",
    title: "Relawan Bakti BUMN Dorong Ekonomi dan Konservasi Pantai Bahak",
    category: "Kegiatan Desa",
    date: "16 Agustus 2026",
    iso: "2026-08-16T05:58:14+07:00",
    excerpt:
      "Relawan Bakti BUMN 2026 dibuka di Pantai Bahak dipadukan pasar rakyat dan aksi sosial untuk memperkuat ekonomi warga.",
    image:
      "https://probolinggokab.go.id/wp-content/uploads/WhatsApp-Image-2026-08-15-at-23.15.49-2.jpeg",
    source: "Pemkab Probolinggo",
    url: "https://probolinggokab.go.id/relawan-bakti-bumn-dorong-ekonomi-dan-konservasi-pantai-bahak",
  },
  {
    slug: "festival-mangrove-jadi-momentum-kuatkan-potensi-ekonomi-biru",
    title:
      "Festival Mangrove Jadi Momentum Kuatkan Potensi Ekonomi Biru di Jatim",
    category: "Pemerintahan",
    date: "20 Agustus 2025",
    iso: "2025-08-20T00:00:00+07:00",
    excerpt:
      "Gubernur Khofifah ajak semua pihak jaga ekosistem mangrove sekaligus kuatkan ekonomi biru dalam Festival Mangrove Jatim VII di Curahdringu.",
    image:
      "https://bakorwilbojonegoro.jatimprov.go.id/admin/berita/images/gub-mangrove.jpg",
    source: "Pemprov Jawa Timur",
    url: "https://bakorwilbojonegoro.jatimprov.go.id/festival-mangrove-jatim",
  },
  {
    slug:
      "rilis-festival-mangrove-ke-vii-civitas-dan-alumni-unair-ikut-ambil-peran",
    title:
      "Rilis: Festival Mangrove ke-VII, Civitas dan Alumni UNAIR Ikut Ambil Peran dalam Aksi Wujudkan SDGs",
    category: "Pendidikan",
    date: "20 Agustus 2025",
    iso: "2025-08-20T07:32:46+00:00",
    excerpt:
      "Civitas dan alumni UNAIR ambil andil dalam Festival Mangrove ke-VII di Pantai Tambak Bahak sebagai wujud aksi SDGs.",
    image:
      "https://unair.ac.id/wp-content/uploads/2025/08/Festival-Mangrove-ke-VII-Civitas-dan-Alumni-Ikut-Ambil-Peran-dalam-Aksi-Wujudkan-SDGs-4-scaled.webp",
    source: "UNAIR News",
    url: "https://unair.ac.id/rilis-festival-mangrove-ke-vii-civitas-dan-alumni-unair-ikut-ambil-peran-dalam-aksi-wujudkan-sd/",
  },
  {
    slug: "foto-festival-mangrove-vii-2025",
    title: "Foto : Festival Mangrove VII 2025",
    category: "Pendidikan",
    date: "20 Agustus 2025",
    iso: "2025-08-20T03:02:31+00:00",
    excerpt:
      "Dokumentasi Festival Mangrove ke-VII yang melibatkan pemerintah, swasta, perguruan tinggi, hingga komunitas di Pantai Tambak Bahak.",
    image:
      "https://unair.ac.id/wp-content/uploads/2025/08/FESTIVAL-MANGROVE-88-scaled.webp",
    source: "UNAIR News",
    url: "https://unair.ac.id/foto-festival-mangrove-vii-2025/",
  },
  {
    slug:
      "klh-dorong-kolaborasi-lintas-sektor-di-festival-mangrove-jawa-timur-vii",
    title:
      "KLH Dorong Kolaborasi Lintas Sektor di Festival Mangrove Jawa Timur VII",
    category: "Lingkungan Hidup",
    date: "19 Agustus 2025",
    iso: "2025-08-19T00:00:00+07:00",
    excerpt:
      "KLH/BPLH memberi apresiasi atas penyelenggaraan Festival Mangrove Jatim VII dan mendorong kolaborasi lintas sektor.",
    image:
      "https://kemenlh.go.id/dashboard/public/storage/news-activities/thumbnails/Gk6LdHxV8Vo14pN5ZUcKrJsMAlt7Vwpmgkm3Wwca.jpg",
    source: "KLH RI",
    url: "https://kemenlh.go.id/news/detail/klh-dorong-kolaborasi-lintas-sektor-di-festival-mangrove-jawa-timur-vii",
  },
  {
    slug:
      "hadiri-festival-mangrove-jawa-timur-ke-vii-tahun-2025-gubernur-khofifah-apresiasi-pelestarian-mangrove",
    title:
      "Hadiri Festival Mangrove Jawa Timur Ke-VII Tahun 2025, Gubernur Khofifah Apresiasi Pelestarian Mangrove",
    category: "Pemerintahan",
    date: "19 Agustus 2025",
    iso: "2025-08-19T00:00:00+07:00",
    excerpt:
      "Gubernur Khofifah bersama pejabat se-Jatim hadiri Festival Mangrove Jatim VII yang dipusatkan di Desa Curahdringu.",
    image:
      "https://www.pasuruankab.go.id/download-image/hadiri-festival-mangrove-jawa-timur-ke-vii-tahun-2025-bersama-wabup-gus-shobih-dan-bupati-walikota-di-jatim-gubernur-khofifah-apresiasi-pelestarian-mangrove-di-desa-penunggul-nguling/posts/tumbnail",
    source: "Pemkab Pasuruan",
    url: "https://www.pasuruankab.go.id/isiberita/hadiri-festival-mangrove-jawa-timur-ke-vii-tahun-2025-bersama-wabup-gus-shobih-dan-bupati-walikota-di-jatim-gubernur-khofifah-apresiasi-pelestarian-mangrove-di-desa-penunggul-nguling",
  },
  {
    slug: "pantai-bahak-tongas-suguhkan-panorama-sunset-menakjubkan",
    title: "Pantai Bahak Tongas Suguhkan Panorama Sunset Menakjubkan",
    category: "Wisata",
    date: "27 Mei 2023",
    iso: "2023-05-27T00:00:00+07:00",
    excerpt:
      "Terletak di Dusun Bahak, Desa Curahdringu, pantai ini menyuguhkan panorama sunset yang menakjubkan bagi wisatawan.",
    image: "https://cdn.tadatodays.com/posts/2023/05/27/20230527060045.jpg",
    source: "Tada Today's",
    url: "https://tadatodays.com/detail/pantai-bahak-tongas-suguhkan-panorama-sunset-menakjubkan",
  },
  {
    slug: "ini-sosok-di-balik-rindangnya-pantai-bahak-tongas",
    title: "Ini Sosok di Balik Rindangnya Pantai Bahak Tongas",
    category: "Wisata",
    date: "20 Juni 2022",
    iso: "2022-06-20T21:44:24+07:00",
    excerpt:
      "Syamsuri merintis Pantai Bahak Indah di Desa Curah Dringu sejak 1989 hingga kini menjadi destinasi rindang di pesisir Tongas.",
    image:
      "https://cdn-jpr.jawapos.com/images/21/radarbromo/2022/06/19-FOTO-kini-pantai-Bahak-3.jpg",
    source: "Radar Bromo",
    url: "https://radarbromo.jawapos.com/features/2206200032/ini-sosok-di-balik-rindangnya-pantai-bahak-tongas",
  },
  {
    slug: "semarak-festival-nelayan-dan-petik-laut-desa-curah-dringu",
    title: "Semarak, Festival Nelayan dan Petik Laut Desa Curah Dringu",
    category: "Kegiatan Desa",
    date: "1 September 2019",
    iso: "2019-09-01T12:06:58+07:00",
    excerpt:
      "Petik laut dan festival nelayan di Pantai Tambak Bahak meriah sebagai apresiasi bagi para nelayan desa.",
    image:
      "https://probolinggokab.go.id/wp-content/uploads/2019/09/Semarak-Festival-Nelayan-dan-Petik-Laut-Desa-Curah-Dringu.jpg",
    source: "Pemkab Probolinggo",
    url: "https://probolinggokab.go.id/semarak-festival-nelayan-dan-petik-laut-desa-curah-dringu/",
  },
];

/**
 * Tandai true selama ANNOUNCEMENTS masih berupa data contoh; memunculkan
 * pemberitahuan di halaman publik. Set false begitu data asli dipasang.
 */
export const IS_ANNOUNCEMENTS_MOCK = true;

export interface AnnouncementItem {
  slug: string;
  title: string;
  category: string;
  /** Tanggal siap tampil dalam bahasa Indonesia, mis. "5 September 2026". */
  date: string;
  /** Tanggal mentah ISO 8601 untuk pengurutan & filter tahun. */
  iso: string;
  excerpt: string;
  /** Lokasi pelaksanaan, mis. nama dusun atau balai desa. */
  location: string;
}

/**
 * Contoh data pengumuman desa — ganti/diperbanyak sesuai kebutuhan.
 * Diurutkan terbaru terlebih dahulu.
 */
export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    slug: "posyandu-balita-lansia-september-2026",
    title: "Jadwal Posyandu Balita & Lansia September 2026",
    category: "Kesehatan",
    date: "5 September 2026",
    iso: "2026-09-05T08:00:00+07:00",
    excerpt:
      "Posyandu rutin digelar serentak di seluruh dusun. Bawa buku KIA untuk balita dan kartu kontrol bagi lansia.",
    location: "Balai Desa & Posyandu Tiap Dusun",
  },
  {
    slug: "musdes-rkpdes-ta-2028",
    title: "Undangan Musyawarah Desa RKPDes Tahun Anggaran 2028",
    category: "Pemerintahan",
    date: "1 September 2026",
    iso: "2026-09-01T09:00:00+07:00",
    excerpt:
      "Seluruh elemen masyarakat diundang menyampaikan usulan pembangunan untuk didayagunakan dalam RKPDes TA 2028.",
    location: "Balai Desa Curahdringu",
  },
  {
    slug: "penyaluran-pkh-semester-ii-2026",
    title: "Penyaluran Bantuan Sosial PKH Semester II 2026",
    category: "Bantuan Sosial",
    date: "28 Agustus 2026",
    iso: "2026-08-28T08:30:00+07:00",
    excerpt:
      "Penyaluran bertahap sesuai kelompok KPM. Wajib membawa KTP asli dan mengikuti verifikasi pendamping.",
    location: "Kantor Desa Curahdringu",
  },
  {
    slug: "kerja-bakti-bersih-pantai-bahak",
    title: "Kerja Bakti Pembersihan Kawasan Pantai Bahak",
    category: "Kegiatan",
    date: "30 Agustus 2026",
    iso: "2026-08-30T07:00:00+07:00",
    excerpt:
      "Gotong royong membersihkan sampah dan rumpun bambu menjelang musim liburan. Sarana makan disediakan.",
    location: "Pantai Bahak, Dusun Bahak",
  },
  {
    slug: "pendaftaran-pelatihan-umkm-digital",
    title: "Pendaftaran Pelatihan UMKM: Digital Marketing & Fotoproduk",
    category: "Ekonomi",
    date: "27 Agustus 2026",
    iso: "2026-08-27T13:00:00+07:00",
    excerpt:
      "Kuota 30 pelaku usaha. Prioritas produk olahan laut dan kerajinan warga. Gratis, fasilitator dari Dinkop UKM.",
    location: "Balai UM KM Desa",
  },
  {
    slug: "imunisasi-bias-anak-sekolah",
    title: "Imunisasi Lanjutan Anak Sekolah (BIAS) Tahun Ajaran Baru",
    category: "Kesehatan",
    date: "20 Agustus 2026",
    iso: "2026-08-20T08:00:00+07:00",
    excerpt:
      "Petugas Puskesmas Tongas mendatangi sekolah dasar dan MI se-desa. Sertakan buku imunisasi anak.",
    location: "SDN & MI Se-Desa Curahdringu",
  },
  {
    slug: "transparansi-apbdes-semester-i-2026",
    title: "Publikasi Laporan Realisasi APBDes Semester I 2026",
    category: "Keuangan",
    date: "10 Agustus 2026",
    iso: "2026-08-10T00:00:00+07:00",
    excerpt:
      "Laporan realisasi pendapatan & belanja desa dapat dilihat papan informasi kantor desa dan media sosial resmi.",
    location: "Papan Informasi Kantor Desa",
  },
  {
    slug: "pendataan-ulang-kartu-keluarga",
    title: "Pendataan Ulang Kartu Keluarga & KTP-el Gratis",
    category: "Administrasi",
    date: "15 Agustus 2026",
    iso: "2026-08-15T08:00:00+07:00",
    excerpt:
      "Layanan Disdukcapil keliling desa bagi warga yang KK rusak, data tidak sinkron, atau belum memiliki KTP-el.",
    location: "Kantor Desa Curahdringu",
  },
  {
    slug: "sosialisasi-mitigasi-gelombang-tinggi",
    title: "Sosialisasi Mitigasi Gelombang Tinggi Selat Madura",
    category: "Kebencanaan",
    date: "30 Juli 2026",
    iso: "2026-07-30T14:00:00+07:00",
    excerpt:
      "Edaran protokol kesiapsiagaan nelayan saat BMKG mengeluarkan peringatan dini gelombang tinggi.",
    location: "Dusun Bahak & Tambak",
  },
  {
    slug: "penyaluran-beras-bulog-kpm",
    title: "Jadwal Penyaluran Beras SPHP Bulog untuk 331 KPM",
    category: "Bantuan Sosial",
    date: "25 Juli 2026",
    iso: "2026-07-25T09:00:00+07:00",
    excerpt:
      "Pengambilan per RT sesuai jadwal yang dibagikan ketua RT. Tunjukkan surat panggilan dari pemerintah desa.",
    location: "Gudang Desa Curahdringu",
  },
  {
    slug: "rapat-koordinasi-festival-mangrove-viii",
    title: "Rapat Koordinasi Persiapan Festival Mangrove Jawa Timur VIII",
    category: "Agenda",
    date: "18 Juli 2026",
    iso: "2026-07-18T10:00:00+07:00",
    excerpt:
      "Koordinasi lintas instansi, kelompok nelayan, dan karang taruna menjelang festival tahunan di Pantai Bahak.",
    location: "Balai Desa Curahdringu",
  },
  {
    slug: "kerja-bakti-jumat-bersih",
    title: "Jumat Bersih Lingkungan Dusun Krajan",
    category: "Kegiatan",
    date: "26 Juni 2026",
    iso: "2026-06-26T07:00:00+07:00",
    excerpt:
      "Program rutin kebersihan lingkungan tiap Jumat pagi bergilir antar RT di Dusun Krajan.",
    location: "Dusun Krajan",
  },
  {
    slug: "penyaluran-bansos-akhir-tahun-2025",
    title: "Penyaluran Bantuan Sosial Warga Rentan Akhir Tahun 2025",
    category: "Bantuan Sosial",
    date: "18 Desember 2025",
    iso: "2025-12-18T09:00:00+07:00",
    excerpt:
      "Bantuan paket sembako untuk 120 warga rentan hasil Rapat Pembahasan Data Penerima Manfaat.",
    location: "Kantor Desa Curahdringu",
  },
  {
    slug: "apel-siaga-bencana-2025",
    title: "Apel Siaga Dan Simulasi Tanggap Bencana Tingkat Desa",
    category: "Kebencanaan",
    date: "20 November 2025",
    iso: "2025-11-20T07:30:00+07:00",
    excerpt:
      "Simulasi evakuasi banjir rob bersama BPBD, linmas, dan karang taruna. Warga dipersilakan menyaksikan.",
    location: "Lapangan Desa Curahdringu",
  },
];

export interface PotensiItem {
  title: string;
  tag: string;
  desc: string;
  image: string;
  /** Lokasi dusun/kawasan spesifik */
  location?: string;
  /** Rentang harga tiket / info ekonomi singkat */
  meta?: string;
  /** Poin unggulan untuk ditampilkan sebagai bullet */
  highlights?: string[];
  /** Koordinat opsional untuk CTA maps */
  coords?: { lat: number; lng: number };
  /** Sumber rujukan (tampilkan sebagai footnote sumber terpercaya) */
  sourceLabel?: string;
  sourceUrl?: string;
}

export const POTENSI: PotensiItem[] = [
  {
    title: "Pantai Bahak Indah (PBI) — Pantai Tambak Bahak",
    tag: "Wisata Bahari",
    location: "Dusun Bahak, Desa Curah Dringu & Dungun — pesisir Selat Madura",
    meta: "Tiket Rp10.000–13.000 • Buka 07.00–21.00 WIB • Koordinat -7.7256, 113.1192",
    desc: "Ikon wisata Probolinggo utara yang dirintis Syamsuri sejak 1989. Terkenal sunset Selat Madura, hutan cemara rindang, serta anjungan & menara pandang ikonik. Akses mudah via Tongas dari desa, dicatat resmi di SIDITA Disbudpar Jatim. Kini ramai dibahas karena Festival Nelayan Petik Laut tahunan, Festival Mangrove Jatim VII (2025), dan kegiatan Relawan Bakti BUMN 2026 + pasar rakyat. Pengelolaan kolaboratif Disporaparbud + BUMDes Bersama (Curah Dringu & Dungun).",
    highlights: [
      "Anjungan & menara pandang instagramable, gazebo, musholla, taman bermain anak, warung kuliner",
      "Pantai bersih, tertata, dan tenang — cocok keluarga & pemburu sunset",
      "Event rutin: Petik Laut nelayan, Festival Mangrove, Bakti BUMN & pasar rakyat",
    ],
    image:
      "https://sidita.disbudpar.jatimprov.go.id/storage/foto-dtw/b1a2d_1671417445.jpg",
    coords: { lat: -7.7256977, lng: 113.1192361 },
    sourceLabel: "Disbudpar Jatim (SIDITA) • Radar Bromo • Pemkab Probolinggo",
    sourceUrl:
      "https://sidita.disbudpar.jatimprov.go.id/destinasi/detail/48d3ac1d9c00607cae9fb0d81385a48ff6c7ae150b09959d877e58e4f8e29da3b9d24bd1ca70981487b13dbad08409272b98f9dd1873a12049e41a431837a840",
  },
  {
    title: "Ekowisata & Konservasi Mangrove",
    tag: "Konservasi",
    location: "Sabuk hijau pesisir Pantai Bahak Indah",
    meta: "500–5.000 bibit tertanam • Ekonomi Biru (Blue Economy)",
    desc: "Hutan mangrove sebagai benteng alami: penyerap polutan, pencegah abrasi & intrusi air laut, habitat biota, dan laboratorium alam. Jadi pusat Festival Mangrove Jawa Timur VII (19–20 Agu 2025) yang dihadiri Gubernur Khofifah, KLH/BPLH, Bakorwil, UNAIR & komunitas — mendorong kolaborasi lintas sektor dan SDGs. DLH Probolinggo menanam 5.000 bibit (2024–2025) bersama warga.",
    highlights: [
      "Festival Mangrove Jatim VII dipusatkan di Curah Dringu (2025)",
      "Aksi 5.000 mangrove — kolaborasi Pemkab, KLH, kampus & warga",
      "Edukasi konservasi + pengembangan ekowisata edukatif",
    ],
    image:
      "https://kemenlh.go.id/dashboard/public/storage/news-activities/thumbnails/Gk6LdHxV8Vo14pN5ZUcKrJsMAlt7Vwpmgkm3Wwca.jpg",
    sourceLabel: "Kemen LH • Pemprov Jatim • UNAIR • ProbolinggoKab",
    sourceUrl: "https://kemenlh.go.id/news/detail/klh-dorong-kolaborasi-lintas-sektor-di-festival-mangrove-jawa-timur-vii",
  },
  {
    title: "Perikanan, Tambak & Tradisi Petik Laut",
    tag: "Bahari",
    location: "Tambak Bahak & pesisir Selat Madura",
    meta: "Nelayan tradisional • Tambak bandeng & udang • Sedekah laut",
    desc: "Nelayan dan petambak adalah tulang punggung pesisir. Tambak di kawasan Bahak menghasilkan bandeng/udang, sementara tradisi Petik Laut & Festival Nelayan (sejak 2019, Pemkab Probolinggo) digelar tiap tahun sebagai sedekah laut dan atraksi budaya — doa keselamatan, larung sesaji, dan pesta rakyat di pantai.",
    highlights: [
      "Festival Nelayan & Petik Laut — event budaya tahunan di PBI",
      "Tambak produktif menopang ekonomi keluarga nelayan",
      "Potensi wisata edukasi bahari & kuliner ikan segar",
    ],
    image:
      "https://probolinggokab.go.id/wp-content/uploads/2019/09/Semarak-Festival-Nelayan-dan-Petik-Laut-Desa-Curah-Dringu.jpg",
    sourceLabel: "Pemkab Probolinggo",
    sourceUrl:
      "https://probolinggokab.go.id/semarak-festival-nelayan-dan-petik-laut-desa-curah-dringu/",
  },
  {
    title: "Olahan Hasil Laut & UMKM Unggulan",
    tag: "UMKM",
    location: "Jl. Raya Tongas, Desa Curah Dringu — sentra rumahan pesisir",
    meta: "Skala Lokal–Ekspor • Terdata UKM Unggulan Jawa Timur",
    desc: "Tercatat di Rekap UKM Unggulan Jawa Timur: Curah Dringu sebagai sentra Pengolahan Hasil Laut. Produk: ikan asin, terasi ikan, abon ikan tongkol, kerupuk ikan khas Tongas — diproduksi rumahan lalu dipasarkan regional hingga ekspor. Didukung pelatihan UMKM Digital Marketing & pasar rakyat di Pantai Bahak.",
    highlights: [
      "Produk: terasi, abon tongkol, ikan asin, kerupuk — kualitas ekspor",
      "Tercatat resmi UKM Unggulan Jatim (Dinkop UKM)",
      "Pasar rakyat PBI + pelatihan foto produk & digital marketing",
    ],
    image:
      "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?auto=format&fit=crop&w=1200&q=80",
    sourceLabel: "Dinkop UKM Jatim • Rekap UKM Unggulan",
    sourceUrl: "https://probolinggokab.go.id/relawan-bakti-bumn-dorong-ekonomi-dan-konservasi-pantai-bahak",
  },
  {
    title: "Pertanian Lahan Sawah Produktif",
    tag: "Agro",
    location: "Lahan persawahan Desa Curah Dringu (Kec. Tongas)",
    meta: "Padi • Jagung • Hortikultura — dikelola BUMDes & kelompok tani",
    desc: "Di balik pesisir, hamparan sawah subur jadi lumbung pangan desa. Radar Bromo (12 Agu 2026) menyoroti potensi bahari + pertanian sebagai dua kekuatan yang dibidik Pemdes. Sawah dikelola kelompok tani bersama BUMDes Lancar Jaya untuk ketahanan pangan dan peningkatan PADes.",
    highlights: [
      "Komoditas: padi, jagung, hortikultura dataran rendah",
      "Kelola bersama BUMDes — BPD tinjau sawah produktif (Agu 2026)",
      "Dua pilar ekonomi: bahari & agraris",
    ],
    image:
      "https://cdn-jpr.jawapos.com/images/21/2026/08/12/subur-kepala-bpd-desa-curahdringu-sugiono-melihat-sawah-yang-dikelola-bumdes-curahdringu-desa-curahdringu-kecamatan-tongas-inneke-agustinjawa-pos-radar-bromo-zCgFz.webp",
    sourceLabel: "Radar Bromo 12 Agu 2026",
    sourceUrl:
      "https://radarbromo.jawapos.com/probolinggo/2608120020/pemerintah-desa-curahdringu-kecamatan-tongas-bidik-penguatan-sektor-wisata-dan-umkm",
  },
  {
    title: "Peternakan & BUMDes Lancar Jaya",
    tag: "BUMDes",
    location: "Desa Curah Dringu — BUMDes sejak 2018",
    meta: "Modal Rp144.060.000 (s.d. 2025) • 2 unit usaha",
    desc: "BUM Desa LANCAR JAYA (2018) jadi motor ekonomi: unit Pembibitan & Budidaya Kambing serta Budidaya Pertanian. Modal terhimpun Rp144 juta hingga 2025, kelola kolaboratif wisata Pantai Bahak (BUMDes Bersama + Disporaparbud) dan berdayakan warga lewat lapangan kerja & pasar wisata.",
    highlights: [
      "Unit: Kambing (pembibitan & budidaya) + Pertanian",
      "Kelola wisata PBI bersama BUMDes Dungun",
      "Mendorong UMKM & retribusi wisata desa",
    ],
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    sourceLabel: "Profil BUMDes Desa Curah Dringu",
    sourceUrl: "https://radarbromo.jawapos.com/probolinggo/2102020030/target-tarik-retribusi-wisata-pantai-bahak-tongas-tahun-ini",
  },
];

export interface AgendaItem {
  day: string;
  month: string;
  title: string;
  time: string;
  place: string;
}

export const AGENDA: AgendaItem[] = [
  {
    day: "14",
    month: "Jun",
    title: "Musyawarah Desa: Rencana Pembangunan",
    time: "19.30 WIB",
    place: "Balai Desa Curah Dringu",
  },
  {
    day: "21",
    month: "Jun",
    title: "Posyandu Lansia & Pemeriksaan Gratis",
    time: "08.00 WIB",
    place: "Polindes Dusun Krajan",
  },
  {
    day: "28",
    month: "Jun",
    title: "Pelatihan Digital Marketing UMKM",
    time: "13.00 WIB",
    place: "Aula BUMDes",
  },
];

export interface Officer {
  name: string;
  role: string;
  /** URL foto resmi jika tersedia di internet; fallback ke Avatar inisial */
  photo?: string;
  /** Kategori untuk grouping tampilan */
  group?: "kepala" | "sekretaris" | "bendahara" | "perangkat";
}

export const OFFICERS: Officer[] = [
  {
    name: "Tiyayah",
    role: "Kepala Desa",
    group: "kepala",
    photo: "https://pojoknasional.co.id/wp-content/uploads/2026/05/IMG-20260530-WA0259.jpg",
  },
  {
    name: "Suharto",
    role: "Sekretaris Desa",
    group: "sekretaris",
    // Foto tidak ditemukan di sumber publik (Pojok Nasional, Radar Patroli, Pemkab) — fallback Avatar
  },
  {
    name: "Rahman",
    role: "Bendahara",
    group: "bendahara",
    // Foto tidak ditemukan di sumber publik — fallback Avatar
  },
  { name: "Abdur Rohim", role: "Perangkat Desa", group: "perangkat" },
  { name: "Uka Yulia", role: "Perangkat Desa", group: "perangkat" },
  { name: "Ghozali", role: "Perangkat Desa", group: "perangkat" },
  { name: "Muhammad", role: "Perangkat Desa", group: "perangkat" },
  { name: "Sutrisno", role: "Perangkat Desa", group: "perangkat" },
  { name: "Nur Halim", role: "Perangkat Desa", group: "perangkat" },
  { name: "Samsul", role: "Perangkat Desa", group: "perangkat" },
  { name: "Fathurrahman", role: "Perangkat Desa", group: "perangkat" },
  { name: "Musrifa", role: "Perangkat Desa", group: "perangkat" },
];

export const MISI: string[] = [
  "Memberikan pelayanan publik yang cepat, transparan, dan ramah.",
  "Mengembangkan potensi pesisir dan UMKM untuk kesejahteraan warga.",
  "Meningkatkan kualitas pendidikan dan kesehatan masyarakat.",
  "Menjaga kelestarian lingkungan pantai dan pertanian desa.",
  "Mendorong partisipasi aktif warga dalam pembangunan desa.",
];

export const QUICK_ACTIONS = [
  { icon: FiFileText, label: "Layanan Surat", href: "/layanan" },
  { icon: FiMessageSquare, label: "Pengaduan", href: "/kontak" },
  { icon: FiMapPin, label: "Lokasi Desa", href: "/#lokasi" },
  { icon: FiBriefcase, label: "UMKM Desa", href: "/potensi" },
];
