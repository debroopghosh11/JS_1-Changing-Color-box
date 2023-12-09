var rect = document.querySelector("#center"); 

rect.addEventListener("mousemove",function(details){

    var rectangleLocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectangleLocation.left;

    if (insiderectval < rectangleLocation.width / 2){
        console.log("left");

    }
    else {
        console.log("right");
    }
});
