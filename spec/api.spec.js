//商品取得API
const getAll = () => {
  fetch('http://localhost:3000/products', {
    method: 'GET',
  })
  .then((response) => {
    if (!response.ok) {
      console.error('サーバーエラー');
    }
    return response.json();
  })
  .then(console.log)
  .catch((error) => {
    console.error('通信に失敗しました', error);
  });
}

//商品登録API
const post = () => {
  fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      //登録するデータを記述
      title: 'マイク',
      price: '1000',
      description: '手に持つタイプです',
    }),
  })
  .then((response) => {
    if (!response.ok) {
      console.error('サーバーエラー');
    }
    return response.json();
  })
  .then(console.log)
  .catch((error) => {
    console.error('通信に失敗しました', error);
  });
}

//商品更新API
const put = () => {
  fetch('http://localhost:3000/products', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      //登録するデータを記述
      title: 'マイク',
      price: '8123456',
      description: '手に持つタイプです',
    }),
  })
  .then((response) => {
    if (!response.ok) {
      console.error('サーバーエラー');
    }
    return response.json();
  })
  .then(console.log)
  .catch((error) => {
    console.error('通信に失敗しました', error);
  });
}

  //商品取得（商品名検索）
const getByTitle = () => {
  fetch('http://localhost:3000/products/マイク', {
    method: 'GET'
  })
  .then((response) => {
    if (!response.ok) {
      console.error('サーバーエラー');
    }
    return response.json();
  })
  .then(console.log)
  .catch((error) => {
    console.error('通信に失敗しました', error);
  });
}

  //商品削除API
const deleteProduct = () => {
  fetch('http://localhost:3000/products/マイク', {
    method: 'DELETE'
  })
  .then((response) => {
    if (!response.ok) {
      console.error('サーバーエラー');
    }
    return response.json();
  })
  .then(console.log)
  .catch((error) => {
    console.error('通信に失敗しました', error);
  });
}

module.exports = {
  getAll,
  getByTitle,
  post,
  put,
  deleteProduct,
}