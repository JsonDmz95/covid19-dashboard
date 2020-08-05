export function addCommas(quantity) {
  return quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function replaceHyphen(string) {
  return string.replace(/-/g,' ');
}

export function replaceSpace(string) {
  return string.replace(/\s/g ,'-');
}

export function formatDate(fullDate){
  const formated = new Date(fullDate);
  // console.log(formated);
  const date = ("0"+formated.getDate()).slice(-2);
  const month = ("0"+(formated.getMonth()+1));
  const year = formated.getFullYear();

  const hour = ("0"+formated.getHours()).slice(-2);
  const minutes = ("0"+formated.getMinutes()).slice(-2);

  return `${date}/${month}/${year} ${hour}:${minutes}`;
}

export const axiosConfig = {
  headers: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key":  "f9bc729bcdmshcecd66d04dcdc1bp199240jsn92860f4865ca"
  }
}

export function setHeight (){
  let container = document.getElementById('list-countries');
  let currectHeight = window.getComputedStyle(container, null).getPropertyValue("height");
  // console.log(currectHeight);
  container.style.height=currectHeight;
  container.style.maxHeight=currectHeight;
}

window.addEventListener("resize", setHeight);

// document.addEventListener("DOMContentLoaded", setHeight());
