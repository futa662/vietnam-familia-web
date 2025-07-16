"use client";

import { motion } from "framer-motion";
import { partnerData } from "@/lib/data/market-data";

export default function CbreZebhub() {
  return (
    <section id="cbre-zebhub" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          3. CBREとZEBHubを通じた市場展開の確実性
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="subsection-title text-blue-700">CBREの圧倒的な市場シェア</h3>
            
            <p className="mb-6">
              CBREは世界最大級の不動産サービス会社であり、ベトナムでも圧倒的な存在感を持っています。
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">管理物件数</h4>
                  <p className="text-gray-700">ベトナム国内で<span className="text-2xl font-bold text-blue-700 mx-1">200棟以上</span>のオフィス・商業施設を管理</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">市場評価</h4>
                  <p className="text-gray-700">Horison Towerの成功事例をベースに、年間<span className="font-bold text-blue-700">10-20棟</span>への横展開を計画</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">信頼性</h4>
                  <p className="text-gray-700">世界的なブランド力により、顧客の信頼獲得が容易</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="subsection-title text-green-700">ZEBHubプロジェクトの戦略的価値</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold">★</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">政府公認</h4>
                  <p className="text-gray-700">ベトナム初のZEB（ゼロエネルギービル）パイロットプロジェクト</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold">📢</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">広報効果</h4>
                  <p className="text-gray-700">成功事例として政府・メディアによる広報支援</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-700 font-bold">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">技術標準化</h4>
                  <p className="text-gray-700">国家標準モデルとしての採用可能性</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <p className="text-center font-semibold text-green-800">
                つまり、今回の実証実験は単なる1棟の導入ではなく、
                <br />
                <span className="text-lg">ベトナム全土への展開の起点</span>
                となるものです。
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">主要パートナー企業</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {partnerData.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold text-teal-600 mb-2">{partner.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{partner.role}</p>
                <ul className="space-y-2">
                  {partner.strengths.map((strength, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}