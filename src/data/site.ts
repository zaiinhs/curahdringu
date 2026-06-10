import {
  FiFileText,
  FiHome,
  FiUsers,
  FiHeart,
  FiTruck,
  FiMessageSquare,
  FiBriefcase,
  FiMapPin,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export const VILLAGE = {
  name: "Desa Curah Dringu",
  shortName: "Curah Dringu",
  tagline: "Desa Pesisir yang Ramah, Terbuka, dan Melayani",
  district: "Kecamatan Tongas",
  regency: "Kabupaten Probolinggo",
  province: "Jawa Timur",
  phone: "(0335) 123-456",
  email: "halo@curahdringu.site",
  address:
    "Jl. Raya Curah Dringu, Kec. Tongas, Kabupaten Probolinggo, Jawa Timur 67252",
  hours: "Senin – Jumat, 08.00 – 15.00 WIB",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7907.074474567588!2d113.10910336348222!3d-7.732694337705844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7b3e227a123b5%3A0xe550fa8829b59f97!2sCurahdringu%2C%20Kec.%20Tongas%2C%20Kabupaten%20Probolinggo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1732621614076!5m2!1sid!2sid",
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
  { label: "Kontak", href: "/kontak" },
];

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  helper: string;
}

export const STATS: StatItem[] = [
  { label: "Total Penduduk", value: 4820, suffix: "+", helper: "Jiwa terdaftar" },
  { label: "Kepala Keluarga", value: 1356, helper: "KK aktif" },
  { label: "Luas Wilayah", value: 6.4, suffix: " km²", helper: "Termasuk pesisir" },
  { label: "RT / RW", value: 24, helper: "Lingkungan warga" },
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
  date: string;
  excerpt: string;
  image: string;
}

export const NEWS: NewsItem[] = [
  {
    slug: "gotong-royong-pesisir",
    title: "Gotong Royong Bersihkan Pantai Selat Madura",
    category: "Kegiatan",
    date: "2 Juni 2026",
    excerpt:
      "Ratusan warga bahu-membahu membersihkan garis pantai demi wisata pesisir yang lebih lestari.",
    image:
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "posyandu-balita",
    title: "Jadwal Posyandu & Imunisasi Balita Juni 2026",
    category: "Kesehatan",
    date: "28 Mei 2026",
    excerpt:
      "Layanan posyandu rutin kembali digelar di setiap dusun. Cek jadwal lengkap dan persyaratannya.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "bumdes-umkm",
    title: "BUMDes Luncurkan Etalase Digital Produk UMKM",
    category: "Ekonomi",
    date: "20 Mei 2026",
    excerpt:
      "Produk olahan ikan dan kerajinan warga kini bisa dipasarkan lebih luas lewat platform desa.",
    image:
      "https://images.unsplash.com/photo-1556909211-d5b1f1d5a7d3?auto=format&fit=crop&w=1200&q=80",
  },
];

export interface PotensiItem {
  title: string;
  tag: string;
  desc: string;
  image: string;
}

export const POTENSI: PotensiItem[] = [
  {
    title: "Wisata Pantai Selat Madura",
    tag: "Wisata",
    desc: "Panorama senja dan aktivitas nelayan tradisional yang memikat wisatawan.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Olahan Hasil Laut",
    tag: "UMKM",
    desc: "Ikan asin, terasi, dan kerupuk khas produksi rumahan warga pesisir.",
    image:
      "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pertanian & Perkebunan",
    tag: "Agro",
    desc: "Lahan produktif penghasil padi, jagung, dan hortikultura lokal.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
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
}

export const OFFICERS: Officer[] = [
  { name: "Tiyayah", role: "Kepala Desa" },
  { name: "Siti Maesaroh", role: "Sekretaris Desa" },
  { name: "Budi Hartono", role: "Kaur Keuangan" },
  { name: "Dewi Lestari", role: "Kaur Pemerintahan" },
  { name: "Slamet Riyadi", role: "Kasi Kesejahteraan" },
  { name: "Nur Hidayah", role: "Kaur Umum & Perencanaan" },
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
