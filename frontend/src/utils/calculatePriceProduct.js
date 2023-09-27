export const calculatePriceProduct = (product) => {
  const {SKU, Price, Weigth, Quantity} = product;
  const typeProduct = SKU.substring(0,2)
  console.log(typeProduct);
  let priceProduct = 0;
  switch (typeProduct) {
    case 'EA':
      priceProduct = Price * Quantity;
      break;
    case 'WE':
      priceProduct = (Quantity * 1000) * Price;
      break;
    case 'SP':
      priceProduct = calculatePriceEspecialDiscount(Price, Quantity);
      break;
  }
  return priceProduct;
}

const calculatePriceEspecialDiscount = (price, quantity) => {
  const MAX_DISCOUNT = 0.5;
  const PRODUCT_DISCOUNT = 0.2;

  const normalPrice = price * quantity;
  const discountUnits = quantity / 3;
  let discount = discountUnits * PRODUCT_DISCOUNT;
  console.log(discountUnits);
  discount =  discount > 0.5 ? 0.5 : discount

  const priceEspecialDiscount = normalPrice - (normalPrice * discount)
  return priceEspecialDiscount
}