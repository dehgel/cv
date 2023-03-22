// Collapse accordion on hover
(function( $ ){
  
   $(".panel-default").hover( function() {
      $(this).find('.panel-collapse').collapse('show');
    }, function() {
      $(this).find('.panel-collapse').collapse('hide');
    }
  );
  
})( jQuery );
