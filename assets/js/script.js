$(document).ready(function() {
    $(".see-more").click(function() {
        if ($(this).attr('aria-expanded') === "true") {
            console.log("aria expanded true");
            $(this).html("See more ...");
        }
        if ($(this).attr('aria-expanded') === "false") {
            $(this).html("See less");
        }
    })
})