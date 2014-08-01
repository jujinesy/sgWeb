var chart;

var chartData = [];

AmCharts.ready(function () {
	// first we generate some random data
	generateChartData();

	// SERIAL CHART
	chart = new AmCharts.AmSerialChart();
	chart.pathToImages = "../img/viewTrafficAnalysis/";
	chart.dataProvider = chartData;
	chart.categoryField = "date";

	// data updated event will be fired when chart is first displayed,
	// also when data will be updated. We'll use it to set some
	// initial zoom
	chart.addListener("dataUpdated", zoomChart);

	// AXES
	// Category
	var categoryAxis = chart.categoryAxis;
	categoryAxis.parseDates = true; // in order char to understand dates, we should set parseDates to true
	categoryAxis.minPeriod = "mm"; // as we have data with minute interval, we have to set "mm" here.			 
	categoryAxis.gridAlpha = 0.07;
	categoryAxis.axisColor = "#DADADA";

	// Value
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.gridAlpha = 0.07;
	valueAxis.title = "Byte";
	chart.addValueAxis(valueAxis);

	// GRAPH
	var graph = new AmCharts.AmGraph();
	graph.type = "line"; // try to change it to "column"
	graph.title = "red line";
	graph.valueField = "visits";
	graph.lineAlpha = 1;
	graph.lineColor = "#d1cf2a";
	graph.fillAlphas = 0.3; // setting fillAlphas to > 0 value makes it area graph
	chart.addGraph(graph);

	// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.cursorPosition = "mouse";
	chartCursor.categoryBalloonDateFormat = "JJ:NN, DD MMMM";
	chart.addChartCursor(chartCursor);

	// SCROLLBAR
	var chartScrollbar = new AmCharts.ChartScrollbar();

	chart.addChartScrollbar(chartScrollbar);

	// WRITE
	chart.write("chartdivTA1");
});

// generate some random data, quite different range 
function generateChartData() {
	// current date
	var firstDate = new Date();
	// now set 1000 minutes back                 
	firstDate.setMinutes(firstDate.getDate() - 1000);

	// and generate 1000 data items
	for (var i = 0; i < 1000; i++) {
		var newDate = new Date(firstDate);
		// each time we add one minute
		newDate.setMinutes(newDate.getMinutes() + i);
		// some random number      
		var visits = dbBYTE_COUNT_EX[i]
		// add data item to the array                          
		chartData.push({
			date: newDate,
			visits: visits
		});
	}
}

// this method is called when chart is first inited as we listen for "dataUpdated" event
function zoomChart() {
	// different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
	chart.zoomToIndexes(chartData.length - 40, chartData.length - 1);
}










////////////////////////////////////////////////////////////////////////////




var chart2;

var chartData2 = [];

AmCharts.ready(function () {
	// first we generate some random data
	generateChartData2();

	// SERIAL CHART
	chart2 = new AmCharts.AmSerialChart();
	chart2.pathToImages = "../img/viewTrafficAnalysis/";
	chart2.dataProvider = chartData2;
	chart2.categoryField = "date";

	// data updated event will be fired when chart is first displayed,
	// also when data will be updated. We'll use it to set some
	// initial zoom
	chart2.addListener("dataUpdated", zoomChart2);

	// AXES
	// Category
	var categoryAxis = chart2.categoryAxis;
	categoryAxis.parseDates = true; // in order char to understand dates, we should set parseDates to true
	categoryAxis.minPeriod = "mm"; // as we have data with minute interval, we have to set "mm" here.			 
	categoryAxis.gridAlpha = 0.07;
	categoryAxis.axisColor = "#DADADA";

	// Value
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.gridAlpha = 0.07;
	valueAxis.title = "Byte";
	chart2.addValueAxis(valueAxis);

	// GRAPH
	var graph = new AmCharts.AmGraph();
	graph.type = "line"; // try to change it to "column"
	graph.title = "red line";
	graph.valueField = "visits";
	graph.lineAlpha = 1;
	graph.lineColor = "#d1cf2a";
	graph.fillAlphas = 0.3; // setting fillAlphas to > 0 value makes it area graph
	chart2.addGraph(graph);

	// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.cursorPosition = "mouse";
	chartCursor.categoryBalloonDateFormat = "JJ:NN, DD MMMM";
	chart2.addChartCursor(chartCursor);

	// SCROLLBAR
	var chartScrollbar = new AmCharts.ChartScrollbar();

	chart2.addChartScrollbar(chartScrollbar);

	// WRITE
	chart2.write("chartdivTA2");
});

// generate some random data, quite different range 
function generateChartData2() {
	// current date
	var firstDate = new Date();
	// now set 1000 minutes back                 
	firstDate.setMinutes(firstDate.getDate() - 1000);

	// and generate 1000 data items
	for (var i = 0; i < 1000; i++) {
		var newDate = new Date(firstDate);
		// each time we add one minute
		newDate.setMinutes(newDate.getMinutes() + i);
		// some random number      
		var visits = dbBYTE_COUNT_IN[i];//Math.round(Math.random() * 40) + 10;
		// add data item to the array                          
		chartData2.push({
			date: newDate,
			visits: visits
		});
	}
}

// this method is called when chart is first inited as we listen for "dataUpdated" event
function zoomChart2() {
	// different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
	chart2.zoomToIndexes(chartData2.length - 40, chartData2.length - 1);
}