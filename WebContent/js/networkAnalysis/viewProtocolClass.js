var chart;
var colorArray = new Array("#FF0F00","#FF6600","#FF9E01","#FCD202","#F8FF01","#B0DE09","#04D215","#0D8ECF","#0D52D1","#2A0CD0","#8A0CCF","#CD0D74");
var colorNum=1;

var chartData = [
                 {
                	 "src_port": SRC_PORT[0],
                	 "src_port_count": SRC_PORT_COUNT[0],
                	 "color": colorArray[0]
                 }
                 ];
for(var i=1; i<SRC_COUNT; i++){
	chartData.push({
		 "src_port": SRC_PORT[i],
		 "src_port_count": SRC_PORT_COUNT[i],
		 "color": colorArray[colorNum]
	});
	colorNum++;
	if(colorNum==11)colorNum=0;
}

AmCharts.ready(function () {
	// SERIAL CHART
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = chartData;
	chart.categoryField = "src_port";
	chart.startDuration = 1;

	// AXES
	// category
	var categoryAxis = chart.categoryAxis;
	categoryAxis.labelRotation = 45; // this line makes category values to be rotated
	categoryAxis.gridAlpha = 0;
	categoryAxis.fillAlpha = 1;
	categoryAxis.fillColor = "#FAFAFA";
	categoryAxis.gridPosition = "start";

	// value
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.dashLength = 5;
	valueAxis.title = "Protocol Count";
	valueAxis.axisAlpha = 0;
	chart.addValueAxis(valueAxis);

	// GRAPH
	var graph = new AmCharts.AmGraph();
	graph.valueField = "src_port_count";
	graph.colorField = "color";
	graph.balloonText = "<b>[[category]]: [[value]]</b>";
	graph.type = "column";
	graph.lineAlpha = 0;
	graph.fillAlphas = 1;
	chart.addGraph(graph);

	// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.cursorAlpha = 0;
	chartCursor.zoomable = false;
	chartCursor.categoryBalloonEnabled = false;
	chart.addChartCursor(chartCursor);


	// WRITE
	chart.write("chartdivVPC1");
});

///////////////////////////////////////////////////////////////////
colorNum=1;
var chartData2 = [
                  {
                 	 "dst_port": DST_PORT[0],
                 	 "dst_port_count": DST_PORT_COUNT[0],
                 	 "color": colorArray[0]
                  }
                  ];
 for(var i=1; i<DST_COUNT; i++){
 	chartData2.push({
 		 "dst_port": DST_PORT[i],
 		 "dst_port_count": DST_PORT_COUNT[i],
 		 "color": colorArray[colorNum]
 	});
 	colorNum++;
 	if(colorNum==11)colorNum=0;
 }

AmCharts.ready(function () {
	// SERIAL CHART
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = chartData2;
	chart.categoryField = "dst_port";
	chart.startDuration = 1;

	// AXES
	// category
	var categoryAxis = chart.categoryAxis;
	categoryAxis.labelRotation = 45; // this line makes category values to be rotated
	categoryAxis.gridAlpha = 0;
	categoryAxis.fillAlpha = 1;
	categoryAxis.fillColor = "#FAFAFA";
	categoryAxis.gridPosition = "start";

	// value
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.dashLength = 5;
	valueAxis.title = "Protocol Count";
	valueAxis.axisAlpha = 0;
	chart.addValueAxis(valueAxis);

	// GRAPH
	var graph = new AmCharts.AmGraph();
	graph.valueField = "dst_port_count";
	graph.colorField = "color";
	graph.balloonText = "<b>[[category]]: [[value]]</b>";
	graph.type = "column";
	graph.lineAlpha = 0;
	graph.fillAlphas = 1;
	chart.addGraph(graph);

	// CURSOR
	var chartCursor = new AmCharts.ChartCursor();
	chartCursor.cursorAlpha = 0;
	chartCursor.zoomable = false;
	chartCursor.categoryBalloonEnabled = false;
	chart.addChartCursor(chartCursor);


	// WRITE
	chart.write("chartdivVPC2");
});