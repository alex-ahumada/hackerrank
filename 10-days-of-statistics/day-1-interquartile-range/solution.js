function processData(input) {
    //Enter your code here
    const processInput = input.split('\n');
    const numItems = processInput[0];
    let items = processInput[1].split(' ').map(a => parseInt(a));
    let frec = processInput[2].split(' ').map(a => parseInt(a));
    let allItems = [];

    for (let i = 0; i < items.length; i++) {
        let times = frec[i];
        for (let j = 0; j < times; j++) {
            allItems.push(items[i]);
        }
    }

    allItems.sort((a, b) => a - b);

    const medianPos = parseInt(allItems.length / 2);
    let q1 = allItems.slice(0, medianPos);

    let q3;
    if (allItems.length % 2 === 0) {
        q3 = allItems.slice(medianPos, allItems.length);
    }
    else {
        q3 = allItems.slice(medianPos + 1, allItems.length);
    }

    console.log((median(q3) - median(q1)).toFixed(1));

}

function median(items) {

    let half = Math.floor(items.length/2);

    if(items.length % 2) {
        return items[half];
    }
    else {
        return Math.floor((items[half - 1] + items[half]) / 2.0);
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
