// Collapse accordion on hover
$(document).ready(function() {
  
  $(".panel-default").hover(
   function() {
      $(this).find('.panel-collapse').collapse('show');
    }, function() {
      $(this).find('.panel-collapse').collapse('hide');
    }
  );
  
});
