"use client";

import { motion } from "framer-motion";
import MarketSizePieChart from "@/components/charts/MarketSizePieChart";

export default function Investment() {
  return (
    <section id="investment" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          5. 投資の妥当性とリスク管理
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="subsection-title">100万円の投資内訳と期待リターン</h3>
            
            <div className="mb-6">
              <MarketSizePieChart />
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>内訳</strong>: 機器費用（40万円）、設置・調整費用（20万円）、出張費用（40万円）
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>ROI</strong>: 初年度で1,840万円の売上見込みに対し、投資額はわずか5.4%
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>回収期間</strong>: 最初の1棟受注で即回収可能
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-teal-50 rounded-lg">
              <p className="text-center font-semibold text-teal-700">
                投資効率: <span className="text-2xl">18.4倍</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="subsection-title">現地パートナーの熱意とビジネスチャンス</h3>
            
            <p className="mb-6 font-semibold text-lg text-teal-600">
              私たちが動くべき最大の理由は、現地パートナーが見出した巨大なマーケット・チャンスです。
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-semibold text-lg mb-3 text-blue-700">1. TERACOM（開発・実装）</h4>
                <ul className="space-y-2 text-sm">
                  <li>• ハノイに200名以上のエンジニア</li>
                  <li>• Viettel、FPT等大手企業への実績</li>
                  <li>• <strong>ベトナムIoT市場の急成長を背景に、省エネソリューションへの参入機会を発見</strong></li>
                </ul>
                <div className="mt-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                  <p className="text-sm"><strong>注意点</strong>: ソフトウェア開発には強いが、ハードウェア実装には別パートナーが必要</p>
                  <p className="text-sm mt-1">現在、ハードウェア対応可能な協力企業を選定中</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow">
                <h4 className="font-semibold text-lg mb-3 text-green-700">2. ARCHID（営業・規制対応）</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Son氏の強いリーダーシップと市場理解</li>
                  <li>• ベトナム建築規制への深い理解</li>
                  <li>• 現地デベロッパーとの強固なネットワーク</li>
                  <li>• <strong>「日本品質×ベトナム市場の成長性」という勝ちパターンを確信</strong></li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
              <p className="text-center">
                彼らは、ベトナムのスマートビル市場がまだ黎明期にあり、
                <br />
                先行者利益を獲得できる今こそがビジネスチャンスだと判断しています。
                <br />
                <strong className="text-teal-600">この市場洞察に基づいた熱意こそが、成功の鍵となります。</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}