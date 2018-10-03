function processData(input) {
    //Enter your code here
    const processInput = input.split(' ').map(a => parseFloat(a));
    const a = processInput[0];
    const b = processInput[1];

    let dailyCostA = 160 + 40 * (a + (a * a));
    let dailyCostB = 128 + 40 * (b + (b * b));

    console.log(dailyCostA.toFixed(3));
    console.log(dailyCostB.toFixed(3));
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
