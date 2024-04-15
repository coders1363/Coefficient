<?php

if (isset($_POST["act"]))
	$act = $_POST["act"];
if (isset($_POST["id"]))
	$id = $_POST["id"];


if ($act == "get_list_Coefficient") {

	$result = executeQuery("SELECT `ID`, `txt_name`,`txt_addres` ,`txt_doc`, `txt_rate` ,`txt_multipe`,`txt_result` FROM `pmt_grid_Coefficient`");
	$data = array();
	foreach ($result as $row) {
		$data[] = $row;
	}
	die(json_encode($data));
}
?>
