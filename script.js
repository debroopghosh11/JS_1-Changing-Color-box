// script.js
var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details) {
    var rectangleLocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectangleLocation.left;

    if (insiderectval < rectangleLocation.width / 2) {
        var redcolor = mapRange(
            0, rectangleLocation.width / 2, 255, 0, insiderectval
        );
        rect.style.backgroundColor = `rgb(${redcolor}, 0, 0)`;
    } else {
        var bluecolor = mapRange(
            rectangleLocation.width / 2,
            rectangleLocation.width,
            0,
            255,
            insiderectval
        );
        rect.style.backgroundColor = `rgb(0, 0, ${bluecolor})`;
    }
});

rect.addEventListener("mouseleave", function() {
    // Reset to white when the cursor leaves the rectangle
    rect.style.backgroundColor = "white";
});

// Function to map a value from one range to another
function mapRange(inMin, inMax, outMin, outMax, value) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
