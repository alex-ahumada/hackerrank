function processData(input) {
    //Enter your code here
    const processInput = input.split('\n');
    const numItems = processInput[0];
    let items = processInput[1].split(' ').map(item => parseInt(item, 10));
    items.sort((a,b) => a - b);

    //Mean
    let mean = 0;

    for (let i = 0; i < numItems; i++) {
        mean += items[i];
    }
    mean = mean / numItems;
    console.log(mean);

    //Median
    let midLowValue = items[Math.round(numItems/2) - 1];
    let midHighValue = items[Math.round(numItems/2)];
    let median = (midLowValue + midHighValue) / 2;
    console.log(median);

    //Mode
    console.log(mode(items));
}

function mode(array) {
    if(array.length === 0) return null;
    let modeMap = {};
    let maxEl = array[0], maxCount = 1;

    for(let i = 0; i < array.length; i++) {
        let el = array[i];

        if(modeMap[el] == null) {
            modeMap[el] = 1;
        }
        else {
            modeMap[el]++;
        }

        if(modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }

    return maxEl;
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
