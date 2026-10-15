export type MonthlyPerformance = { label: string; income: number; expense: number };
export type ExpenseItem = { name: string; amount: number };

export const BUMDESA_FINANCIAL = {
  period: "01 Agustus 2025 – 30 September 2026",
  openingCapital: 144_060_000,
  income: 17_100_000,
  expense: 62_700_556,
  loss: 45_600_556,
  bankBalance: 27_215_000,
  bankSpending: 133_945_000,
  assets: 98_459_444,
  liabilities: 0,
  units: [
    { name: "Pembibitan & Budidaya Kambing", income: 0, expense: 43_405_556, result: -43_405_556 },
    { name: "Budidaya Pertanian", income: 17_100_000, expense: 19_295_000, result: -2_195_000 },
  ],
  monthly: [
    ["Agu 2025", 0, 350_000], ["Sep 2025", 0, 1_283_333], ["Okt 2025", 0, 5_263_333],
    ["Nov 2025", 0, 6_632_222], ["Des 2025", 0, 2_593_333], ["Jan 2026", 0, 6_312_222],
    ["Feb 2026", 1_100_000, 7_290_000], ["Mar 2026", 0, 4_372_222], ["Apr 2026", 0, 2_133_333],
    ["Mei 2026", 6_000_000, 11_648_889], ["Jun 2026", 0, 2_133_333], ["Jul 2026", 0, 2_083_333],
    ["Agu 2026", 0, 2_033_337], ["Sep 2026", 10_000_000, 8_571_666],
  ].map(([label, income, expense]) => ({ label: label as string, income: income as number, expense: expense as number })),
  expenseGroups: [
    ["Pemeliharaan & Pakan Kambing", 19_060_000, 30.4], ["Kerugian Kematian Kambing (4 ekor)", 9_355_556, 14.9],
    ["Beban Pokok Hasil Panen (3 siklus)", 14_295_000, 22.8], ["Penyusutan Aset", 5_900_000, 9.4],
    ["Beban Sewa Lahan (3 akun)", 6_600_000, 10.5], ["Persiapan & Pelatihan", 3_980_000, 6.3],
    ["Utilitas & Transportasi", 3_510_000, 5.6],
  ].map(([name, amount, percent]) => ({ name: name as string, amount: amount as number, percent: percent as number })),
  expenseItems: [
    ["Beban Pemelihara Kambing", 10_800_000], ["Kerugian Kematian Kambing", 9_355_556], ["Beban Pokok Hasil Panen Siklus 2", 5_500_000], ["Beban Pokok Hasil Panen Siklus 3", 5_355_000],
    ["Beban Penyusutan Bangunan Kandang", 4_800_000], ["Beban Pokok Hasil Panen Siklus 1", 3_440_000], ["Beban Transportasi", 3_010_000],
    ["Beban Konsentrat Ternak", 2_900_000], ["Beban Pakan Ternak", 2_870_000], ["Beban Pelatihan Breeding Kambing", 2_400_000],
    ["Beban Amortisasi Sewa Lahan Siklus Pertanian", 3_000_000], ["Beban Amortisasi Sewa Lahan Pertanian 5 Tahun", 2_000_000],
    ["Beban Amortisasi Sewa Lahan Kambing", 1_600_000], ["Beban Penyusutan Mesin Pencacah", 1_100_000], ["Beban Bekatul", 1_020_000],
    ["Beban Konsumsi Pembangunan", 650_000], ["Beban Listrik", 500_000], ["Beban Obat dan Vitamin Kambing", 450_000],
    ["Beban Molase Tetes", 420_000], ["Beban Monitoring dan Evaluasi", 400_000], ["Beban ATK", 350_000],
    ["Beban Kebersihan Kandang", 250_000], ["Beban Perbaikan Kecil Kandang dan Peralatan", 200_000], ["Beban Banner dan Promosi Awal", 180_000], ["Beban Air dan Sanitasi Kandang", 150_000],
  ].map(([name, amount]) => ({ name: name as string, amount: amount as number })),
  assetsList: [
    ["Kas & Bank Jatim", 27_215_000], ["Aset Biologis — 14 ekor kambing", 32_744_444], ["Sewa dibayar di muka", 14_400_000],
    ["Bangunan Kandang Kambing (neto)", 19_200_000], ["Mesin Pencacah Pakan (neto)", 4_900_000],
  ].map(([name, amount]) => ({ name: name as string, amount: amount as number })),
  goats: { purchased: 18, dead: 4, remaining: 14, grossValue: 42_100_000, lossValue: 9_355_556, netValue: 32_744_444 },
} as const;
