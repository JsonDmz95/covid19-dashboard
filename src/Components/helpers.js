export function addCommas(quantity) {
  return quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}