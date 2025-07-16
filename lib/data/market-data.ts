export const marketGrowthData = [
  { year: "2024", value: 363, label: "363億円" },
  { year: "2025", value: 420, label: "420億円" },
  { year: "2026", value: 485, label: "485億円" },
  { year: "2027", value: 560, label: "560億円" },
  { year: "2028", value: 615, label: "615億円" },
  { year: "2029", value: 670, label: "670億円" },
  { year: "2030", value: 690, label: "690億円" },
  { year: "2031", value: 710, label: "710億円" },
  { year: "2032", value: 730, label: "730億円" },
  { year: "2033", value: 753, label: "753億円" }
];

export const gdpGrowthData = [
  { year: "2020", rate: 2.9, label: "2.9%" },
  { year: "2021", rate: 2.6, label: "2.6%" },
  { year: "2022", rate: 8.0, label: "8.0%" },
  { year: "2023", rate: 5.1, label: "5.1%" },
  { year: "2024", rate: 7.09, label: "7.09%" },
  { year: "2025", rate: 6.5, label: "6.5%（予測）" }
];

export const urbanizationData = [
  { year: "2020", rate: 35, label: "35%" },
  { year: "2024", rate: 37, label: "37%" },
  { year: "2030", rate: 45, label: "45%（予測）" }
];

export const marketSizeData = [
  { name: "TAM（建設市場）", value: 206000, label: "20.6兆円" },
  { name: "IoT市場", value: 1650, label: "1,650億円" },
  { name: "グリーンビル", value: 120000, label: "12兆円" },
  { name: "BMS市場", value: 753, label: "753億円" },
  { name: "SOM（獲得可能）", value: 40, label: "40億円" }
];

export const revenueProjectionData = [
  { year: "2025", revenue: 0.184, buildings: 2, label: "1,840万円" },
  { year: "2026", revenue: 1.088, buildings: 12, label: "1.08億円" },
  { year: "2027", revenue: 4.008, buildings: 42, label: "4.01億円" },
  { year: "2028", revenue: 8, buildings: 80, label: "8億円" },
  { year: "2029", revenue: 15, buildings: 150, label: "15億円" }
];

export const investmentBreakdownData = [
  { name: "機器費用", value: 40, color: "#14b8a6" },
  { name: "設置・調整費用", value: 20, color: "#0d9488" },
  { name: "出張費用", value: 40, color: "#0f766e" }
];

export const riskMatrix = [
  { 
    name: "技術リスク", 
    impact: 3, 
    probability: 2, 
    description: "現地の電力事情やネットワーク環境への対応",
    mitigation: "TERACOMの技術チームによる現地化対応"
  },
  { 
    name: "競合リスク", 
    impact: 4, 
    probability: 3, 
    description: "欧米・中国企業との競争",
    mitigation: "日本品質とローカライズの組み合わせによる差別化"
  },
  { 
    name: "規制リスク", 
    impact: 3, 
    probability: 2, 
    description: "外資規制や建築規制の変更",
    mitigation: "ARCHIDによる継続的な規制モニタリング"
  },
  { 
    name: "回収リスク", 
    impact: 2, 
    probability: 2, 
    description: "代金回収の遅延",
    mitigation: "CBREを通じた信用力の高い顧客への展開"
  }
];

export const timelineData = [
  { 
    date: "2024年8月", 
    title: "新土地法等施行",
    description: "新土地法・住宅法・不動産事業法の同時施行"
  },
  { 
    date: "2025年2月", 
    title: "新電力法施行",
    description: "再生可能エネルギーへの大転換を促進"
  },
  { 
    date: "2025年", 
    title: "カーボンクレジット市場創設",
    description: "省エネによるCO2削減が直接的な収益源に"
  }
];

export const roadmapData = [
  {
    phase: "フェーズ1",
    period: "2025年1-6月",
    title: "実証実験と市場検証",
    tasks: [
      "Horison Towerでの実証実験実施",
      "省エネ効果の測定と検証",
      "CBREネットワークでの営業活動開始"
    ]
  },
  {
    phase: "フェーズ2",
    period: "2025年7-12月",
    title: "初期展開",
    tasks: [
      "5-10棟への展開",
      "現地法人設立の検討",
      "価格モデルの最適化"
    ]
  },
  {
    phase: "フェーズ3",
    period: "2026年以降",
    title: "本格展開",
    tasks: [
      "年間20棟以上への導入",
      "新築物件への展開",
      "他のASEAN諸国への横展開検討"
    ]
  }
];

export const partnerData = [
  {
    name: "TERACOM",
    role: "開発・実装",
    strengths: [
      "ハノイに200名以上のエンジニア",
      "Viettel、FPT等大手企業への実績",
      "ベトナムIoT市場の急成長を背景に、省エネソリューションへの参入機会を発見"
    ]
  },
  {
    name: "ARCHID",
    role: "営業・規制対応",
    strengths: [
      "Son氏の強いリーダーシップと市場理解",
      "ベトナム建築規制への深い理解",
      "現地デベロッパーとの強固なネットワーク"
    ]
  },
  {
    name: "CBRE",
    role: "市場展開",
    strengths: [
      "ベトナム国内で200棟以上のオフィス・商業施設を管理",
      "世界的なブランド力により、顧客の信頼獲得が容易",
      "年間10-20棟への横展開を計画"
    ]
  }
];