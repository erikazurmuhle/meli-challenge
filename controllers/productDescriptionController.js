const axios = require("axios");
const ProductDescription = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await axios.get(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    console.log(response.data);
    res.send(response.data.plain_text);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { ProductDescription };
