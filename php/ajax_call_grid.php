<?php

if (isset($_POST["act"]))
	$act = $_POST["act"];
if (isset($_POST["grid_array_one"]))
	$grid_array_one = $_POST["grid_array_one"];
if (isset($_POST["id"]))
	$id = $_POST["id"];

if ($act == "add_Coefficient") {
		
for ($i = 0; $i < count($grid_array_one); $i++) {
		$row = $grid_array_one[$i];
		$var1 = executeQuery("INSERT INTO `pmt_grid_Coefficient` ( `txt_name`,`txt_addres` ,`txt_doc`, `txt_rate` ,`txt_multipe`,`txt_result`) VALUES ('{$row[0]}', '{$row[1]}','{$row[2]}', '{$row[3]}', '{$row[4]}', '{$row[5]}')");
	}
		
	
	die("1");
	
}

?>
