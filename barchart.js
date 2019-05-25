// drawBarChart(data, options, element);
const drawBarChart = function(data, options, element) {
  var chartElement = document.querySelector(element); // assign element to modify


// assign chart width and height if provided
  if(options.width !== undefined) {
    $(chartElement).width(options.width);
  }
  if(options.height !== undefined) {
    $(chartElement).height(options.height);
  }



}
function getElement(element) {
  var chartElement = document.querySelector(element); // from https://www.w3schools.com/jquery/jquery_dom_add.asp
  chartElement.innerHTML = "Hello";
}
