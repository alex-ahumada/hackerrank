function processData(input) {
    //Enter your code here
    const processInput = input.split('\n');
    const numItems = processInput[0];
    let items = processInput[1].split(' ').map(a => parseInt(a));
    items.sort((a, b) => a - b);

    const medianPos = parseInt(numItems / 2);
    let q1 = items.slice(0, medianPos);

    let q3;
    if (numItems % 2 === 0) {
        q3 = items.slice(medianPos, items.length);
    }
    else {
        q3 = items.slice(medianPos + 1, items.length);
    }

    console.log(median(q1));
    console.log(median(items));
    console.log(median(q3));
}

function median(items) {

    let half = Math.floor(items.length / 2);

    if(items.length % 2) {
        return items[half];
    }
    else {
        return Math.floor((items[half - 1] + items[half]) / 2);
    }
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
