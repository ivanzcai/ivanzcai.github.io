import * as $ from "jquery";

$(document).ready(function(){
    $("#panel").hide();
    $("button").click(function(){
        $("#panel").slideToggle();
    });
});
