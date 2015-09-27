/**
 * Created by Laptop-Evan on 9/26/2015.
 */

$(document).ready(function(){
    // HTML markup implementation, cover mode
    $( '#menu' ).multilevelpushmenu({
        containersToPush: [$( '#pushobj' )],
        mode: 'cover'
    });
});