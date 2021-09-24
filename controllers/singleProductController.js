const axios = require("axios");
const SingleProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    );
    console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { SingleProduct };
