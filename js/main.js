function showInput() {
  var name = $('#name').val();
  var gender = $('#gender').val();
  var address = $('#address').val();
  var pincode = $('#pincode').val();
  var email = $('#email').val();
  var phone = $('#phone_number').val();
  $('#showname').html(name);
  $('#showgender').html(gender);
  $('#showaddress').html(address);
  $('#showpincode').html(pincode);
  $('#showemail').html(email);
  $('#showphone').html(phone);
  $('.container_form').hide();
  $('.container_table').show();
}

$('.container_table').hide();