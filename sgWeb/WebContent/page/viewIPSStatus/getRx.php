<?php
	exec("cat /sys/class/net/eth0/statistics/rx_bytes", $a);
	sleep(1);
	exec("cat /sys/class/net/eth0/statistics/rx_bytes", $b);
	
	echo round((($b[0]-$a[0]) / 1024) * 100) / 100;
?>