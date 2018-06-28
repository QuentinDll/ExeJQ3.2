$(function(){
  var i = 0;
  $('#bttMore').click(function(){
    $('#inptNumb').val(++i);
  });
  
  $('#bttLess').click(function(){
    $('#inptNumb').val(--i);
  });
});
