const api = require("./api.spec");

api.getAll(); // 初回の商品一覧
api.post(); // マイクが登録される
api.getByTitle(); // マイクが取れる
api.put(); // マイクの値段が釣り上がる
api.getByTitle(); // マイクが取れる
api.getAll(); // マイクが追加されてる
api.deleteProduct(); // マイクが消える
api.getByTitle(); // エラー
api.getAll(); // マイクが消えてる