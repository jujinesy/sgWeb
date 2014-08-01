<?php //  
// echo "<table id=\"addUser\" border=4 width=100%>
// <tr  style=\" text-align: center; font-weight: bold; \">
// <td>USER ID</td><td>NAME</td><td>IP ADDRESS</td><td>MAC ADDRESS</td>
// <td>GATEWAY</td><td>E-MAIL</td><td>BLACK LIST</td><td>GROUP ID</td>
// </tr>";

// for($i=0; $i<$count; $i++)
	// {
	// echo "
	// <tr style=\" text-align: center;\">
	// <td>$dbUSER_ID[$i]</td><td>$dbUSER_NICKNAME[$i]</td><td>".long2ip($dbIP_ADDRESS[$i])."</td><td>$dbMAC_ADDRESS[$i]</td>
	// <td>".long2ip($dbGATEWAY[$i])."</td><td>$dbE_MAIL[$i]</td><td>$dbBLACK_FLAGT[$i]</td><td>$dbGROUP_ID[$i]</td>
	// </tr>
	// ";
	// };
	// echo "</table>";
// ?>

<?php 
$NO=1;
echo "
		<div id=\"tablewrapper\">
		<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" id=\"table\" class=\"tinytable\">
		<thead>
		<tr>
		<th><h3>No</h3></th>
		<th><h3>포트 번호</h3></th>
		<th><h3>포트 카운트</h3></th>
		</tr>
		</thead>
		<tbody>
		";
for($i=0; $i<$count_TCP; $i++){
	echo "		<tr>
	<td>$NO</td>
	<td>$dbSRC_PORT_TCP[$i]</td>
	<td>$dbSRC_PORT_COUNT_TCP[$i]</td>
	</tr>
	";
	$NO++;
}

echo "
				</tbody>
				</table>

				</div>
				"
?>