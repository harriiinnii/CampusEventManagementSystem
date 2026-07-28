// Registration message

function showMessage() {
    alert("Registration successful! Thank you for joining the event.");
}


// Login message

function loginMessage() {
    alert("Login successful!");
}
function contactMessage() {
    alert("Your message has been sent successfully!");
}
window.onload = function() {

    let params = new URLSearchParams(window.location.search);

    let eventName = params.get("event");

    if(eventName) {
        document.getElementById("event").value = eventName;
    }

}