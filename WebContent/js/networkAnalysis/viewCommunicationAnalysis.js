var chart;

var chartData = [
                 {
                	 "port": SRC_PORT_TCP[0],
                	 "ByteCount": BYTE_COUNT_TCP[0],
                	 
                 }
                 ];
for(var i=1; i<TCP_qCount; i++){
	chartData.push({
   	 "port": SRC_PORT_TCP[i],
	 "ByteCount": BYTE_COUNT_TCP[i],
	 
	});
}


AmCharts.ready(function () {
	// SERIAL CHART
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = chartData;
	chart.categoryField = "port";
	chart.startDuration = 1;
	chart.plotAreaBorderColor = "#DADADA";
	chart.plotAreaBorderAlpha = 1;
	// this single line makes the chart a bar chart          
	chart.rotate = true;

	// AXES
	// Category
	var categoryAxis = chart.categoryAxis;
	categoryAxis.gridPosition = "start";
	categoryAxis.gridAlpha = 0.1;
	categoryAxis.axisAlpha = 0;

	// Value
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.axisAlpha = 0;
	valueAxis.gridAlpha = 0.1;
	valueAxis.position = "top";
	chart.addValueAxis(valueAxis);

	// GRAPHS
	// first graph
	var graph1 = new AmCharts.AmGraph();
	graph1.type = "column";
	graph1.title = "Byte Count(KB)";
	graph1.valueField = "ByteCount";
	graph1.balloonText = "Byte Count:[[value]]KB";
	graph1.lineAlpha = 0;
	graph1.fillColors = "#ADD981";
	graph1.fillAlphas = 1;
	chart.addGraph(graph1);


	// LEGEND
	var legend = new AmCharts.AmLegend();
	chart.addLegend(legend);

	// WRITE
	chart.write("chartdivVCA1");
});


/////////////////////////////////////////////////////////////////
var chart2;
var chartData2 = [
                 {
                	 "port": SRC_PORT_TCP[0],
                	 
                	 "PacketCount": PACKET_COUNT_TCP[0]
                 }
                 ];
for(var i=1; i<TCP_qCount; i++){
	chartData2.push({
   	 "port": SRC_PORT_TCP[i],
	 
	 "PacketCount": PACKET_COUNT_TCP[i]
	});
}


AmCharts.ready(function () {
	// SERIAL CHART
	chart2 = new AmCharts.AmSerialChart();
	chart2.dataProvider = chartData2;
	chart2.categoryField = "port";
	chart2.startDuration = 1;
	chart2.plotAreaBorderColor = "#DADADA";
	chart2.plotAreaBorderAlpha = 1;
	// this single line makes the chart a bar chart          
	chart2.rotate = true;

	// AXES
	// Category
	var categoryAxis = chart2.categoryAxis;
	categoryAxis.gridPosition = "start";
	categoryAxis.gridAlpha = 0.1;
	categoryAxis.axisAlpha = 0;

	// Value
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.axisAlpha = 0;
	valueAxis.gridAlpha = 0.1;
	valueAxis.position = "top";
	chart2.addValueAxis(valueAxis);

	// GRAPHS
	// second graph
	var graph2 = new AmCharts.AmGraph();
	graph2.type = "column";
	graph2.title = "Packet Count";
	graph2.valueField = "PacketCount";
	graph2.balloonText = "Packet Count:[[value]]";
	graph2.lineAlpha = 0;
	graph2.fillColors = "#81acd9";
	graph2.fillAlphas = 1;
	chart2.addGraph(graph2);

	// LEGEND
	var legend = new AmCharts.AmLegend();
	chart2.addLegend(legend);

	// WRITE
	chart2.write("chartdivVCA2");
});


////////////////////////////////////////////////////////////////////////////////


var chart3;

var chartData3 = [
                 {
                	 "port": SRC_PORT_UDP[0],
                	 "ByteCount": BYTE_COUNT_UDP[0],
                	 
                 }
                 ];
for(var i=1; i<UDP_qCount; i++){
	chartData3.push({
   	 "port": SRC_PORT_UDP[i],
	 "ByteCount": BYTE_COUNT_UDP[i],
	 
	});
}


AmCharts.ready(function () {
	// SERIAL CHART
	chart3 = new AmCharts.AmSerialChart();
	chart3.dataProvider = chartData3;
	chart3.categoryField = "port";
	chart3.startDuration = 1;
	chart3.plotAreaBorderColor = "#DADADA";
	chart3.plotAreaBorderAlpha = 1;
	// this single line makes the chart a bar chart          
	chart3.rotate = true;

	// AXES
	// Category
	var categoryAxis = chart3.categoryAxis;
	categoryAxis.gridPosition = "start";
	categoryAxis.gridAlpha = 0.1;
	categoryAxis.axisAlpha = 0;

	// Value
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.axisAlpha = 0;
	valueAxis.gridAlpha = 0.1;
	valueAxis.position = "top";
	chart3.addValueAxis(valueAxis);

	// GRAPHS
	// first graph
	var graph1 = new AmCharts.AmGraph();
	graph1.type = "column";
	graph1.title = "Byte Count(KB)";
	graph1.valueField = "ByteCount";
	graph1.balloonText = "Byte Count:[[value]]KB";
	graph1.lineAlpha = 0;
	graph1.fillColors = "#ADD981";
	graph1.fillAlphas = 1;
	chart3.addGraph(graph1);


	// LEGEND
	var legend = new AmCharts.AmLegend();
	chart3.addLegend(legend);

	// WRITE
	chart3.write("chartdivVCA3");
});


/////////////////////////////////////////////////////////////////
var chart4;
var chartData4 = [
                 {
                	 "port": SRC_PORT_UDP[0],
                	 
                	 "PacketCount": PACKET_COUNT_UDP[0]
                 }
                 ];
for(var i=1; i<UDP_qCount; i++){
	chartData4.push({
   	 "port": SRC_PORT_UDP[i],
	 
	 "PacketCount": PACKET_COUNT_UDP[i]
	});
}


AmCharts.ready(function () {
	// SERIAL CHART
	chart4 = new AmCharts.AmSerialChart();
	chart4.dataProvider = chartData4;
	chart4.categoryField = "port";
	chart4.startDuration = 1;
	chart4.plotAreaBorderColor = "#DADADA";
	chart4.plotAreaBorderAlpha = 1;
	// this single line makes the chart a bar chart          
	chart4.rotate = true;

	// AXES
	// Category
	var categoryAxis = chart4.categoryAxis;
	categoryAxis.gridPosition = "start";
	categoryAxis.gridAlpha = 0.1;
	categoryAxis.axisAlpha = 0;

	// Value
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.axisAlpha = 0;
	valueAxis.gridAlpha = 0.1;
	valueAxis.position = "top";
	chart4.addValueAxis(valueAxis);

	// GRAPHS
	// second graph
	var graph4 = new AmCharts.AmGraph();
	graph4.type = "column";
	graph4.title = "Packet Count";
	graph4.valueField = "PacketCount";
	graph4.balloonText = "Packet Count:[[value]]";
	graph4.lineAlpha = 0;
	graph4.fillColors = "#81acd9";
	graph4.fillAlphas = 1;
	chart4.addGraph(graph4);

	// LEGEND
	var legend = new AmCharts.AmLegend();
	chart4.addLegend(legend);

	// WRITE
	chart4.write("chartdivVCA4");
});