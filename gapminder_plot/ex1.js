// y-axis scale - linear mapping from domain to range
let y = d3.scale.linear().domain([15, 90]).range([250, 0]);

//x-axis - log of values 
let x = d3.scale.log().domain([250, 100000]).range([0, 600]);

//radius of the circle is proportional to square root of Population
let r = d3.scale.sqrt().domain([52070, 1380000000]).range([10, 50]);

// create an svg element
let svg = d3.select('.main').append('svg');