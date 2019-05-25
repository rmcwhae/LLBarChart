// drawBarChart(data, options, element);
const drawBarChart = function(data, options, element) {
  getElement(element);
}
function getElement(element) {
  var chartElement = document.querySelector(element); // from https://www.w3schools.com/jquery/jquery_dom_add.asp
  chartElement.innerHTML = "Hello";
}
