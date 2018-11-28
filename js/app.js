$(document).ready(function () {
    console.log("jquery loaded");


    $('#name').val(localStorage["name"]);


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    var time = (
        ("0" + today.getHours()).slice(-2) + ":" +
        ("0" + today.getMinutes()).slice(-2) + ":" +
        ("0" + today.getSeconds()).slice(-2));
    console.log(time);

    $('#time').val(time);

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;


    $('#date').val(today);

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });



    $("#myloc").on('click', function (e) {
        e.preventDefault();
        console.log("loc");


        /* HTML5 Geolocation */
        navigator.geolocation.getCurrentPosition(
            function (position) { // success cb
                /* Current Coordinate */
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var google_map_pos = new google.maps.LatLng(lat, lng);

                /* Use Geocoder to get address */
                var google_maps_geocoder = new google.maps.Geocoder();
                google_maps_geocoder.geocode({
                        'latLng': google_map_pos
                    },
                    function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK && results[0]) {
                            $('#location').val(results[0].formatted_address);
                            localStorage["location"] = results[0].formatted_address;
                        }
                    }
                );
            },
            function () { // fail cb
                console.log("fail");
            }
        );
    });


    $('#name').on('focusout', function () {
        localStorage["name"] = $('#name').val();
    });




});


function imgclick() {
    if (!$("#checkbox").prop("checked")) {
        $("#checkbox").click();
    }
    $('#destination').val($(event.target)[0].name);
}

function send() {
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
    if (name == undefined || name == "") {
        swal("Name Invalid. Please Enter Name.", "", "warning");
        return;
    }

    if (phone == undefined || phone == "") {
        swal("Phone Invalid. Please Enter Phone.", "", "warning");
        return;
    }
    if (date == undefined || date == "") {
        swal("Date Invalid. Please Enter Date.", "", "warning");
        return;
    }

    if (time == undefined || time == "") {
        swal("Time Invalid. Please Enter Time.", "", "warning");
        return;
    }
    if (location == undefined || location == "") {
        swal("Location Invalid. Please Enter Location.", "", "warning");
        return;
    }
    var destination = $("#destination").val();
    var text = "";
    if (checkbox == true) {

        if (destination == undefined || destination == "") {
            swal("Destination Invalid. Please Enter Destination.", "", "warning");
            return;
        }

        if (checkbox2 == true) {
            if (extra == undefined || extra == "") {
                swal("Extra Notes Invalid. Please Enter Notes.", "", "warning");
                return;
            }
            text = "Hello! My name is " + name + " and I would like to call a Güber for " + date + " at " + time + ". " +
                "My location is " + location + ". My destination is " + destination + ". You can call me for more information at " + phone + ". Also: " + extra + ". See you!"
        } else {
            text = "Hello! My name is " + name + " and I would like to call a Güber for " + date + " at " + time + ". " +
                "My location is " + location + ". My destination is " + destination + ". You can call me for more information at " + phone + ". See you!"
        }
    } else {
        if (checkbox2 == true) {
            if (extra == undefined || extra == "") {
                swal("Extra Notes Invalid. Please Enter Notes.", "", "warning");
                return;
            }
            text = "Hello! My name is " + name + " and I would like to call a Güber for " + date + " at " + time + ". " +
                "My location is " + location + ". You can call me for more information at " + phone + ". Also: " + extra + ". See you!"
        } else {
            text = "Hello! My name is " + name + " and I would like to call a Güber for " + date + " at " + time + ". " +
                "My location is " + location + ". You can call me for more information at " + phone + ". See you!"
        }

    }

    link = link + text;

    window.open(link);
}