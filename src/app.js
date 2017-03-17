const data = [5, 10, 15, 20, 25];

d3.select('body').selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .attr('class', 'bar')
  .style('height', function (d) {
    return d * 5 + 'px'
  });

