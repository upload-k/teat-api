let PRODUCTS = require("../db/product-db");

module.exports = {
  getAll() {
    return PRODUCTS;
  },

  getByTitle(title) {
    const product = PRODUCTS.find((p) => p.title === title);
    if (!product) {
      throw new Error('存在しない商品です');
    }

    return product;
  },

  insert(product) {
    if (!product.title || !product.price || !product.description) {
      throw new Error('productには、title, price, descriptionが必要です');
    }

    if(!!PRODUCTS.find((p) => p.title === product.title)) {
      throw new Error('既に登録されている商品名です');
    }

    PRODUCTS.push(product);
  },

  update(product) {
    if (!product.title || !product.price || !product.description) {
      throw new Error('productには、title, price, descriptionが必要です');
    }

    const index = PRODUCTS.findIndex(({title}) => title === product.title);
    if (index < 0) {
      throw new Error('存在しない商品です');
    }

    PRODUCTS[index] = product;
  },

  delete(title) {
    PRODUCTS = PRODUCTS.filter((p) => p.title !== title);
  }
}