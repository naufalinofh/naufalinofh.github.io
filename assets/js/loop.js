// Cool loopy loop of adjectives I like :)
$(document).ready(function() {
  
    var items = ["product guy", "engineer", "tech innovation enthusiast", "bring impact"],
        $text = $( '#about-me span' ),
        delay = 2; //seconds
    
    function loop ( delay ) {
        $.each( items, function ( i, elm ){
            $text.delay( delay*1E3).fadeOut();
            $text.queue(function(){
                $text.html( items[i] );
                $text.dequeue();
            });
            $text.fadeIn();
            $text.queue(function(){
                if ( i == items.length -1 ) {
                    loop(delay);   
                }
                $text.dequeue();
            });
        });
    }
  
    loop( delay );
    
  });