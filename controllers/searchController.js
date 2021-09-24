const axios = require("axios");
const SearchProducts = async (req, res, next) => {
  try {
    const input = req.params.input;
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${input}`
    );
    console.log(response.data);
    const productseach = response.data.results.slice(0, 4);
    res.send(productseach);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { SearchProducts };
