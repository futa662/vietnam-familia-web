"use client";

import { motion } from "framer-motion";

export default function Conclusion() {
  const keyPoints = [
    {
      icon: "📅",
      title: "規制の転換点",
      description: "2025年の新電力法施行で省エネ市場が本格化"
    },
    {
      icon: "🏆",
      title: "競合不在",
      description: "日本企業で本格参入している企業はまだゼロ"
    },
    {
      icon: "💡",
      title: "パートナーの市場洞察",
      description: "TERACOMとARCHIDが発見した大きなビジネスチャンス"
    },
    {
      icon: "🎯",
      title: "実績作りの好機",
      description: "ZEBHub公認プロジェクトで信頼性を確立"
    }
  ];

  const references = [
    {
      title: "Vietnam Real Estate Market 2025 - Vietnam Briefing",
      url: "https://www.vietnam-briefing.com/news/vietnam-real-estate-market-2025-prime-investment-destination-southeast-asia.html/"
    },
    {
      title: "CBRE Vietnam Market Outlook 2025",
      url: "https://www.cbrevietnam.com/insights/reports/vietnam-market-outlook-2025"
    },
    {
      title: "Vietnam Energy Efficiency - Trade.gov",
      url: "https://www.trade.gov/market-intelligence/vietnam-energy-efficiency"
    },
    {
      title: "Southeast Asia BMS Market - Verified Market Research",
      url: "https://www.verifiedmarketresearch.com/product/southeast-asia-building-management-systems-market/"
    },
    {
      title: "Vietnam BMS Market Report 2025 - GlobeNewswire",
      url: "https://www.globenewswire.com/news-release/2025/06/25/3104955/28124/en/Vietnam-Building-Management-System-Market-Report-2025-Smart-City-Initiatives-Propel-Vietnam-s-Infrastructure-and-BMS-Market-Forward.html"
    }
  ];

  return (
    <section id="conclusion" className="section bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          結論
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
        >
          <p className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            今回の<span className="text-teal-600">100万円</span>の投資は、
            <br />
            将来的に<span className="text-teal-600">数千億円規模</span>の市場機会への第一歩です。
          </p>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">なぜ今なのか？</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 text-4xl">{point.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{point.title}</h4>
                    <p className="text-gray-700">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold mb-4">日本とベトナムの二正面作戦の意義：</h3>
            
            <p className="mb-4">
              日本市場はアズビルやジョンソンコントロールズなど大手が強く、新規参入のハードルが高いのが現実です。一方、ベトナム市場はまだ混沌としており、私たちがパイオニアになれる可能性が高い。ベトナムでの成功を日本に逆輸入することで、両市場でのプレゼンス向上が期待できます。
            </p>

            <p className="text-lg">
              ベトナムは今、まさに高度経済成長期を迎えており、会長が投資されているSONKIM LANDをはじめとする不動産セクターの活況は、まさに日本の1970-80年代を彷彿とさせます。
              <strong className="text-teal-600">BMS市場の363億円は氷山の一角で、IoT市場1,650億円、グリーンビル市場12兆円という巨大な潜在市場</strong>が広がっています。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-8"
          >
            <p className="text-lg">
              最も重要なのは、TERACOMとARCHIDが見出したマーケット・チャンスです。彼らは現場で「日本品質×ベトナム市場の成長性」という勝ちパターンを確信しています。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              100万円の投資で、東南アジア全体のスマートビル市場への扉を開く。
              <br />
              日本とASEANの架け橋となり、両地域の省エネ市場をリードする。
            </p>
            
            <p className="text-2xl md:text-3xl font-bold text-teal-600">
              この戦略的な一手について、議論させていただきたい。
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-6">参考リンク</h3>
          
          <ol className="space-y-3">
            {references.map((ref, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-500 mr-3">{index + 1}.</span>
                <a 
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-gray-700 hover:text-teal-600 transition-colors"
                >
                  {ref.title}
                </a>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}