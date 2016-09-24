"use strict";
console.log("Hello");

var React = require('react');
var ReactDOM = require('react-dom');
var BarChart = require('react-d3-basic').BarChart;

var BarGraph = React.createClass({
	getInitialState: function() {
		return {data: []}
	},
	render: function() {
        return ( 
        	<div>
            <
            BarChart width = {this.state.width}
            height = {this.state.height}
            data = {this.state.data}
            chartSeries = {this.state.series}
            x = {x}
            xScale = {xScale}
            y = {y}
            yTicks = {yTicks}
            showYGrid = {true}
            showLegend = {false}
            /> 
            </div>
        )
    }
});

var width = 600,
	height = 600,
	title = "Probability of Drug",
	chartSeries = [
		{
			field: 'value',
			name: 'Value'
		}
	],
	xScale = 'ordinal',
	x = function(d) {
		return d.drug;
	},
	xLabel = "Drug",
	yLabel = "EEG Value",
	yTicks = [5, "%"];

var BarGraphDummyTest = React.createClass({
	
	render: function() {
		return (
			<div>
			<
			BarChart width = {width}
			title = {title}
            height = {height}
            data = {this.props.data}
            chartSeries = {chartSeries}
            x = {x}
            xScale = {xScale}
            yTicks = {yTicks}
            showYGrid = {true}
            showLegend = {false}
            /> 
            </div>
		)
	}
});

ReactDOM.render(
	console.log("rendeirng"),
	<BarGraphDummyTest data={data}/>,
	document.getElementById('data_bar')
);

// ReactDOM.render(
//	<BarGraphDummyTest url="/api/data"/>,
//	document.getElementById('data_bar')
// );