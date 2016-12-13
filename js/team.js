
$(".team-img").hover(function() {
    $( this ).append( $( '    <div class="item"><div><i class="plusBtn">+</i></div><span>Red Johnson <br><i> web designer</i></span></div>   ' ) );
}, 
                     function() {
    $( this ).find( "div" ).remove();

});