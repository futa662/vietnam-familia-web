"use client";

import { motion } from "framer-motion";
import MarketGrowthChart from "@/components/charts/MarketGrowthChart";
import { gdpGrowthData, urbanizationData } from "@/lib/data/market-data";

export default function MarketGrowth() {
  return (
    <section id="market-growth" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          1. ベトナム不動産市場の爆発的成長と省エネ需要
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="subsection-title">市場規模と成長性</h3>
            <p className="mb-6">
              ベトナムの不動産市場は、東南アジアで最も急成長している市場の一つです。会長が投資されているSONKIM LANDも恩恵を受けているこの市場の勢いは、以下のデータが示す通りです。
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>市場規模</strong>: 2024年に295億ドル、2033年には344億ドルへ成長予測
                  <br />
                  <a href="https://www.imarcgroup.com/vietnam-real-estate-market/requestsample" 
                     className="link-underline text-sm text-gray-600"
                     target="_blank" 
                     rel="noopener noreferrer">
                    IMARC Group
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>GDP成長率</strong>: 2024年は7.09%を記録、2025年も6.5%以上を予測
                  <br />
                  <a href="https://www.vietnam-briefing.com/news/vietnam-real-estate-market-2025-prime-investment-destination-southeast-asia.html/" 
                     className="link-underline text-sm text-gray-600"
                     target="_blank" 
                     rel="noopener noreferrer">
                    Vietnam-Briefing
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>都市化の進展</strong>: 現在の都市化率37%から2030年には45%へ（約1,000万人が都市へ移住）
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>建設市場規模</strong>: 2024年に685.7億ドル、2032年には1,376.4億ドルへ（年平均成長率9.1%）
                  <br />
                  <a href="https://www.verifiedmarketresearch.com/product/vietnam-construction-market/" 
                     className="link-underline text-sm text-gray-600"
                     target="_blank" 
                     rel="noopener noreferrer">
                    Verified Market Research
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <h4 className="text-xl font-semibold mb-4">BMS市場成長予測</h4>
            <MarketGrowthChart />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8 mb-12"
        >
          <p className="text-lg mb-4">
            特筆すべきは、ハノイのアパート価格が2025年第1四半期に前年比29.6%上昇し、1平方メートルあたり2,865ドルに達したことです。この急激な価格上昇は、質の高い不動産への需要の高さを示しています。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="subsection-title">省エネ規制の強化とグリーンビルディングの需要拡大</h3>
          
          <p className="mb-6">
            ベトナム政府は、2050年までにネットゼロ達成を国際公約として掲げており、建築物の省エネ化が急務となっています。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card">
              <h4 className="text-xl font-semibold mb-3 text-teal-600">VNEEP3（2019-2030）</h4>
              <p className="text-gray-700">国家エネルギー消費量の8-10%削減目標</p>
              <a href="https://www.trade.gov/market-intelligence/vietnam-energy-efficiency" 
                 className="link-underline text-sm text-gray-600 mt-2 block"
                 target="_blank" 
                 rel="noopener noreferrer">
                Trade.gov
              </a>
            </div>
            
            <div className="card">
              <h4 className="text-xl font-semibold mb-3 text-teal-600">建築規制QCVN 09:2017</h4>
              <p className="text-gray-700">2,500m²以上の建物に省エネ基準を義務化</p>
              <a href="https://policy.asiapacificenergy.org/node/1107" 
                 className="link-underline text-sm text-gray-600 mt-2 block"
                 target="_blank" 
                 rel="noopener noreferrer">
                ESCAP Policy
              </a>
            </div>
            
            <div className="card">
              <h4 className="text-xl font-semibold mb-3 text-teal-600">グリーンビル認証の価値</h4>
              <p className="text-gray-700">LOTUS認証取得物件は賃料が5-10%プレミアム</p>
            </div>
          </div>

          <div className="bg-teal-100 rounded-xl p-6">
            <p className="text-lg">
              2023年には<span className="font-bold text-teal-700">276棟</span>だったグリーンビルディングが、
              2024年には<span className="font-bold text-teal-700">396棟</span>に急増。
              この成長トレンドは、省エネソリューションへの需要の高まりを明確に示しています。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}