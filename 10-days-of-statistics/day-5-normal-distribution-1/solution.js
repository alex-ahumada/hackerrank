function processData(input) {
    //Enter your code here
    const processInput = input.split('\n');
    const data = processInput[0].split(' ').map(a => parseInt(a));
    const q1 = parseFloat(processInput[1]);
    const q2Process = processInput[2].split(' ');
    const q2A = parseFloat(q2Process[0]);
    const q2B = parseFloat(q2Process[1]);
    const mean = data[0];
    const std = data[1];

    console.log(cumulative(mean, std, q1).toFixed(3));
    console.log((cumulative(mean, std, q2B) - cumulative(mean, std, q2A)).toFixed(3));
}

function cumulative(mean, std, x) {
    let parameter = (x - mean) / (std * Math.sqrt(2));
    return (0.5) * (1 + erf(parameter));
}

function erf(z) {
    let t = 1.0 / (1.0 + 0.5 * Math.abs(z));

    let ans = 1 - t * Math.exp( -z*z   -   1.26551223 +
        t * ( 1.00002368 +
            t * ( 0.37409196 +
                t * ( 0.09678418 +
                    t * (-0.18628806 +
                        t * ( 0.27886807 +
                            t * (-1.13520398 +
                                t * ( 1.48851587 +
                                    t * (-0.82215223 +
                                        t * ( 0.17087277))))))))));
    if (z >= 0) return  ans;
    else        return -ans;
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
