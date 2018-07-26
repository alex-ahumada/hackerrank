function processData(input) {
    //Enter your code here
    const processInput = input.split('\n');
    const numElements = parseInt(processInput[0]);
    const values = processInput[1].split(' ').map(item => parseInt(item, 10));
    const weights = processInput[2].split(' ').map(item => parseInt(item, 10));

    let subtotalValues = 0;
    let subtotalWeights = 0;

    for (let i = 0; i < values.length; i++) {
        subtotalValues += values[i] * weights[i];
    }

    for (let i = 0; i < weights.length; i++) {
        subtotalWeights += weights[i];
    }

    console.log((subtotalValues / subtotalWeights).toFixed(1));
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
