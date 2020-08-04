export function addCommas(quantity) {
  return quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const axiosConfig = {
  headers: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key":  "f9bc729bcdmshcecd66d04dcdc1bp199240jsn92860f4865ca"
  }
}