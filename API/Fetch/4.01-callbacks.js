//a callback function is a function executed by another function


/*JavaScript runs line by line. If we call back to a function/process
  that takes a long time, our thread is at the mercy of that long process.
  */

function callBackFunction(){
    for(let i = 0; i < 100; i++) {
        console.log(i);
    }

    const data = {
        name: "Ralf Machio",
        age: 66,
        occupation: "kickboxing"
    }
    return data;
}

function showData(dataFromFunction) {
    return "hello " + dataFromFunction.name
}

console.log(showData(callBackFunction()));