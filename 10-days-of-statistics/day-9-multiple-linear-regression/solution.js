function processData(input) {
    //Enter your code here
    const processInput = input.split('\n');
    const features = processInput[0].split(' ').map(a => parseInt(a));
    let m = features[0];
    let n = features[1];
    //console.log(`m = ${m}`);
    //console.log(`n = ${n}`);
    let X = createMatrix(n, m + 1);
    let Y = createMatrix(n, 1);
    for (let row = 0; row < n; row++) {
        let data = processInput[row + 1].split(' '). map(a => parseFloat(a));
        //console.log(data);
        X[row][0] = 1;
        for (let col = 1; col <= m; col++) {
            X[row][col] = data[col - 1];
        }
        Y[row][0] = data[m];
    }
    //console.log(X);
    //console.log(Y);

    // Calculate B
    const xtx = multiply(transpose(X),X);
    const xtxInv = invert(xtx);
    const xty = multiply(transpose(X), Y);
    const B = multiply(xtxInv, xty);

    //console.log(xtx);
    //console.log(xtxInv);
    //console.log(xty);
    //console.log(B);

    const sizeB = B.length;

    // Print solution
    const q = parseInt(processInput[n + 1]);
    //console.log(`q = ${q}`);
    for (let i = 0; i < q; i++) {
        let data = processInput[i + 9].split(' '). map(a => parseFloat(a));
        //console.log(data);
        let result = B[0][0];
        for (let row = 1; row < sizeB; row++) {
            result += data[row - 1] * B[row][0];
        }
        console.log(result);
    }
}

// Create empty multidimensional array
function createMatrix(length) {
    let arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        let args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createMatrix.apply(this, args);
    }

    return arr;
}

// Multiply matrices
function multiply(A, B) {
    const aRows = A.length;
    const aCols = A[0].length;
    const bRows = B.length;
    const bCols = B[0].length;

    let C = createMatrix(aRows, bCols);
    let cRows = C.length;
    let cCols = C[0].length;

    for (let row = 0; row < cRows; row++) {
        for (let col = 0; col < cCols; col++) {
            C[row][col] = 0;
            for (let k = 0; k < aCols; k++) {
                C[row][col] += A[row][k] * B[k][col];
            }
        }
    }
    //console.log(C);
    return C;
}

function transpose(matrix) {
    // Create new array and switch dimensions
    const originalRows = matrix.length;
    const originalCols = matrix[0].length;
    const rows = originalCols;
    const cols = originalRows;
    let result = createMatrix(rows, cols);

    // Fill array data
    for (let row = 0; row < originalRows; row++) {
        for (let col = 0; col < originalCols; col++) {
            result[col][row] = matrix[row][col];
        }
    }
    return result;
}


// Returns the inverse of matrix
function invert(M){

    //if the matrix isn't square: exit
    if(M.length !== M[0].length) return;

    // create the identity matrix (I), and a copy (C) of the original
    let i=0, ii=0, j=0, dim=M.length, e=0, t=0;
    let I = [], C = [];
    for(i = 0; i < dim; i += 1){
        I[I.length] = [];
        C[C.length] = [];
        for(j = 0; j < dim; j += 1){

            if(i == j) {
                I[i][j] = 1;
            }
            else {
                I[i][j] = 0;
            }

            // Copy original matrix
            C[i][j] = M[i][j];
        }
    }

    // Perform elementary row operations
    for(i = 0; i < dim; i += 1){
        // get element on diagonal
        e = C[i][i];

        // if we have a 0 swap with a lower row
        if(e == 0) {
            for(ii= i + 1; ii < dim; ii += 1) {
                if(C[ii][i] != 0) {
                    for(j=0; j<dim; j++) {
                        e = C[i][j];
                        C[i][j] = C[ii][j];
                        C[ii][j] = e;
                        e = I[i][j];
                        I[i][j] = I[ii][j];
                        I[ii][j] = e;
                    }
                    break;
                }
            }
            e = C[i][i];
            //if still 0, not cant be inverted
            if(e == 0) return;
        }

        // Scale this row down
        for(j = 0; j < dim; j++){
            C[i][j] = C[i][j] / e;
            I[i][j] = I[i][j] / e;
        }

        // Subtract this row (scaled appropriately for each row) from ALL of
        // the other rows so that there will be 0's in this column in the
        // rows above and below this one
        for(ii = 0; ii < dim; ii++){
            // Only apply to other rows
            if(ii == i) continue;

            // Change this element to 0
            e = C[ii][i];

            for(j = 0; j < dim; j++){
                C[ii][j] -= e*C[i][j];
                I[ii][j] -= e*I[i][j];
            }
        }
    }

    // C == identity
    // I == inverse:
    return I;
}



function gaussian(a, index) {
    const n = index.length;
    const c = new Array(n);

    // Initialize
    for (let i = 0; i < n; ++i) index[i] = i;

    // Find the rescaling factors
    for (let i = 0; i < n; ++i) {
        let c1 = 0;
        for (let j = 0; j < n; ++j) {
            const c0 = Math.abs(a[i][j]);
            if (c0 > c1) c1 = c0;
        }
        c[i] = c1;
    }

    // Search the pivoting element per column
    let k = 0;
    for (let j = 0; j < n-1; ++j) {
        let pi1 = 0;

        for (let i = j; i < n; ++i) {
            let pi0 = Math.abs(a[index[i]][j]);
            pi0 /= c[index[i]];

            if (pi0 > pi1) {
                pi1 = pi0;
                k = i;
            }
        }

        // Interchange rows by pivoting order
        const itmp = index[j];
        index[j] = index[k];
        index[k] = itmp;
        for (let i = j+1; i<n; ++i) {
            const pj = a[index[i]][j]/a[index[j]][j];

            //  Pivoting ratios below the diagonal
            a[index[i]][j] = pj;

            // Modify other elements
            for (let l = j+1; l<n; ++l)
                a[index[i]][l] -= pj*a[index[j]][l];
        }
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
