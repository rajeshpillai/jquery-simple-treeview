/*
$( document ).ready( function( ) {
    $( '.tree li' ).each( function() {
        if( $( this ).children( 'ul' ).length > 0 ) {
            $( this ).addClass( 'parent' );     
        }
    });
 
    $( '.tree li.parent > a' ).click( function( ) {
        $( this ).parent().toggleClass( 'active' );
        $( this ).parent().children( 'ul' ).slideToggle( 'fast' );
    });
 
    $( '#all' ).click( function() {
 
        $( '.tree li' ).each( function() {
            $( this ).toggleClass( 'active' );
            $( this ).children( 'ul' ).slideToggle( 'fast' );
        });
    });
 
});
*/


(function( $ ) {
    $.fn.quickTree = function(options) {
      // Establish our default settings
        var settings = $.extend({
            color        : "#ddffdd",
        }, options);
        
       return this.each(function() {
          var ele = $(this);
          
          $(ele).find('li' ).each( function() {
              if( $( this ).children( 'ul' ).length > 0 ) {
                  $( this ).addClass( 'parent' );     
              }
          });     
          
           $(ele).find('li.parent > a' ).click( function( ) {
              $( this ).parent().toggleClass( 'active' );
              $( this ).parent().children( 'ul' ).slideToggle( 'fast' );
              
              if (settings.onNodeClick){
               settings.onNodeClick(this);
              }
           });
        });
    };
 
}( jQuery ));



