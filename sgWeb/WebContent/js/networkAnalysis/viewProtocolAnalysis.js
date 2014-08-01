
var chart;
var legend;

var chartData = [
                 {
                	 "portNum": SRC_PORT[0]+"번",
                	 "litres": SRC_PORT_COUNT[0]
                 }
                 ];
for(var i=1; i<SRC_COUNT; i++){
	chartData.push({
		"portNum": SRC_PORT[i]+"번",
		"litres": SRC_PORT_COUNT[i]
	});
}

AmCharts.ready(function () {
	// PIE CHART
	chart = new AmCharts.AmPieChart();
	chart.dataProvider = chartData;
	chart.titleField = "portNum";
	chart.valueField = "litres";

	// LEGEND
	legend = new AmCharts.AmLegend();
	legend.align = "center";
	legend.markerType = "circle";
	chart.balloonText = "[[title]]<span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
	chart.addLegend(legend);

	// WRITE
	chart.write("chartdivVPA1");
});


var chart2;
var legend2;

var chartData2 = [
                 {
                	 "portNum": SRC_PORT_TCP[0]+"번",
                	 "litres": SRC_PORT_COUNT_TCP[0]
                 }
                 ];
for(var i=1; i<TCP_COUNT; i++){
	chartData2.push({
		"portNum": SRC_PORT_TCP[i]+"번",
		"litres": SRC_PORT_COUNT_TCP[i]
	});
}

AmCharts.ready(function () {
	// PIE CHART
	chart2 = new AmCharts.AmPieChart();
	chart2.dataProvider = chartData2;
	chart2.titleField = "portNum";
	chart2.valueField = "litres";

	// LEGEND
	legend2 = new AmCharts.AmLegend();
	legend2.align = "center";
	legend2.markerType = "circle";
	chart2.balloonText = "[[title]]<span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
	chart2.addLegend(legend2);

	// WRITE
	chart2.write("chartdivVPA2");
});


var chart3;
var legend3;

var chartData3 = [
                 {
                	 "portNum": SRC_PORT_UDP[0]+"번",
                	 "litres": SRC_PORT_COUNT_UDP[0]
                 }
                 ];
for(var i=1; i<UDP_COUNT; i++){
	chartData3.push({
		"portNum": SRC_PORT_UDP[i]+"번",
		"litres": SRC_PORT_COUNT_UDP[i]
	});
}

AmCharts.ready(function () {
	// PIE CHART
	chart3 = new AmCharts.AmPieChart();
	chart3.dataProvider = chartData3;
	chart3.titleField = "portNum";
	chart3.valueField = "litres";

	// LEGEND
	legend3 = new AmCharts.AmLegend();
	legend3.align = "center";
	legend3.markerType = "circle";
	chart3.balloonText = "[[title]]<span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
	chart3.addLegend(legend3);

	// WRITE
	chart3.write("chartdivVPA3");
});



// changes label position (labelRadius)
function setLabelPosition() {
	if (document.getElementById("rb1").checked) {
		chart.labelRadius = 30;
		chart.labelText = "[[title]]: [[value]]";
	} else {
		chart.labelRadius = -30;
		chart.labelText = "[[percents]]%";
	}
	chart.validateNow();
}


// makes chart 2D/3D                   
function set3D() {
	if (document.getElementById("rb3").checked) {
		chart.depth3D = 10;
		chart.angle = 10;
	} else {
		chart.depth3D = 0;
		chart.angle = 0;
	}
	chart.validateNow();
}

// changes switch of the legend (x or v)
function setSwitch() {
	if (document.getElementById("rb5").checked) {
		legend.switchType = "x";
	} else {
		legend.switchType = "v";
	}
	legend.validateNow();
}



