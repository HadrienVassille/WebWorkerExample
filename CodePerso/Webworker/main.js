var firstNumber = document.querySelector('#number1');
var secondNumber = document.querySelector('#number2');
var result = document.querySelector('#result');


if (window.Worker){
    var myWorker = new Worker("worker.js");

    firstNumber.onkeyup = function () {
        myWorker.postMessage([firstNumber.value,secondNumber.value]);
        console.log("Message send to the worker");
    };
    secondNumber.onkeyup = function () {
        myWorker.postMessage([firstNumber.value, secondNumber.value]);
        console.log("Message send to the worker");
    };
    myWorker.onmessage = function(e) {
        result.textContent = e.data;
        console.log('Message received from worker');
    };

}