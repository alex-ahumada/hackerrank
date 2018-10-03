function processData(input) {
    //Enter your code here
    const processInput = input.split('\n');
    const lambda = parseFloat(processInput[0]);
    const k = parseInt(processInput[1]);

    console.log(poisson(k, lambda).toPrecision(2));
}

function poisson(k, lambda) {
    return (Math.pow(lambda, k) * Math.pow(Math.E, -1 * lambda)) / factorial(k);
}

function factorial(n) {
    if (n < 0) {
        return null;
    }
    let result = 1;
    while (n > 0) {
        result *= n--;
    }
    return result;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
