"use client";

import { motion } from "framer-motion";

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="section bg-gradient-to-br from-teal-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            ベトナム事業提案書
          </h1>
          <h2 className="text-2xl md:text-3xl text-teal-600 mb-12">
            Horison Tower実証実験を起点とした市場展開戦略
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h3 className="section-title">エグゼクティブサマリー</h3>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              会長のご懸念は至極もっともです。しかし、今回の
              <span className="text-2xl font-bold text-teal-600 inline-block mx-2">100万円</span>
              の投資は、単なる実績作りではなく、
              <strong className="text-teal-600">将来的に数百億円規模に成長するビジネスへの種まき</strong>
              です。ベトナムのBMS市場は2033年には
              <span className="text-2xl font-bold text-teal-600 mx-1">753億円</span>
              規模へ成長し、さらにASEAN全体では数千億円市場となります。私たちは、CBREとZEBHubという強力なパートナーを通じて、この成長市場への確実な参入経路を確保しました。
            </p>
            
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
              <p className="text-xl font-semibold text-gray-800">
                <strong className="text-teal-600">なぜ今なのか？</strong> ベトナムは今まさに省エネ規制の転換点にあり、2025年の新電力法施行で再生可能エネルギーへのシフトが加速します。先行者利益を獲得できる最後のタイミングです。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}