const axios = require("axios");
const SearchProducts = async (req, res, next) => {
  const input = req.params.input;
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${input}`
    );
    console.log("PRODUCTOOOOOO", response.data.results[0]);
    const results = response.data.results.slice(0, 4);
    const filterItems = [];
    results.map((x) => {
      const price = {
        currency: x.prices.prices[0].currency_id,
        amount: x.prices.prices[0].amount,
        decimals: "no se donde está decimals",
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
      categories: ["donde están las categorías????"],
      items: filterItems,
    };

    res.send(products);
  } catch (error) {
    console.error(error);
  }
};

module.exports = SearchProducts;
