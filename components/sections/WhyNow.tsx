"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/lib/data/market-data";

export default function WhyNow() {
  return (
    <section id="why-now" className="section bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          2. なぜ今参入すべきなのか
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="subsection-title">日本市場の現状とベトナム市場の可能性</h3>
              
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-red-700 mb-3">日本市場の課題：</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• アズビル、ジョンソンコントロールズなど大手が市場を寡占</li>
                    <li>• 新築市場への参入障壁が極めて高い</li>
                    <li>• 価格競争が激しく、利益率が低下傾向</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-green-700 mb-3">ベトナム市場の機会：</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ArchidのSon氏も指摘する通り、市場はまだ混沌としており、<strong>パイオニアになれる可能性が高い</strong></li>
                    <li>• 日本品質への信頼が厚く、プレミアム価格を設定可能</li>
                    <li>• 政府主導の省エネ推進により、市場拡大が約束されている</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-blue-700 mb-3">二正面作戦の重要性：</h4>
                  <p className="text-gray-700">
                    日本で培った技術と実績をベトナムで展開し、ベトナムでの成功事例を日本に逆輸入する。この両睨み戦略により、両市場でのプレゼンス向上が期待できます。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="subsection-title">規制変更による市場転換点</h3>
            
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-8 rounded-xl mb-6">
              <h4 className="text-2xl font-bold mb-4">
                2025年は、ベトナム省エネ市場の歴史的転換点です。
              </h4>
            </div>

            <div className="space-y-4">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="timeline-item"
                >
                  <div className="timeline-dot" />
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h5 className="font-semibold text-teal-600 mb-2">{item.date}: {item.title}</h5>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">新電力法の詳細（2025年2月施行）</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>再生可能エネルギーへの大転換を促進</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>2050年までに太陽光・風力で総設備容量の60%以上を目標</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>省エネ設備導入への優遇措置拡大</span>
                </li>
              </ul>
              <a href="https://www.vietnam-briefing.com/news/vietnams-new-electricity-law-legal-framework-renewable-energy.html/" 
                 className="link-underline text-sm text-gray-600 mt-2 block"
                 target="_blank" 
                 rel="noopener noreferrer">
                Vietnam Briefing
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">競合状況と先行者利益</h3>
            <p className="mb-4">現在、ベトナムのBMS市場はまだ黎明期にあり、主要プレーヤーは限定的です：</p>
            <ul className="space-y-2 mb-4">
              <li>• Schneider Electric（フランス）</li>
              <li>• Honeywell（米国）</li>
              <li>• Johnson Controls（米国）</li>
            </ul>
            <p className="font-semibold text-teal-600">
              日本企業で本格参入している企業はまだありません。今参入すれば、日本品質のブランドで市場をリードできます。
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">実績作りの重要性</h3>
            <p className="mb-4">
              <strong>このビジネスは信頼が全て</strong>です。日本でもベトナムでも、最初の実績を作り、その成功事例を横展開することが成功の鍵となります。Horison Towerは、まさにその第一歩となる重要なプロジェクトです。
            </p>
            <ul className="space-y-2">
              <li>• ZEBHubの公認プロジェクトとしての信頼性</li>
              <li>• CBREという世界的企業での実績</li>
              <li>• 政府・メディアによる広報効果</li>
            </ul>
            <p className="mt-4 text-gray-700">
              これらにより、次の案件獲得が格段に容易になります。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}