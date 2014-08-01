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
		<div id=\"tableheader\">
		<div class=\"search\">
		<select id=\"columns\" onchange=\"sorter.search('query')\"></select>
		<input type=\"text\" id=\"query\" onkeyup=\"sorter.search('query')\" />
		</div>
		<span class=\"details\">
		<div>Records <span id=\"startrecord\"></span>-<span id=\"endrecord\"></span> of <span id=\"totalrecords\"></span></div>
		<div><a href=\"javascript:sorter.reset()\">reset</a></div>
		</span>
		</div>
		<table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" id=\"table\" class=\"tinytable\">
		<thead>
		<tr>
		<th><h3>No</h3></th>
		<th><h3>Port Class</h3></th>
		<th><h3>Port Number</h3></th>
		<th><h3>Protocol Count</h3></th>
		</tr>
		</thead>
		<tbody>
		";
for($i=0; $i<$count; $i++){
	echo "		<tr>
	<td>$NO</td>
	<td>Source Port</td>
	<td>$dbSRC_PORT[$i]</td>
	<td>$dbSRC_PORT_COUNT[$i]</td>
	</tr>
	";
	$NO++;
}
for($i=0; $i<$count2; $i++){
	echo "		<tr>
	<td>$NO</td>
	<td>Destination Port</td>
	<td>$dbDST_PORT[$i]</td>
	<td>$dbDST_PORT_COUNT[$i]</td>
	</tr>
	";
	$NO++;
}
echo "
				</tbody>
				</table>
				<div id=\"tablefooter\">
				<div id=\"tablenav\">
				<div>
				<img src=\"../img/viewTable/first.gif\" width=\"16\" height=\"16\" alt=\"First Page\" onclick=\"sorter.move(-1,true)\" />
				<img src=\"../img/viewTable/previous.gif\" width=\"16\" height=\"16\" alt=\"First Page\" onclick=\"sorter.move(-1)\" />
				<img src=\"../img/viewTable/next.gif\" width=\"16\" height=\"16\" alt=\"First Page\" onclick=\"sorter.move(1)\" />
				<img src=\"../img/viewTable/last.gif\" width=\"16\" height=\"16\" alt=\"Last Page\" onclick=\"sorter.move(1,true)\" />
				</div>
				<div>
				<select id=\"pagedropdown\"></select>
				</div>
				<div>
				<a href=\"javascript:sorter.showall()\">view all</a>
				</div>
				</div>
				<div id=\"tablelocation\">
				<div>
				<select onchange=\"sorter.size(this.value)\">
				<option value=\"5\">5</option>
				<option value=\"10\" selected=\"selected\">10</option>
				<option value=\"20\">20</option>
				<option value=\"50\">50</option>
				<option value=\"100\">100</option>
				</select>
				<span>Entries Per Page</span>
				</div>
				<div class=\"page\">Page <span id=\"currentpage\"></span> of <span id=\"totalpages\"></span></div>
				</div>
				</div>
				</div>
				"
?>