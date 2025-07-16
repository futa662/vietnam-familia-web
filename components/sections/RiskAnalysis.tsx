"use client";

import { motion } from "framer-motion";
import { riskMatrix } from "@/lib/data/market-data";

export default function RiskAnalysis() {
  const getRiskColor = (impact: number, probability: number) => {
    const score = impact * probability;
    if (score >= 12) return "bg-red-500";
    if (score >= 8) return "bg-orange-500";
    if (score >= 4) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <section id="risk-analysis" className="section bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          6. リスク分析と対策
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-8"
        >
          <h3 className="subsection-title">主要リスクと対策</h3>
          
          <div className="grid gap-6">
            {riskMatrix.map((risk, index) => (
              <motion.div
                key={risk.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold">{risk.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">リスクレベル:</span>
                    <div className={`w-6 h-6 rounded-full ${getRiskColor(risk.impact, risk.probability)}`} />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">リスク内容:</p>
                    <p className="text-gray-800">{risk.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">対策:</p>
                    <p className="text-gray-800 font-medium">{risk.mitigation}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 mt-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-2">影響度:</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-4 h-4 rounded ${
                            level <= risk.impact ? "bg-teal-600" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">発生確率:</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-4 h-4 rounded ${
                            level <= risk.probability ? "bg-blue-600" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-red-50 rounded-xl p-8 border-2 border-red-200"
        >
          <h3 className="subsection-title text-red-700">撤退基準</h3>
          
          <p className="mb-4 text-gray-700">
            以下の条件に該当する場合は、プロジェクトの見直しまたは撤退を検討します：
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✗</span>
              <span className="text-gray-800">1年以内に追加受注がない場合</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 text-xl">✗</span>
              <span className="text-gray-800">パートナー企業との関係に重大な問題が生じた場合</span>
            </li>
          </ul>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-center font-semibold text-gray-700">
              これらの基準を設けることで、リスクを最小限に抑えながら
              <br />
              最大のリターンを追求する戦略的な投資を実現します。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">リスク管理のポイント</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-lg font-semibold mb-2">段階的展開</h4>
              <p className="text-sm">小規模から始め、成功を確認しながら拡大</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="text-lg font-semibold mb-2">信頼できるパートナー</h4>
              <p className="text-sm">CBRE、TERACOM、ARCHIDとの強固な連携</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="text-lg font-semibold mb-2">定期的な評価</h4>
              <p className="text-sm">3ヶ月ごとの進捗確認と戦略見直し</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}