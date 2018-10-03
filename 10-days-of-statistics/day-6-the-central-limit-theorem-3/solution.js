function processData(input) {
    //Enter your code here
    const processInput = input.split('\n').map(a => parseFloat(a));

    const n = processInput[0]; // 100
    const mean = processInput[1]; // 500
    const std = processInput[2]; // 80
    const distPercent = processInput[3]; // 0.95
    const zScore = processInput[4]; // 1.96

    const marginOfError = zScore * std / Math.sqrt(n);

    console.log((mean - marginOfError).toFixed(2));
    console.log((mean + marginOfError).toFixed(2));
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
