import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ScatterPlot from './scatter-plot';
import * as d3 from 'd3';




class Products extends Component {
 constructor(props) {
    super(props);
	this.createBarChart = this.createBarChart.bind(this)
	this.createLinerChart = this.createLinerChart.bind(this)
  }

   componentDidMount() {
      this.createBarChart()
	  this.createLinerChart()
   }
   componentDidUpdate() {
      this.createBarChart()
	  this.createLinerChart()
   }
   
   createLinerChart(){
	// set the dimensions and margins of the graph
		var margin = {top: 20, right: 20, bottom: 30, left: 220},
			width = 1000 - margin.left - margin.right,
			height = 400 - margin.top - margin.bottom;
			
			var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
			y = d3.scaleLinear().rangeRound([height, 0]);
			
			
			var data = 
			[
  {
    "letter": "2000 BCE",
    "frequency": ".08167"
  },
  {
    "letter": "1700 BCE",
    "frequency": ".01492"
  },
  {
    "letter": "1400 BCE",
    "frequency": "1"
  },
  {
    "letter": "1300 BCE",
    "frequency": ".04253"
  },
  {
    "letter": "600 BCE",
    "frequency": ".12702"
  },
  {
    "letter": "300 BCE",
    "frequency": ".02288"
  },
  {
    "letter": "100 BCE",
    "frequency": ".02015"
  },
  {
    "letter": "1000",
    "frequency": ".06094"
  },
  {
    "letter": "1300",
    "frequency": ".06966"
  },
  {
    "letter": "1500",
    "frequency": ".00153"
  },
  {
    "letter": "1800",
    "frequency": ".00772"
  },
  {
    "letter": "1900",
    "frequency": ".04025"
  },
  {
    "letter": "2000",
    "frequency": ".02406"
  }
]
			
			var svg = d3.select(".line").append('svg')
				.attr("width",960)
				.attr("height",400);
	 
		var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	
	  x.domain(data.map(function(d) { return d.letter; }));

		y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
		
		 var line = d3.line()
    .x(function(d) { return x(d.letter); })
    .y(function(d) { return y(d.frequency); })
		
		g.append("g")
      .attr("class", "axis--x")
      .attr("transform", "translate(-27," + 350 + ")")
      .call(d3.axisBottom(x))
	  .selectAll('text').style('font-size','12px').style('color','#d5dbe3')
	  ;
	  
	  g.append("g")
      .attr("class", "axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"))
	  
	  g.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line)
	.style('fill','none')
	.style('stroke','#e3cd29')
	.style('stroke-width',"3px")
	;
	
	d3.selectAll('.domain').remove();
	// d3.select('.axis--x').remove();
	d3.select('.axis--y').remove();
  
   }
   
   createBarChart() {
	   
	   var node = this.node;
	   
	   var data = [{"salesperson":"Earthquake","sales":1743},{"salesperson":"UnKnown","sales":157},{"salesperson":"Volcano","sales":108},{"salesperson":"Earthquake and Landslide","sales":105},{"salesperson":"Landslide","sales":83},{"salesperson":"Mateorological","sales":26},{"salesperson":"Volcano and Earthquake","sales":13},{"salesperson":"Explosion","sales":1}];

		// set the dimensions and margins of the graph
		var margin = {top: 20, right: 20, bottom: 30, left: 220},
			width = 800 - margin.left - margin.right,
			height = 500 - margin.top - margin.bottom;

		// set the ranges
		var y = d3.scaleBand()
          .range([height, 0])
          .padding(0.1);

		var x = d3.scaleLinear()
          .range([0, width]);
		  
		  var svg = d3.select(node).append("g")
			.attr("transform", 
			"translate(" + margin.left + "," + margin.top + ")");
			
			data.sort(function(a, b) {
        return a.sales - b.sales;
      });
			
			x.domain([0, d3.max(data, function(d){ return d.sales; })])
			y.domain(data.map(function(d) { return d.salesperson; }));
			
			var bars = svg.selectAll(".bar")
					.data(data)
					.enter()
					.append("g")
					
					bars.append("rect")
					.attr("class", "bar")
					.attr("width", function(d) {return x(d.sales); } )
					.attr("y", function(d) { return y(d.salesperson); })
					.style('fill','#e3cd29')
					.style('border-radius','2px')
					.attr("height", y.bandwidth());
	  
	  bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.salesperson) + y.bandwidth() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.sales) + 3;
            })
            .text(function (d) {
                return d.sales;
            })
			.style('fill','#e3cd29')
			;

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
	  .selectAll('.tick').remove()
	  

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y))
	  .selectAll('text').style('font-size','15px').style('color','#d5dbe3')
	  ;
	  
	  d3.selectAll('.domain').remove()
		
   }

 
    render() {
		
        return (
		<div style = {{background:"#34495e"}} >
		<h1 style = {{textAlign:"center",fontSize:"45px",color:"#d5dbe3"}}>TSUNAMIS</h1>
		<hr style = {{border: "3px solid #e3cd29"}} />
			<p style ={{textDecoration:"underline",color:"#e3cd29",fontSize:"25px",marginLeft:"50px"}} >Sources</p>
			<svg ref={node => this.node = node} width={1000} height={500} className="bar">
			</svg>
		
			<p style ={{textDecoration:"underline",color:"#e3cd29",fontSize:"25px",marginLeft:"50px"}} >Intensity</p>
		
			
			<div className="line">
			</div>
		
		 </div>
        );
    }		
}





export default Products;