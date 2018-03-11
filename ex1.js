// y-axis scale - linear mapping from domain to range
let y = d3.scale.linear().domain([15, 90]).range([250, 0]);

//x-axis - log of values 
let x = d3.scale.log().domain([250, 100000]).range([0, 600])