var chart;

var chartData = [
                 {
                	 "user": USER_ID[0],
                	 "inByteCount": USER_BYTE_COUNT_DST[0],
                	 "outByteCount": USER_BYTE_COUNT_SRC[0]
                 }
                 ];
for(var i=1; i<Qcount; i++){
	chartData.push({
		"user": USER_ID[i],
		"inByteCount": USER_BYTE_COUNT_DST[i],
		"outByteCount": USER_BYTE_COUNT_SRC[i]
	});
}

AmCharts.ready(function () {
	// SERIALL CHART
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = chartData;
	chart.categoryField = "user";
	chart.plotAreaBorderAlpha = 0.2;
	chart.rotate = true;

	// AXES
	// Category
	var categoryAxis = chart.categoryAxis;
	categoryAxis.gridAlpha = 0.1;
	categoryAxis.axisAlpha = 0;
	categoryAxis.gridPosition = "start";

	// value                      
	var valueAxis = new AmCharts.ValueAxis();
	valueAxis.stackType = "regular";
	valueAxis.gridAlpha = 0.1;
	valueAxis.axisAlpha = 0;
	chart.addValueAxis(valueAxis);

	// GRAPHS
	// firstgraph 
	var graph = new AmCharts.AmGraph();
	graph.title = "In Byte Count";
	graph.labelText = "[[value]]";
	graph.valueField = "inByteCount";
	graph.type = "column";
	graph.lineAlpha = 0;
	graph.fillAlphas = 1;
	graph.lineColor = "#B3DBD4";
	graph.balloonText = "<b><span style='color:#C72C95'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]KB</b></span>";
	chart.addGraph(graph);

	// second graph                              
	graph = new AmCharts.AmGraph();
	graph.title = "Out Byte Count";
	graph.labelText = "[[value]]";
	graph.valueField = "outByteCount";
	graph.type = "column";
	graph.lineAlpha = 0;
	graph.fillAlphas = 1;
	graph.lineColor = "#69A55C";
	graph.balloonText = "<b><span style='color:#afbb86'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]KB</b></span>";
	chart.addGraph(graph);

	// LEGEND
	var legend = new AmCharts.AmLegend();
	legend.position = "bottom";
	legend.borderAlpha = 0.3;
	legend.horizontalGap = 10;
	legend.switchType = "v";
	chart.addLegend(legend);

	// WRITE
	chart.write("chartdivVUTA1");
});


              var chart2;

              var chartData2 = [
                               {
                              	 "user": USER_ID[0],
                              	 "inPacketCount": USER_PACKET_COUNT_DST[0],
                              	 "outPacketCount": USER_PACKET_COUNT_SRC[0]
                               }
                               ];
              for(var i=1; i<Qcount; i++){
              	chartData2.push({
              		"user": USER_ID[i],
              		"inPacketCount": USER_PACKET_COUNT_DST[i],
              		"outPacketCount": USER_PACKET_COUNT_SRC[i]
              	});
              }

            AmCharts.ready(function () {
                // SERIALL CHART
                chart2 = new AmCharts.AmSerialChart();
                chart2.dataProvider = chartData2;
                chart2.categoryField = "user";
                chart2.plotAreaBorderAlpha = 0.2;
                chart2.rotate = true;

                // AXES
                // Category
                var categoryAxis = chart2.categoryAxis;
                categoryAxis.gridAlpha = 0.1;
                categoryAxis.axisAlpha = 0;
                categoryAxis.gridPosition = "start";

                // value                      
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.stackType = "regular";
                valueAxis.gridAlpha = 0.1;
                valueAxis.axisAlpha = 0;
                chart2.addValueAxis(valueAxis);

                // GRAPHS
                // firstgraph 
                var graph = new AmCharts.AmGraph();
                graph.title = "In Packet Count";
                graph.labelText = "[[value]]";
                graph.valueField = "inPacketCount";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 1;
                graph.lineColor = "#B5B8D3";
                graph.balloonText = "<b><span style='color:#C72C95'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
                chart2.addGraph(graph);

                // second graph                              
                graph = new AmCharts.AmGraph();
                graph.title = "Out Packet Count";
                graph.labelText = "[[value]]";
                graph.valueField = "outPacketCount";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 1;
                graph.lineColor = "#F4E23B";
                graph.balloonText = "<b><span style='color:#afbb86'>[[title]]</b></span><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>";
                chart2.addGraph(graph);

                // LEGEND
                var legend2 = new AmCharts.AmLegend();
                legend2.position = "bottom";
                legend2.borderAlpha = 0.3;
                legend2.horizontalGap = 10;
                legend2.switchType = "v";
                chart2.addLegend(legend2);

                // WRITE
                chart2.write("chartdivVUTA2");
            });



