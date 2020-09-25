function jqueryvalidation() {
    var x = document.forms["Booking"]["firstname", "lastname", "email", "requiredroom", "arrival" , "departure"].value;
    if (x == "") {
        alert("Please fill in the required field");
        return false;
    }
}