# 木構造可視化アプリケーション

## 概要
tRPCを活用した木構造の実装と可視化の確認用アプリケーションです。

## 機能

- データ管理と表示
  - エッジ情報からの動的な木構造の構築
  - ノード間の親子関係の自動計算
  - 階層の深さに応じた視覚的な表現

- インタラクティブな操作
  - スクロール可能なツリービューの実装
  - ノードの展開・折りたたみ機能

## 技術スタック

- 🚀 Next.js
- 🚀 TypeScript
- 🚀 tRPC
- 🚀 Vercel

- 📦 Mantine
- 📦 Tailwind CSS
- 📦 Prisma
- 📦 Biome

- 🛠️ ESLint
- 🛠️ Docker Compose
- 🛠️ Prettier

## システム要件

- Node.js 20.0.0以上
- Docker 24.0.0以上
- npm 8.0.0以上または yarn 1.22.0以上

## プロジェクト構成

```
.
├── app/ # App Router
│   ├── [trpc]/ # tRPCエンドポイント
│   └── busyness/
├── features/ # 機能
│   ├── busyness/ # 非表示用
│   └── trees/ # 木構造
├── prisma/ # データベース関連
└── utils/ # ユーティリティ
```
