//get allvalues using queryselectorall
let allvalues = document.querySelectorAll(".value");

//start forEach loop for displaying the animated values
allvalues.forEach((singlevalue) => {
    let startValue =0;
    let endValue = parseInt(singlevalue.getAttribute("data-value"));
    let duration = Math.floor(2000 / endValue);

    // counter for increasing the values & display
    let counter = setInterval(function (){
        startValue += 1;
        singlevalue.textContent = startValue;
        //clearing the interval
        if (startValue == endValue){
            clearInterval(counter);
        }
    },duration);
});