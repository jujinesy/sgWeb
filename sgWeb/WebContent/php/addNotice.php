<?PHP
header('Content-Type: text/html; charset=utf-8');
session_cache_expire(1800);
//현재 페이지에만 임의로 1800을 줍니다.
session_start();
?>

<?php
			$host="localhost";
			$user="root";
			$password="aaaaaa";
			$conn=mysql_connect($host, $user, $password);
			$SGdb="SGdb";
			$FAdb="FAdb";

			mysql_query('set names utf8');
			mysql_select_db($FAdb, $conn);

			extract($_POST);
			$NOTICE=$_POST["NOTICE"];
			$USER_ID=$_POST["USER_ID"];			
			$TITLE=$_POST["TITLE"];
			$CONTENT=$_POST["CONTENT"];

			// echo $USER_ID.'<br/>';
			// echo $USER_PASSWORD.'<br/>';
			// echo $E_MAIL.'<br/>';
			// echo $IP_ADDRESS.'<br/>';
			// echo $MAC_ADDRESS.'<br/>';

			

			
			$q="INSERT INTO NOTICE(NOTICE,
				USER_ID,
				TITLE,
				CONTENT)
				VALUES('$NOTICE',
				'$USER_ID',
				'$TITLE',
				'$CONTENT')";

			mysql_query($q, $conn);
			?>

<meta http-equiv="refresh" content="0; url=../page/viewNotice.html">
<script>
alert("공지사항을 성공적으로 공지하였습니다.");
</script>
