const axios = require("axios");
const SingleProducts = async (req, res, next) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    );
    const responseD = await axios.get(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const productsearch = response.data;
    const productDescript = responseD.data.plain_text;
    const price = {
      currency: productsearch.currency_id,
      amount: productsearch.price,
      decimals: "no se donde está decimals",
    };
    const product = {
      author: { name: "Erika", lastname: "Zurmuhle" },
      item: {
        id: productsearch.id,
        title: productsearch.title,
        price: price,
        picture: productsearch.thumbnail,
        condition: productsearch.condition,
        free_shipping: productsearch.shipping.free_shipping,
        sold_quantity: productsearch.sold_quantity,
        description: productDescript,
        category: [productsearch.category_id],
      },
    };
    res.send(product);
  } catch (error) {
    console.error(error);
  }
};

module.exports = SingleProducts;
