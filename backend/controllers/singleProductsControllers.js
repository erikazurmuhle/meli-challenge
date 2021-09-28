const axios = require("axios");
const SingleProducts = async function (id) {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/items/:${id}`
    );
    const responseD = await axios.get(
      `https://api.mercadolibre.com/items/:${id}/description`
    );
    console.log("DESCRPTION", responseD);
    console.log("PRODUCTO", response);
  } catch (error) {
    console.error(error);
  }
};

module.exports = SingleProducts;
