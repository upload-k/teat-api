# 練習用API
画面から呼ぶ簡単なAPIを作成しています。  
起動して、ajaxで情報を取得してみましょう。

## 起動方法
1. node v18.16.1をインストールします。
2. プロジェクトフォルダ直下で、`npm install`を実行します。
3. プロジェクトフォルダ直下で、`npm run dev`を実行します。
4. コンソールに`test api listening on port 3000`と表示されたら起動完了です。

## API一覧

- 起動チェックAPI
  - url `/`
  - method `GET`
  - 起動チェックします
- 商品取得API
  - url `/products`
  - method `GET`
  - 全商品を取得します
- 商品登録API
  - url `/products`
  - method `POST`
  - 全商品を取得します
- 商品更新API
  - url `/products/`
  - method `PUT`
  - 商品を更新します
- 商品名検索API
  - url `/products/:title`
  - method `GET`
  - 商品名で商品を検索します
- 商品削除API
  - url `/products/:title`
  - method `DELETE`
  - 商品名で商品を取得し、削除します。