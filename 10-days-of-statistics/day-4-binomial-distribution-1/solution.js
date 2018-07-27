function processData(input) {
    //Enter your code here
    const processInput = input.split(' ');
    const ratio = parseFloat(processInput[0]);
    const numPerBirth = parseFloat(processInput[1]);
    const n = 6;
    const p = ratio / (1 + ratio);
    let result = 0;

    for (let x = 3; x <= n; x++) {
        result += binomial(n, x, p);
    }

    console.log(result.toPrecision(3));
}

function factorial (n) {
    if (n < 0) {
        return null;
    }
    let result = 1;
    while (n > 0) {
        result *= n--;
    }
    return result;
}

function combinations(n, x) {
    if (n < 0 || x < 0 || x > n) {
        return null;
    }
    return factorial(n) / (factorial(x) * factorial(n - x));
}

function binomial(n, x, p) {
    if (p < 0 || p > 1 || n < 0 || x < 0 || x > n) {
        return null;
    }
    return combinations(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x);
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
