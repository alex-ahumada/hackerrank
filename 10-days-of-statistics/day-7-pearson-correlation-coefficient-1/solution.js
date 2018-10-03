function processData(input) {
    //Enter your code here
    const processInput = input.split('\n');
    const size = parseInt(processInput[0]);
    const xs = processInput[1].trim().split(' ').map(a => parseFloat(a));
    const ys = processInput[2].trim().split(' ').map(a => parseFloat(a));

    console.log(pearson(xs, ys).toFixed(3));
}

// Pearson coefficient
function pearson(xs, ys) {
    if (xs == null || ys == null || xs.length != ys.length) {
        return null;
    }
    const xMean = getMean(xs);
    const yMean = getMean(xs);
    const n = xs.length;

    let numerator = 0;
    for (let i = 0; i < n; i++) {
        numerator += (xs[i] - xMean) * (ys[i] - yMean);
    }
    return numerator / (n * getStandardDeviation(xs) * getStandardDeviation(ys));
}

// Mean
function getMean(array) {
    if (array == null) {
        return null;
    }
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

// Standard Deviation
function getStandardDeviation(array) {
    if (array == null) {
        return null;
    }
    const mean = getMean(array);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i] - mean, 2);
    }
    const variance = sum / array.length;
    return Math.sqrt(variance);
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
