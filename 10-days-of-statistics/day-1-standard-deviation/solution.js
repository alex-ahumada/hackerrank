function processData(input) {
    //Enter your code here
    const processInput = input.split('\n');
    const numItems = processInput[0];
    let items = processInput[1].split(' ').map(a => parseInt(a));
    items.sort((a, b) => a - b);

    //Mean
    let mean = 0;
    for (let i = 0; i < numItems; i++) {
        mean += items[i];
    }
    mean = mean / numItems;

    //Squared distance
    let sqDis = 0;
    for (let i = 0; i < numItems; i++) {
        let value = items[i];
        sqDis += Math.pow(value - mean, 2);
    }

    let stdDev = Math.sqrt(sqDis / numItems);
    console.log(stdDev.toFixed(1));
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
