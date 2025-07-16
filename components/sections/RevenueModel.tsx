"use client";

import { motion } from "framer-motion";
import RevenueProjectionChart from "@/components/charts/RevenueProjectionChart";
import { marketSizeData } from "@/lib/data/market-data";

export default function RevenueModel() {
  return (
    <section id="revenue-model" className="section bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          4. 明確な収益モデルと投資回収計画
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-8"
        >
          <h3 className="subsection-title">ビジネスモデル</h3>
          
          <p className="mb-6">
            日本では成果報酬型（省エネ分配モデル）を採用していますが、ベトナムでは以下の収益モデルを想定しています：
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-teal-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">500-1,000万円</div>
              <h4 className="text-lg font-semibold mb-2">初期導入費用</h4>
              <p className="text-gray-700">1棟あたり</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10-20万円</div>
              <h4 className="text-lg font-semibold mb-2">月額サービス費用</h4>
              <p className="text-gray-700">1棟あたり/月</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">追加サービス</div>
              <h4 className="text-lg font-semibold mb-2">付加価値</h4>
              <p className="text-gray-700 text-sm">メンテナンス、アップグレード、コンサルティング</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="subsection-title">市場価格の参考データ</h3>
          
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-8 mb-6">
            <h4 className="text-xl font-semibold mb-4">スマートビル関連市場の全体像（TAM: Total Addressable Market）</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>建設市場全体</strong>: 2024年に685.7億ドル（約10.3兆円）、2032年には1,376.4億ドル（約20.6兆円）へ
                  <br />
                  <a href="https://www.verifiedmarketresearch.com/product/vietnam-construction-market/" 
                     className="link-underline text-sm text-gray-600"
                     target="_blank" 
                     rel="noopener noreferrer">
                    Verified Market Research
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>IoT市場全体</strong>: 2022年に31.1億ドル（約466億円）、2030年には110億ドル（約1.65兆円）へ、CAGR 17.1%
                  <br />
                  <a href="https://www.marketsandata.com/industry-reports/vietnam-internet-of-things-market" 
                     className="link-underline text-sm text-gray-600"
                     target="_blank" 
                     rel="noopener noreferrer">
                    Markets and Data
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>製造業IoT市場</strong>: 2018年に10億ドル、2024年には30億ドル（約4,500億円）へ、CAGR 21%超
                  <br />
                  <a href="https://www.prnewswire.com/news-releases/vietnam-3-billion-iot-in-manufacturing-market-competition-forecast--opportunities-2024-300957388.html" 
                     className="link-underline text-sm text-gray-600"
                     target="_blank" 
                     rel="noopener noreferrer">
                    PRNewswire
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-white rounded-xl p-8 mb-6">
            <h4 className="text-xl font-semibold mb-4">直接関連市場（SAM: Serviceable Addressable Market）</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-semibold text-teal-600 mb-2">BMS市場</h5>
                <p className="text-2xl font-bold mb-1">753億円</p>
                <p className="text-sm text-gray-600">2033年予測</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-semibold text-teal-600 mb-2">グリーンビル市場</h5>
                <p className="text-2xl font-bold mb-1">12兆円</p>
                <p className="text-sm text-gray-600">投資機会</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h5 className="font-semibold text-teal-600 mb-2">スマートホーム市場</h5>
                <p className="text-2xl font-bold mb-1">759億円</p>
                <p className="text-sm text-gray-600">2028年予測</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <p className="text-lg">
              このデータが示すのは、BMS市場（363億円）は氷山の一角に過ぎず、IoT（1,650億円）、グリーンビル（12兆円）、建設市場全体（20兆円超）という巨大な潜在市場が存在することです。私たちのFamilia Energyは、単なるBMSではなく、これらすべての市場にまたがるソリューションとして位置づけられます。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">ターゲット可能な市場規模</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>既存ビル改修市場</strong>: ハノイ・ホーチミンで約3,000棟（2,500m²以上）
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>新築ビル市場</strong>: 年間約500棟のペースで増加
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <div>
                  <strong>CBREの管理物件</strong>: 200棟以上（即座にアプローチ可能）
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-teal-50 rounded-lg">
              <p className="text-sm">
                仮に市場の10%を獲得した場合、400棟×1,000万円（平均導入費）= <strong className="text-2xl text-teal-600">40億円</strong>の初期売上、さらに月額収入で年間12億円のストックビジネスが構築できます。
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">収益シミュレーション</h3>
            <RevenueProjectionChart />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">具体的な収益シミュレーション（現実的シナリオ）</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3">1年目（2025年）</h4>
              <p className="text-sm mb-2">実績作り</p>
              <ul className="text-sm space-y-1 mb-3">
                <li>• 導入数: 1-2棟</li>
                <li>• 初期費用: 1,600万円</li>
                <li>• ランニング費用: 240万円</li>
              </ul>
              <p className="text-2xl font-bold">初年度売上: 1,840万円</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3">2年目（2026年）</h4>
              <p className="text-sm mb-2">信頼構築</p>
              <ul className="text-sm space-y-1 mb-3">
                <li>• 新規導入: 10棟</li>
                <li>• 初期費用: 8,000万円</li>
                <li>• ランニング費用: 2,880万円</li>
              </ul>
              <p className="text-2xl font-bold">2年目売上: 1億880万円</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-3">3年目（2027年）</h4>
              <p className="text-sm mb-2">本格展開</p>
              <ul className="text-sm space-y-1 mb-3">
                <li>• 新規導入: 30棟</li>
                <li>• 初期費用: 3億円</li>
                <li>• ランニング費用: 1億80万円</li>
              </ul>
              <p className="text-2xl font-bold">3年目売上: 4億80万円</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">その後の展望</h4>
            <p>
              ベトナムでの成功モデルを確立後、マレーシア、タイ、インドネシアなどASEAN諸国への展開を開始。各国で同様の成長曲線を描くことで、グループ全体での売上規模は飛躍的に拡大します。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xl font-semibold">
            <strong className="text-teal-600">長期的には、ベトナムだけでなくASEAN全体への展開を視野に入れています。</strong> 
            <br />
            シンガポール、マレーシア、タイなど、同様の省エネニーズを持つ国々への横展開により、
            <br />
            最終的には数百億円規模のビジネスへの成長が見込めます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}