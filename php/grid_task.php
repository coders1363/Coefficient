<?php
$act = $_POST["act"];
$multipe_data= $_POST["multipe_data"];
$rate_data= $_POST["rate_data"];
$doc_data= $_POST["doc_data"];
$res_data=array();
if ($act == "post") {

	
	for($x=0; $x<sizeof($multipe_data);$x++){
	$res=$multipe_data[$x]*$rate_data[$x];
	
		array_push($res_data,$res);
	}
	die(json_encode(array('data' => $res_data)));
}
?>
