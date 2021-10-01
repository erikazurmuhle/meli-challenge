const axios = require("axios");
const SearchProducts = async (req, res, next) => {
  const input = req.params.input;
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${input}`
    );

    const results = response.data.results.slice(0, 4);
    const filterItems = [];
    const categories = [];

    results.map((x) => {
      if (!categories.includes(x.category_id)) {
        categories.push(x.category_id);
      }
      const price = {
        currency: x.prices.prices[0].currency_id,
        amount: x.prices.prices[0].amount,
        decimals: 00,
      };
      const prod = {
        id: x.id,
        title: x.title,
        price: price,
        picture: x.thumbnail,
        condition: x.condition,
        free_shipping: x.shipping.free_shipping,
      };
      filterItems.push(prod);
    });
    const products = {
      author: { name: "Erika", lastname: "Zurmuhle" },
      categories: categories,
      items: filterItems,
    };

    res.send(products);
  } catch (error) {
    console.error(error);
  }
};

module.exports = SearchProducts;
