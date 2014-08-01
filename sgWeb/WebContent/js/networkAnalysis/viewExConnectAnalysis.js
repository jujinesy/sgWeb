var chart;
var chartData = [];

AmCharts.ready(function () {
	// generate some random data first
	generateChartData();

	// SERIAL CHART    
	chart = new AmCharts.AmSerialChart();
	chart.pathToImages = "../img/viewExConnectAnalysis/";
	chart.dataProvider = chartData;
	chart.categoryField = "date";

	// listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
	chart.addListener("dataUpdated", zoomChart);

	// AXES
	// category                
	var categoryAxis = chart.categoryAxis;
	categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
	categoryAxis.minPeriod = "hh"; // our data is daily, so we set minPeriod to DD
	categoryAxis.minorGridEnabled = true;
	categoryAxis.axisColor = "#DADADA";

	// first value axis (on the left)
	var valueAxis1 = new AmCharts.ValueAxis();
	valueAxis1.offset = 100;
	valueAxis1.axisColor = "#FF6600";
	valueAxis1.axisThickness = 2;
	valueAxis1.gridAlpha = 0;
	chart.addValueAxis(valueAxis1);

	// GRAPHS
	// first graph
	var graph1 = new AmCharts.AmGraph();
	graph1.valueAxis = valueAxis1; // we have to indicate which value axis should be used
	graph1.title = top5[0];
	graph1.valueField = "top1";
	graph1.bullet = "round";
	graph1.hideBulletsCount = 30;
	graph1.bulletBorderThickness = 1;
	chart.addGraph(graph1);

	// second value axis (on the right) 
	var valueAxis2 = new AmCharts.ValueAxis();
	valueAxis2.position = "left"; // this line makes the axis to appear on the right
	valueAxis2.offset = 50;
	valueAxis2.axisColor = "#FCD202";
	valueAxis2.gridAlpha = 0;
	valueAxis2.axisThickness = 2;
	chart.addValueAxis(valueAxis2);

	// second graph                
	var graph2 = new AmCharts.AmGraph();
	graph2.valueAxis = valueAxis2; // we have to indicate which value axis should be used
	graph2.title = top5[1];
	graph2.valueField = "top2";
	graph2.bullet = "square";
	graph2.hideBulletsCount = 30;
	graph2.bulletBorderThickness = 1;
	chart.addGraph(graph2);


	// third value axis (on the left, detached)
	valueAxis3 = new AmCharts.ValueAxis();
	valueAxis3.position = "left";
	valueAxis3.offset = 0; // this line makes the axis to appear detached from plot area
	valueAxis3.gridAlpha = 0;
	valueAxis3.axisColor = "#B0DE09";
	valueAxis3.axisThickness = 2;
	chart.addValueAxis(valueAxis3);

	// third graph
	var graph3 = new AmCharts.AmGraph();
	graph3.valueAxis = valueAxis3; // we have to indicate which value axis should be used
	graph3.valueField = "top3";
	graph3.title = top5[2];
	graph3.bullet = "triangleUp";
	graph3.hideBulletsCount = 30;
	graph3.bulletBorderThickness = 1;
	chart.addGraph(graph3);
	
	// 4th value axis (on the right) 
	var valueAxis4 = new AmCharts.ValueAxis();
	valueAxis4.position = "right"; // this line makes the axis to appear on the right
	valueAxis4.axisColor = "#0d8ecf";
	valueAxis4.gridAlpha = 0;
	valueAxis4.axisThickness = 2;
	chart.addValueAxis(valueAxis4);

	// 4th graph                
	var graph4 = new AmCharts.AmGraph();
	graph4.valueAxis = valueAxis4; // we have to indicate which value axis should be used
	graph4.title = top5[3];
	graph4.valueField = "top4";
	graph4.bullet = "square";
	graph4.hideBulletsCount = 30;
	graph4.bulletBorderThickness = 1;
	chart.addGraph(graph4);


	// 5th value axis (on the left, detached)
	valueAxis5 = new AmCharts.ValueAxis();
	valueAxis5.position = "right";
	valueAxis5.offset = 50; // this line makes the axis to appear detached from plot area
	valueAxis5.gridAlpha = 0;
	valueAxis5.axisColor = "#2a0cd0";
	valueAxis5.axisThickness = 2;
	chart.addValueAxis(valueAxis5);

	// 5th graph
	var graph5 = new AmCharts.AmGraph();
	graph5.valueAxis = valueAxis5; // we have to indicate which value axis should be used
	graph5.valueField = "top5";
	graph5.title = top5[4];
	graph5.bullet = "triangleUp";
	graph5.hideBulletsCount = 30;
	graph5.bulletBorderThickness = 1;
	chart.addGraph(graph5);

	// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.cursorPosition = "mouse";
	chart.addChartCursor(chartCursor);

	// SCROLLBAR
	var chartScrollbar = new AmCharts.ChartScrollbar();
	chart.addChartScrollbar(chartScrollbar);

	// LEGEND
	var legend = new AmCharts.AmLegend();
	legend.marginLeft = 110;
	legend.useGraphSettings = true;
	chart.addLegend(legend);

	// WRITE
	chart.write("chartdivECA1");
});

// generate some random data, quite different range
function generateChartData() {
	var firstDate = new Date();
	firstDate.setDate(firstDate.getDate() - 29);

	for (var i = 0; i < 30; i++) {
		// we create date objects here. In your data, you can have date strings 
		// and then set format of your dates using chart.dataDateFormat property,
		// however when possible, use date objects, as this will speed up chart rendering.                    
		var newDate = new Date(firstDate);
		newDate.setDate(newDate.getDate() + i);

		var top1 = BYTE_COUNT_1[i];//Math.round(Math.random() * 40) + 100;
		var top2 = BYTE_COUNT_2[i];//Math.round(Math.random() * 80) + 500;
		var top3 = BYTE_COUNT_3[i];//Math.round(Math.random() * 6000);
		var top4 = BYTE_COUNT_4[i];//Math.round(Math.random() * 6000);
		var top5 = BYTE_COUNT_5[i];//Math.round(Math.random() * 6000);

		chartData.push({
			date: newDate,
			top1: top1,
			top2: top2,
			top3: top3,
			top4: top4,
			top5: top5
		});
	}
}

// this method is called when chart is first inited as we listen for "dataUpdated" event
function zoomChart() {
	// different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
	chart.zoomToIndexes(10, 20);
}









////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var chart2;
var chartData2 = [];

AmCharts.ready(function () {
	// generate some random data first
	generateChartData2();

	// SERIAL CHART    
	chart2 = new AmCharts.AmSerialChart();
	chart2.pathToImages = "../img/viewExConnectAnalysis/";
	chart2.dataProvider = chartData2;
	chart2.categoryField = "date";

	// listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
	chart2.addListener("dataUpdated", zoomChart2);

	// AXES
	// category                
	var categoryAxis = chart2.categoryAxis;
	categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
	categoryAxis.minPeriod = "hh"; // our data is daily, so we set minPeriod to DD
	categoryAxis.minorGridEnabled = true;
	categoryAxis.axisColor = "#DADADA";

	// first value axis (on the left)
	var valueAxis1 = new AmCharts.ValueAxis();
	valueAxis1.offset = 100;
	valueAxis1.axisColor = "#FF6600";
	valueAxis1.axisThickness = 2;
	valueAxis1.gridAlpha = 0;
	chart2.addValueAxis(valueAxis1);

	// GRAPHS
	// first graph
	var graph1 = new AmCharts.AmGraph();
	graph1.valueAxis = valueAxis1; // we have to indicate which value axis should be used
	graph1.title = top5[0];
	graph1.valueField = "top1";
	graph1.bullet = "round";
	graph1.hideBulletsCount = 30;
	graph1.bulletBorderThickness = 1;
	chart2.addGraph(graph1);

	// second value axis (on the right) 
	var valueAxis2 = new AmCharts.ValueAxis();
	valueAxis2.position = "left"; // this line makes the axis to appear on the right
	valueAxis2.offset = 50;
	valueAxis2.axisColor = "#FCD202";
	valueAxis2.gridAlpha = 0;
	valueAxis2.axisThickness = 2;
	chart2.addValueAxis(valueAxis2);

	// second graph                
	var graph2 = new AmCharts.AmGraph();
	graph2.valueAxis = valueAxis2; // we have to indicate which value axis should be used
	graph2.title = top5[1];
	graph2.valueField = "top2";
	graph2.bullet = "square";
	graph2.hideBulletsCount = 30;
	graph2.bulletBorderThickness = 1;
	chart2.addGraph(graph2);


	// third value axis (on the left, detached)
	valueAxis3 = new AmCharts.ValueAxis();
	valueAxis3.position = "left";
	valueAxis3.offset = 0; // this line makes the axis to appear detached from plot area
	valueAxis3.gridAlpha = 0;
	valueAxis3.axisColor = "#B0DE09";
	valueAxis3.axisThickness = 2;
	chart2.addValueAxis(valueAxis3);

	// third graph
	var graph3 = new AmCharts.AmGraph();
	graph3.valueAxis = valueAxis3; // we have to indicate which value axis should be used
	graph3.valueField = "top3";
	graph3.title = top5[2];
	graph3.bullet = "triangleUp";
	graph3.hideBulletsCount = 30;
	graph3.bulletBorderThickness = 1;
	chart2.addGraph(graph3);
	
	// 4th value axis (on the right) 
	var valueAxis4 = new AmCharts.ValueAxis();
	valueAxis4.position = "right"; // this line makes the axis to appear on the right
	valueAxis4.axisColor = "#0d8ecf";
	valueAxis4.gridAlpha = 0;
	valueAxis4.axisThickness = 2;
	chart2.addValueAxis(valueAxis4);

	// 4th graph                
	var graph4 = new AmCharts.AmGraph();
	graph4.valueAxis = valueAxis4; // we have to indicate which value axis should be used
	graph4.title = top5[3];
	graph4.valueField = "top4";
	graph4.bullet = "square";
	graph4.hideBulletsCount = 30;
	graph4.bulletBorderThickness = 1;
	chart2.addGraph(graph4);


	// 5th value axis (on the left, detached)
	valueAxis5 = new AmCharts.ValueAxis();
	valueAxis5.position = "right";
	valueAxis5.offset = 50; // this line makes the axis to appear detached from plot area
	valueAxis5.gridAlpha = 0;
	valueAxis5.axisColor = "#2a0cd0";
	valueAxis5.axisThickness = 2;
	chart2.addValueAxis(valueAxis5);

	// 5th graph
	var graph5 = new AmCharts.AmGraph();
	graph5.valueAxis = valueAxis5; // we have to indicate which value axis should be used
	graph5.valueField = "top5";
	graph5.title = top5[4];
	graph5.bullet = "triangleUp";
	graph5.hideBulletsCount = 30;
	graph5.bulletBorderThickness = 1;
	chart2.addGraph(graph5);

	// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.cursorPosition = "mouse";
	chart2.addChartCursor(chartCursor);

	// SCROLLBAR
	var chartScrollbar = new AmCharts.ChartScrollbar();
	chart2.addChartScrollbar(chartScrollbar);

	// LEGEND
	var legend = new AmCharts.AmLegend();
	legend.marginLeft = 110;
	legend.useGraphSettings = true;
	chart2.addLegend(legend);

	// WRITE
	chart2.write("chartdivECA2");
});

// generate some random data, quite different range
function generateChartData2() {
	var firstDate = new Date();
	firstDate.setDate(firstDate.getDate() - 29);

	for (var i = 0; i < 30; i++) {
		// we create date objects here. In your data, you can have date strings 
		// and then set format of your dates using chart.dataDateFormat property,
		// however when possible, use date objects, as this will speed up chart rendering.                    
		var newDate = new Date(firstDate);
		newDate.setDate(newDate.getDate() + i);

		var top1 = PACKET_COUNT_1[i];//Math.round(Math.random() * 40) + 100;
		var top2 = PACKET_COUNT_2[i];//Math.round(Math.random() * 80) + 500;
		var top3 = PACKET_COUNT_3[i];//Math.round(Math.random() * 6000);
		var top4 = PACKET_COUNT_4[i];//Math.round(Math.random() * 6000);
		var top5 = PACKET_COUNT_5[i];//Math.round(Math.random() * 6000);

		chartData2.push({
			date: newDate,
			top1: top1,
			top2: top2,
			top3: top3,
			top4: top4,
			top5: top5
		});
	}
}

// this method is called when chart is first inited as we listen for "dataUpdated" event
function zoomChart2() {
	// different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
	chart2.zoomToIndexes(10, 20);
}