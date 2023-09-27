const SaleCtrl = {}
const Sale = require('../schema/sales.schema')
const Product = require('../schema/product.schema')

SaleCtrl.create = async (req, res) => {
  try {
      const { SoldProducts } = req.body;
      
      const newSale = new Sale(req.body);

      await newSale.save();

      for (const soldProduct of SoldProducts) {
          const product = await Product.findOne({SKU: soldProduct.SKU});

          if (!product) {
              return res.status(404).json({
                  ok: false,
                  message: "Producto no encontrado",
              });
          }
          product.Stock -= soldProduct.Quantity;
          await product.save();
      }

      return res.status(200).json({
        ok: true,
        statusCode: 200,
        message: "La venta se ha guardado correctamente",
      });
  } catch (error) {
      console.error(error);
      return res.status(500).json({
          ok: false,
          message: "Ha ocurrido un error guardando la venta",
          content: error,
      });
  }
};

SaleCtrl.searchSalesByUser = async (req, res) => {
  const user = req.params.user;

  if (!user) {
    return res.status(400).json({ error: 'El parámetro User es obligatorio en la consulta' });
  }

  Sale.find({User: user}, (err, sales) => {
    if (err) {
      console.error(err);
      return res.status(500).json({error: 'Error al obtener las ventas'})
    }

    return res.status(200).json({
      ok: true,
      statusCode: 200,
      data: sales
    });
  })

}

module.exports = SaleCtrl