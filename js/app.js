$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

$('label').on('mouseup', function(e){
    var radio = $(this).find('input[type=checkbox]');

    if( radio.is(':checked') ){
        radio.prop('checked', false);

    } else {
        radio.prop('checked', true);

    }

});
$('input#location').keyup(function(e) {
    console.log("hi");
    $('iframe').attr("src",$('iframe').attr("src").replace(/(.*q=)(.*)(\+.*)/i, "$1" + this.value + "$3"))
});

function imgclick()
{ 
    if (!$("#checkbox").prop("checked"))
    {
        $("#checkbox").click();
    }
    $('#destination').val($(event.target)[0].name);
}



// Disable default behavior
$('label').click(function(e){
    e.preventDefault();
});
function send() 
{
    var link = "https://wa.me/972507302850?text="  
    var name = $("#name").val();
    var phone = $("#number").val();
    var date = $("#date").val();
    var time = $("#time").val();
    var checkbox = $('#checkbox').prop("checked");
    var checkbox2 = $('#checkbox2').prop("checked");
    var location = $("#location").val();
    var extra = $("#extra").val();
    /*
var location = document.getElementsByClassName("wm-search__input")[0].value;
console.log(location);
if (location == undefined || location == "")
{

var location = document.getElementsByClassName("wm-search__selected")[0].value;
console.log(location);
if (location == undefined || location == "")
{
  alert("Location Invalid. Please Try Again.");
  return;
}
}
*/
    if (name == undefined || name == "")
    {
        swal("Name Invalid. Please Enter Name.","","warning");
        return;
    }

    if (phone == undefined || phone == "")
    {
        swal("Phone Invalid. Please Enter Phone.","","warning");
        return;
    }
    if (date == undefined || date == "")
    {
        swal("Date Invalid. Please Enter Date.","","warning");
        return;
    }

    if (time == undefined || time == "")
    {
        swal("Time Invalid. Please Enter Time.","","warning");
        return;
    }
    if (location == undefined || location == "")
    {
        swal("Location Invalid. Please Enter Location.","","warning");
        return;
    }
    var destination = $("#destination").val();
    var text = "";
    if (checkbox == true)
    {

        if (destination == undefined || destination == "")
        {
            swal("Destination Invalid. Please Enter Destination.","","warning");
            return;
        }

        if (checkbox2 == true)
        {
            if (extra == undefined || extra == "")
            {
                swal("Extra Notes Invalid. Please Enter Notes.","","warning");
                return;
            }
            text = "Hello! My name is " + name + " and I would like to call a Güber for " + date + " at " + time + ". " +
                "My location is " + location + ". My destination is " + destination + ". You can call me for more information at " + phone + ". Also: " + extra + ". See you!"
        }
        else
        {
            text = "Hello! My name is " + name + " and I would like to call a Güber for " + date + " at " + time + ". " +
                "My location is " + location + ". My destination is " + destination + ". You can call me for more information at " + phone + ". See you!"
        }
    }
    else
    {
        if (checkbox2 == true)
        {
            if (extra == undefined || extra == "")
            {
                swal("Extra Notes Invalid. Please Enter Notes.","","warning");
                return;
            }
            text = "Hello! My name is " + name + " and I would like to call a Güber for " + date + " at " + time + ". " +
                "My location is " + location + ". You can call me for more information at " + phone + ". Also: " + extra + ". See you!"
        }
        else
        {
            text = "Hello! My name is " + name + " and I would like to call a Güber for " + date + " at " + time + ". " +
                "My location is " + location + ". You can call me for more information at " + phone + ". See you!"
        }

    }

    link = link + text;

    window.open(link);
}