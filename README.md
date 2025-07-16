# ベトナム事業提案書 - Web版

ベトナムでのスマートビル事業（Familia Energy）に関する提案書をWebベースのインタラクティブなプレゼンテーションとして実装しました。

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts（グラフライブラリ）
- Framer Motion（アニメーション）
- 静的サイト生成（SSG）

## セットアップ方法

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 3. プロダクションビルド

```bash
npm run build
```

### 4. プロダクションサーバーの起動

```bash
npm start
```

## デプロイ

Vercelへのデプロイが推奨されます。

```bash
# Vercel CLIをインストール（未インストールの場合）
npm i -g vercel

# デプロイ
vercel
```

## プロジェクト構造

```
vietnam-familia-web/
├── app/
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # メインページ
├── components/
│   ├── sections/          # 各セクションコンポーネント
│   │   ├── ExecutiveSummary.tsx
│   │   ├── MarketGrowth.tsx
│   │   ├── WhyNow.tsx
│   │   ├── CbreZebhub.tsx
│   │   ├── RevenueModel.tsx
│   │   ├── Investment.tsx
│   │   ├── RiskAnalysis.tsx
│   │   ├── Roadmap.tsx
│   │   └── Conclusion.tsx
│   ├── charts/            # グラフコンポーネント
│   │   ├── MarketGrowthChart.tsx
│   │   ├── RevenueProjectionChart.tsx
│   │   └── MarketSizePieChart.tsx
│   └── ui/                # 共通UIコンポーネント
│       └── Navigation.tsx
└── lib/
    └── data/              # グラフ用データ
        └── market-data.ts
```

## 主な機能

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **スムーズスクロール**: セクション間のナビゲーション
- **インタラクティブグラフ**: Rechartsによるデータビジュアライゼーション
- **アニメーション**: Framer Motionによるスクロールアニメーション
- **プログレスインジケーター**: 読み進め状況の可視化
- **SEO最適化**: メタデータとOGP設定

## カスタマイズ

### カラーテーマの変更

`app/globals.css` の CSS変数を編集してください：

```css
:root {
  --accent-color: rgb(20, 184, 166); /* Teal-500 */
  --accent-hover: rgb(13, 148, 136); /* Teal-600 */
}
```

### データの更新

`lib/data/market-data.ts` でグラフデータを編集できます。

## パフォーマンス

- 静的サイト生成（SSG）により高速表示
- 画像の最適化（Next.js Image component）
- フォントの最適化（Next.js Font optimization）

## ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## ライセンス

このプロジェクトはハウディ株式会社の内部資料として作成されました。