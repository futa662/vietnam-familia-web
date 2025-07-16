"use client";

import { motion } from "framer-motion";

export default function BemsChallenge() {
  const challenges = [
    {
      icon: "🎓",
      title: "認知度と専門性の不足",
      description: "開発者および施設管理者の認知度と技術的専門性の不足が導入を妨げている。"
    },
    {
      icon: "🔗",
      title: "統合管理の欠如",
      description: "多くの導入事例では、機能が分断されており、統合管理プラットフォームの構築が不十分。"
    },
    {
      icon: "💰",
      title: "高額な初期コスト",
      description: "初期コストが高額なうえ、投資回収の見通しが不透明なことから、中小規模のプロジェクトでは導入が進まない。"
    },
    {
      icon: "📋",
      title: "規制・政策の未整備",
      description: "統一された規制や政策が未整備で、市場の成熟を妨げている。"
    }
  ];

  return (
    <section id="bems-challenge" className="section bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          ベトナムにおけるBEMSの課題と制約
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-lg text-gray-700 mb-8">
            ベトナムのBEMS市場は急成長が期待される一方で、以下の課題が市場の成熟を妨げています。
            これらの課題は、逆に言えば私たちにとってのビジネスチャンスでもあります。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-4xl">{challenge.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">私たちの解決策</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3">技術支援とトレーニング</h4>
              <p className="text-sm">
                TERACOMの200名以上のエンジニアチームによる現地技術者の育成プログラムを提供し、
                認知度と専門性の向上を図ります。
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3">統合プラットフォーム</h4>
              <p className="text-sm">
                Familia Energyは、エネルギー管理、設備制御、データ分析を一元化した
                統合管理プラットフォームを提供します。
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3">柔軟な価格モデル</h4>
              <p className="text-sm">
                初期投資を抑えた月額課金モデルや、省エネ効果に基づく成果報酬型の
                価格設定により、中小規模プロジェクトでも導入しやすくします。
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3">政府との連携</h4>
              <p className="text-sm">
                ZEBHubプロジェクトを通じて政府と連携し、規制整備への貢献と
                市場標準の確立を目指します。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xl font-semibold text-gray-800">
            これらの課題は、適切なアプローチと現地パートナーとの協力により、
            <br />
            <span className="text-teal-600">競争優位性を生み出す差別化要因</span>に転換できます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}