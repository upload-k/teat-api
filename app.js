const express = require('express');
const productRepository = require('./repository/product-repository');
const app = express();
const port = 3000;

// ルートログ
app.use((req, res)  => {
  console.log(new Date(), req.method, req.url);

  // 全てのオリジンを許可
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  req.next();
})

// 起動チェックAPI
app.get('/', (req, res) => {
  res.json({
    message: 'ok',
  })
});

// 商品取得API
app.get('/products', (req, res) => {
  res.status(200).json(productRepository.getAll());
});

// 商品登録API
app.post('/products', (req, res) => {
  const product = req.body;

  try {
    productRepository.insert(product);
  } catch(e) {
    return res.status(500).json({
      message: e.message,
    });
  }

  res.status(200).json({
    message: 'ok',
  });
});

// 商品更新API
app.put('/products', (req, res) => {
  const product = req.body;

  try {
    productRepository.update(product);
  } catch(e) {
    return res.status(500).json({
      message: e.message,
    });
  }

  res.status(200).json({
    message: 'ok',
  });
});

// 商品名検索API
app.get('/products/:title', (req, res) => {
  try {
    const product = productRepository.getByTitle(req.params.title);
    res.status(200).json(product);
  } catch(e) {
    return res.status(404).json({
      message: e.message,
    });
  }
});

// 商品削除API
app.delete('/products/:title', (req, res) => {
  try {
    productRepository.delete(req.params.title);
  } catch(e) {
    return res.status(500).json({
      message: e.message,
    });
  }

  res.status(204).json({
    message: 'ok',
  });
});

app.listen(port, () => {
  console.log(`test api listening on port ${port}`)
});
