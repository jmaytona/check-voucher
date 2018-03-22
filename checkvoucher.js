/*Youtube reference: Dynamically Add / Remove input fields in PHP with Jquery Ajax*/

/*ADD CHECK DETAILS function*/
$("#addcd").on("click", function(){
var i = 1; 
    i++;
var addRow = "<tr><td><button type='button' class='btn btn-danger delcd'>Delete</button></td><td><input type='text' class='form-control' placeholder='Particular'></td><td><input type='text' class='form-control' placeholder='Amount'></td><td><input type='text' class='form-control' placeholder='Remarks'></td></tr>";

$("#cdtable tbody").append(addRow);

});

/*DELETE CHECK DETAILS function*/

$("#cdtable tr").on("click",".delcd", function(){
$(this).closest('tr').remove();
});


