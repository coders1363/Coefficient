$("#19534735266174dd405d3b2050165575").css("border", "none");

$(function(){

  // فراخوانی تابع قابل جستجو نمودن دراپ دان:
  try{initSearchableDrp();}catch(e){}

  // فراخوانی تابع تب بندی:
  initArianTabs();

});


$("#btn_records").click(function(){

  var form_id = $("form").prop('id');
  $("#"+form_id).submit();  

}).find('button').addClass('btn-success');




$("#btn_Computing").click(function(){
  Register();
  Computing();
});




function Register(){  
  var rateData = [];
  var multipeData = [];

  var totalRows = $("#grd_one").getNumberRows();
  for (var i = 1; i <= totalRows; i++) {
    var fieldRate = $("#grd_one").getValue(i, 4);
    var fieldMultipe = $("#grd_one").getValue(i, 5);


    rateData.push(fieldRate);
    multipeData.push(fieldMultipe);
  }

  var requestData = {
    act: "post",
    rate_data: rateData,
    multipe_data: multipeData
  };


  $.ajax({
    type: "POST",
    url: window.location,
    data: {
      requestData: requestData,

    },
    async: false,
    success: function (data) {
      console.log("response", data);

      var responseData = JSON.parse(data);
      var dataLength = responseData.data.length;

      for (var y = 0; y < dataLength; y++) {
        var value = responseData.data[y];
        $("#grd_one").setValue(value, y + 1, 6);
      }
    },
    data: requestData
  });
}


function Computing(){  

  var grid = $('#grd_one');
  var row_counts = grid.getNumberRows();

  var grid_array_one = [];
  for (let i = 1; i <= row_counts; i++) {
    grid_array_one[i - 1] = [];
    grid_array_one[i - 1][0] = grid.getValue(i, 1);
    grid_array_one[i - 1][1] = grid.getValue(i, 2);
    grid_array_one[i - 1][2] = grid.getValue(i, 3);
    grid_array_one[i - 1][3] = grid.getValue(i, 4);
    grid_array_one[i - 1][4] = grid.getValue(i, 5);
    grid_array_one[i - 1][5] = grid.getValue(i, 6);
  }


  $.ajax({ 
    type: "POST",
    url: window.location,
    data: {
      grid_array_one:grid_array_one,
      act:"add_Coefficient"
    },
    async: false,
    success: function (reg) {
      console.log(reg);
      if (reg == '1') {
        load_list_Coefficient();

        dispAlert('داده ها با موفقیت ثبت شد','yellow');
        // تغییر تب فعال:
        $('#btn_Coefficient_2').addClass('active');
        $('#btn_Coefficient_1').removeClass('active');
        initArianTabs();
      }

      else {
        dispAlert('وقوع خطا در ثبت!');
      }
    },
    error: function(a,b,c) {alert(c);}
  });


}


//......................



$(function(){
  load_list_Coefficient();
});

// نمایش لیست رکوردهای کاربر در dataTable:
function load_list_Coefficient(){
  $('#tbl_list_Coefficient').empty();

  $.ajax({
    type: "POST",
    url: window.location,
    dataType: "json",
    data: {act: 'get_list_Coefficient'},
    async: false,
    success: function (jsn_data){
      $('#tbl_list_Coefficient').DataTable({
        pageLength: 10,
        language: {
          "lengthMenu": " _MENU_",
          "zeroRecords": "موردی یافت نشد",
          "info": "صفحه  _PAGE_ از _PAGES_",
          "infoEmpty": "موردی یافت نشد",
          "infoFiltered": "",
          "loadingRecords": "بارگذاری...",
          "processing": "در حال پردازش...",
          "search": "جستجو:",
          "zeroRecords": "موردی یافت نشد",
          "paginate": {
            "first": "اول",
            "last": "آخر",
            "next": "بعدی",
            "previous": "قبلی"
          },
        },
        "order": [[ 0, "asc" ]],
        columnDefs: [{  targets:0,  visible: true,searchable: true  }, 
                     {  targets:1,  visible: true,searchable: true  }, 
                     {  targets:2,  visible: true,searchable: false  }, 
                     {  targets:3,  visible: true,searchable: false  }
                    ],
        data: jsn_data,
        columns: [

          { 'data': 'txt_name',title: "نام" },
          { 'data': 'txt_addres',title: "آدرس" },
          { 'data': 'txt_doc',title: "اسناد" },
          { 'data': 'txt_rate',title: "امتیاز" },
          { 'data': 'txt_multipe',title: "ضریب" },
          { 'data': 'txt_result',title: "نتیجه" },
          
        ],
        destroy: true,
        searching: true,
        paging: true,
        success: function (data) {},
        error: function (data) {
          console.log('error2: '+data);
        }
      });
    },
    error: function(xhr, status, error){console.log('error: '+error);}
  });
}



//..............................


$("#end").click(function(){

  var form_id = $("form").prop('id');
  $("#"+form_id).submit();  
  
}).find('button').addClass('btn-success');

