var chart;

var chartData = [
                 {
                	 "year": 2000,
                	 "cars": 1587,
                	 "motorcycles": 650,
                	 "bicycles": 121
                 },
                 {
                	 "year": 1995,
                	 "cars": 1567,
                	 "motorcycles": 683,
                	 "bicycles": 146
                 },
                 {
                	 "year": 1996,
                	 "cars": 1617,
                	 "motorcycles": 691,
                	 "bicycles": 138
                 },
                 {
                	 "year": 1997,
                	 "cars": 1630,
                	 "motorcycles": 642,
                	 "bicycles": 127
                 },
                 {
                	 "year": 1998,
                	 "cars": 1660,
                	 "motorcycles": 699,
                	 "bicycles": 105
                 },
                 {
                	 "year": 1999,
                	 "cars": 1683,
                	 "motorcycles": 721,
                	 "bicycles": 109
                 },
                 {
                	 "year": 2000,
                	 "cars": 1691,
                	 "motorcycles": 737,
                	 "bicycles": 112
                 },
                 {
                	 "year": 2001,
                	 "cars": 1298,
                	 "motorcycles": 680,
                	 "bicycles": 101
                 },
                 {
                	 "year": 2002,
                	 "cars": 1275,
                	 "motorcycles": 664,
                	 "bicycles": 97
                 },
                 {
                	 "year": 2003,
                	 "cars": 1246,
                	 "motorcycles": 648,
                	 "bicycles": 93
                 },
                 {
                	 "year": 2004,
                	 "cars": 1218,
                	 "motorcycles": 637,
                	 "bicycles": 101
                 },
                 {
                	 "year": 2005,
                	 "cars": 1213,
                	 "motorcycles": 633,
                	 "bicycles": 87
                 },
                 {
                	 "year": 2006,
                	 "cars": 1199,
                	 "motorcycles": 621,
                	 "bicycles": 79
                 },
                 {
                	 "year": 2007,
                	 "cars": 1110,
                	 "motorcycles": 210,
                	 "bicycles": 81
                 },
                 {
                	 "year": 2008,
                	 "cars": 1165,
                	 "motorcycles": 232,
                	 "bicycles": 75
                 },
                 {
                	 "year": 2009,
                	 "cars": 1145,
                	 "motorcycles": 219,
                	 "bicycles": 88
                 },
                 {
                	 "year": 2010,
                	 "cars": 1163,
                	 "motorcycles": 201,
                	 "bicycles": 82
                 },
                 {
                	 "year": 2011,
                	 "cars": 1180,
                	 "motorcycles": 285,
                	 "bicycles": 87
                 },
                 {
                	 "year": 2012,
                	 "cars": 1159,
                	 "motorcycles": 277,
                	 "bicycles": 71
                 }
                 ];

AmCharts.ready(function () {
	// SERIAL CHART
	chart = new AmCharts.AmSerialChart();
	chart.pathToImages = "../img/viewTcpUdp/images/";
	chart.dataProvider = chartData;
	chart.marginTop = 10;
	chart.categoryField = "year";

	// AXES
	// Category
	var categoryAxis = chart.categoryAxis;
	categoryAxis.gridAlpha = 0.07;
	categoryAxis.axisColor = "#DADADA";
	categoryAxis.startOnAxis = true;

	// Value
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.stackType = "regular"; // this line makes the chart "stacked"
	valueAxis.gridAlpha = 0.07;
	valueAxis.title = "Traffic incidents";
	chart.addValueAxis(valueAxis);

	// GUIDES are vertical (can also be horizontal) lines (or areas) marking some event.
	// first guide
	var guide1 = new AmCharts.Guide();
	guide1.category = "2001";
	guide1.lineColor = "#CC0000";
	guide1.lineAlpha = 1;
	guide1.dashLength = 2;
	guide1.inside = true;
	guide1.labelRotation = 90;
	guide1.label = "fines for speeding increased";
	categoryAxis.addGuide(guide1);

	// second guide
	var guide2 = new AmCharts.Guide();
	guide2.category = "2007";
	guide2.lineColor = "#CC0000";
	guide2.lineAlpha = 1;
	guide2.dashLength = 2;
	guide2.inside = true;
	guide2.labelRotation = 90;
	guide2.label = "motorcycle maintenance fee introduced";
	categoryAxis.addGuide(guide2);


	// GRAPHS
	// first graph
	var graph = new AmCharts.AmGraph();
	graph.type = "line"; // it's simple line graph
	graph.title = "Cars";
	graph.valueField = "cars";
	graph.lineAlpha = 0;
	graph.fillAlphas = 0.6; // setting fillAlphas to > 0 value makes it area graph
	graph.balloonText = "<img src='../img/viewTcpUdp/images/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>";
	graph.hidden = true;
	chart.addGraph(graph);

	// second graph
	graph = new AmCharts.AmGraph();
	graph.type = "line";
	graph.title = "Motorcycles";
	graph.valueField = "motorcycles";
	graph.lineAlpha = 0;
	graph.fillAlphas = 0.6;
	graph.balloonText = "<img src='../img/viewTcpUdp/images/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>";
	chart.addGraph(graph);

	// third graph
	graph = new AmCharts.AmGraph();
	graph.type = "line";
	graph.title = "Bicycles";
	graph.valueField = "bicycles";
	graph.lineAlpha = 0;
	graph.fillAlphas = 0.6;
	graph.balloonText = "<img src='../img/viewTcpUdp/images/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>";
	chart.addGraph(graph);

	// LEGEND
	var legend = new AmCharts.AmLegend();
	legend.position = "top";
	legend.valueText = "[[value]]";
	legend.valueWidth = 100;
	legend.valueAlign = "left";
	legend.equalWidths = false;
	legend.periodValueText = "total: [[value.sum]]"; // this is displayed when mouse is not over the chart.                
	chart.addLegend(legend);

	// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.cursorAlpha = 0;
	chart.addChartCursor(chartCursor);

	// SCROLLBAR
	var chartScrollbar = new AmCharts.ChartScrollbar();
	chartScrollbar.color = "#FFFFFF";
	chart.addChartScrollbar(chartScrollbar);

	// WRITE
	chart.write("chartdivTU1");
});