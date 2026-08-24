export type MonthlyPerformance = { label: string; income: number; expense: number };
export type ExpenseItem = { name: string; amount: number };

export const BUMDESA_FINANCIAL = {
  period: "01 Agustus 2025 – 23 Agustus 2026",
  openingCapital: 144_060_000,
  income: 7_100_000,
  expense: 53_062_223,
  loss: 45_962_223,
  bankBalance: 25_520_000,
  bankSpending: 125_640_000,
  assets: 98_097_777,
  liabilities: 0,
  units: [
    { name: "Pembibitan & Budidaya Kambing", income: 0, expense: 40_955_556, result: -40_955_556 },
    { name: "Budidaya Pertanian", income: 7_100_000, expense: 12_106_667, result: -5_006_667 },
  ],
  monthly: [
    ["Agu 2025", 0, 350_000], ["Sep 2025", 0, 1_283_333], ["Okt 2025", 0, 5_263_333],
    ["Nov 2025", 0, 6_632_222], ["Des 2025", 0, 2_593_333], ["Jan 2026", 0, 6_312_222],
    ["Feb 2026", 1_100_000, 6_790_000], ["Mar 2026", 0, 4_538_889], ["Apr 2026", 0, 2_300_000],
    ["Mei 2026", 6_000_000, 11_148_889], ["Jun 2026", 0, 2_300_000], ["Jul 2026", 0, 2_250_000],
    ["Agu 2026", 0, 1_300_002],
  ].map(([label, income, expense]) => ({ label: label as string, income: income as number, expense: expense as number })),
  expenseGroups: [
    ["Pemeliharaan & Pakan Kambing", 17_110_000, 32.2], ["Kerugian Kematian Kambing (4 ekor)", 9_355_556, 17.6],
    ["Beban Pokok Hasil Panen (2 siklus)", 8_940_000, 16.8], ["Penyusutan Aset", 5_400_000, 10.2],
    ["Amortisasi Sewa Lahan (3 akun)", 4_766_667, 9.0], ["Persiapan & Pelatihan", 3_980_000, 7.5],
    ["Utilitas & Transportasi", 3_510_000, 6.6],
  ].map(([name, amount, percent]) => ({ name: name as string, amount: amount as number, percent: percent as number })),
  expenseItems: [
    ["Kerugian Kematian Kambing", 9_355_556], ["Beban Pemelihara Kambing", 9_000_000], ["Beban Pokok Hasil Panen Siklus 2", 5_500_000],
    ["Beban Penyusutan Bangunan Kandang", 4_400_000], ["Beban Pokok Hasil Panen Siklus 1", 3_440_000], ["Beban Transportasi", 3_010_000],
    ["Beban Pakan Ternak", 2_820_000], ["Beban Konsentrat Ternak", 2_800_000], ["Beban Pelatihan Breeding Kambing", 2_400_000],
    ["Beban Amortisasi Sewa Lahan Siklus Pertanian", 2_000_000], ["Beban Amortisasi Sewa Lahan Kambing", 1_600_000],
    ["Beban Amortisasi Sewa Lahan Pertanian 5 Tahun", 1_166_667], ["Beban Bekatul", 1_020_000], ["Beban Penyusutan Mesin Pencacah", 1_000_000],
    ["Beban Konsumsi Pembangunan", 650_000], ["Beban Listrik", 500_000], ["Beban Obat dan Vitamin Kambing", 450_000],
    ["Beban Molase Tetes", 420_000], ["Beban Monitoring dan Evaluasi", 400_000], ["Beban ATK", 350_000],
    ["Beban Kebersihan Kandang", 250_000], ["Beban Perbaikan Kecil Kandang dan Peralatan", 200_000], ["Beban Banner dan Promosi Awal", 180_000], ["Beban Air dan Sanitasi Kandang", 150_000],
  ].map(([name, amount]) => ({ name: name as string, amount: amount as number })),
  assetsList: [
    ["Kas & Bank Jatim", 25_520_000], ["Aset Biologis — 14 ekor kambing", 32_744_444], ["Sewa dibayar di muka", 15_233_333],
    ["Bangunan Kandang Kambing (neto)", 19_600_000], ["Mesin Pencacah Pakan (neto)", 5_000_000],
  ].map(([name, amount]) => ({ name: name as string, amount: amount as number })),
  goats: { purchased: 18, dead: 4, remaining: 14, grossValue: 42_100_000, lossValue: 9_355_556, netValue: 32_744_444 },
} as const;
