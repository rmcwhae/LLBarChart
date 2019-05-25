// drawBarChart(data, options, element);
const drawBarChart = function(data, options, element) {
  // var chartElement = document.querySelector(element); // assign element to modify
  var chartElement = document.createElement('div');
  document.body.appendChild(chartElement);// from https://www.hongkiat.com/blog/jquery-insert-element-part1/
  $(chartElement).addClass(element);// assign chart css class

  // assign chart width and height if provided
  if(options.width !== undefined) {
    $(chartElement).width(options.width);
  }
  if(options.height !== undefined) {
    $(chartElement).height(options.height);
  }

  data.forEach(function(datapiece) {
    var databar = document.createElement('div');
    chartElement.appendChild(databar);
    $(databar).addClass('databar');
    $(databar).html(datapiece);
  });


}
// function getElement(element) {
//   var chartElement = document.querySelector(element); // from https://www.w3schools.com/jquery/jquery_dom_add.asp
//   chartElement.innerHTML = "Hello";
// }
