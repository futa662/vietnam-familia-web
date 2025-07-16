"use client";

import { motion } from "framer-motion";
import { roadmapData } from "@/lib/data/market-data";

export default function Roadmap() {
  return (
    <section id="roadmap" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          7. 今後の展開計画
        </motion.h2>

        <div className="space-y-8">
          {roadmapData.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection line */}
              {index < roadmapData.length - 1 && (
                <div className="absolute left-12 top-24 w-0.5 h-24 bg-teal-200" />
              )}
              
              <div className="flex items-start space-x-6">
                {/* Phase indicator */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{index + 1}</div>
                      <div className="text-xs">PHASE</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white rounded-xl shadow-lg p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{phase.phase}: {phase.title}</h3>
                    <span className="text-lg font-semibold text-teal-600 mt-2 md:mt-0">{phase.period}</span>
                  </div>
                  
                  <ul className="space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <motion.li
                        key={taskIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + taskIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-teal-600 text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">{task}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Expected outcomes */}
                  {index === 0 && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>期待成果:</strong> 実証実験の成功により、CBREネットワークでの信頼獲得
                      </p>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>期待成果:</strong> 安定的な収益基盤の確立と現地チームの強化
                      </p>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>期待成果:</strong> ASEAN地域でのリーディングカンパニーとしての地位確立
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">長期ビジョン（2028年以降）</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🇻🇳</div>
              <h4 className="font-semibold mb-1">ベトナム</h4>
              <p className="text-sm text-gray-600">市場シェア10%</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🇹🇭</div>
              <h4 className="font-semibold mb-1">タイ</h4>
              <p className="text-sm text-gray-600">2028年参入</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🇲🇾</div>
              <h4 className="font-semibold mb-1">マレーシア</h4>
              <p className="text-sm text-gray-600">2029年参入</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🇮🇩</div>
              <h4 className="font-semibold mb-1">インドネシア</h4>
              <p className="text-sm text-gray-600">2030年参入</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-teal-700">
              ASEAN地域全体で年間売上<span className="text-3xl mx-2">100億円</span>を目指す
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}