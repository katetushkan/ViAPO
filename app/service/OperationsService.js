'use strict';


/**
 * add a number to each element
 * Make a calculation for matrix and a number
 *
 * body String Matrix to transform (optional)
 * matrix MatrixSchema
 * number BigDecimal
 * no response value expected for this operation
 **/
exports.addElement = function (body) {
    return new Promise(async function (resolve, reject) {
        console.log("Server received the following arguments: ", body.matrix, body.number)
        try {
            const json = JSON.stringify(
                {
                    array: JSON.parse(body.matrix),
                    number: body.number ? JSON.parse(body?.number) : undefined
                })

            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const requestParam = {
                method: "POST",
                headers,
                body: json,
            }

            console.log('Request body: ', requestParam);

            const answer = await fetch('https://operations-add-number-g45kpf25aa-lm.a.run.app', requestParam);
            if (answer.status !== 200) {
                const error = await answer.json();
                reject(error);
            }

            const response = await answer.json();
            console.log("Cloud function powerElement responded with the following answer: ", response);
            resolve(response);

        } catch (e) {
            console.error("Unable to continue operation, an error was received: ", e.message);
            reject({code: 400, message: e.message})
        }
    });
}


/**
 * add two matrices
 * Make a calculation for two matrices.
 *
 * body String Transformed matrix (optional)
 * matrixA MatrixSchema
 * matrixB MatrixSchema
 * no response value expected for this operation
 **/
exports.addMatrix = function (body) {
    return new Promise(async function (resolve, reject) {
        console.log("Server received the following arguments: ", body.matrixA, body.matrixB)
        try {
            const json = JSON.stringify(
                {
                    arrayA: JSON.parse(body.matrixA),
                    arrayB: JSON.parse(body.matrixB)
                })

            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const requestParam = {
                method: "POST",
                headers,
                body: json,
            }

            console.log('Request body: ', requestParam);

            const answer = await fetch('https://operations-add-matrix-g45kpf25aa-lm.a.run.app', requestParam);
            console.log("Answer ", answer)
            if (answer.status !== 200) {
                const error = await answer.json();
                reject(error);
            }

            const response = await answer.json();
            console.log("Cloud function powerElement responded with the following answer: ", response);
            resolve(response);
        } catch (e) {
            console.error("Unable to continue operation, an error was received: ", e.message);
            reject({code: 400, message: e.message})
        }
    });
}


/**
 * Define matrix' determinant
 * Define matrix' determinant
 *
 * body String Matrix' determinant (optional)
 * matrix MatrixSchema
 * no response value expected for this operation
 **/
exports.determinantElement = function (body) {
    return new Promise(async function (resolve, reject) {
        console.log("Server received the following arguments: ", body.matrix)

        try {
            const json = JSON.stringify(
                {
                    array: JSON.parse(body.matrix)
                })

            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const requestParam = {
                method: "POST",
                headers,
                body: json,
            }

            console.log('Request body: ', requestParam);

            const answer = await fetch('https://operations-determinant-g45kpf25aa-lm.a.run.app', requestParam);
            console.log("Answer ", answer)
            const response = await answer.json();
            if (answer.status !== 200) {
                reject(response);
                return;
            }

            console.log("Cloud function powerElement responded with the following answer: ", response);
            resolve(response);
        } catch (e) {
            console.error("Unable to continue operation, an error was received: ", e.message);
            reject({code: 400, message: e.message})
        }
    });
}


/**
 * Define matrix' elemant factorial
 * Define matrix' elemant factorial
 *
 * body String Matrix' factorials (optional)
 * matrix MatrixSchema
 * no response value expected for this operation
 **/
exports.factorialElement = function (body) {
    return new Promise(async function (resolve, reject) {
        console.log("Server received the following arguments: ", body.matrix)

        try {
            const json = JSON.stringify({array: JSON.parse(body.matrix)})
            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const requestParam = {
                method: "POST",
                headers,
                body: json,
            }

            console.log('Request body: ', requestParam);

            const answer = await fetch('https://operations-factorial-g45kpf25aa-lm.a.run.app', requestParam);
            if (answer.status !== 200) {
                const error = await answer.json();
                reject(error);
            }

            const response = await answer.json();
            console.log("Cloud function responded with the following answewr: ", response);
            resolve(response);
        } catch (e) {
            console.error("Unable to continue operation, an error was received: ", e.message);
            reject({code: 400, message: e.message})
        }
    });
}


/**
 * enter each element into the power of provided number
 * Put into the power of a given power
 *
 * body String Transformed matrix (optional)
 * matrix MatrixSchema
 * number BigDecimal
 * no response value expected for this operation
 **/
exports.powerElement = function (body) {
    return new Promise(async function (resolve, reject) {
        console.log("Server received the following arguments: ", body.matrix, body.power)
        try {
            const json = JSON.stringify(
                {
                    array: JSON.parse(body.matrix),
                    power: body.power ? JSON.parse(body.power) : undefined
                })

            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const requestParam = {
                method: "POST",
                headers,
                body: json,
            }

            console.log('Request body: ', requestParam);

            const answer = await fetch('https://operations-power-g45kpf25aa-lm.a.run.app', requestParam);
            if (answer.status !== 200) {
                throw new Error(answer.status.toString());
            }

            const response = await answer.json();
            console.log("Cloud function powerElement responded with the following answer: ", response);
            resolve(response);
        } catch (e) {
            console.error("Unable to continue operation, an error was received: ", e.message);
            reject({code: 400, message: e.message})
        }
    });
}


/**
 * Replace elemnts in the matrix
 * Replace elemnts in the matrix
 *
 * body String Transformed matrix (optional)
 * matrix MatrixSchema
 * subset MatrixSchema
 * row MatrixSchema
 * column MatrixSchema
 * no response value expected for this operation
 **/
exports.replaceMatrix = function (body) {
    return new Promise(async function (resolve, reject) {
        console.log("Server received the following arguments: ", body.matrix, body.subset, body.row, body.column)
        try {
            const json = JSON.stringify(
                {
                    array: JSON.parse(body.matrix),
                    sub: JSON.parse(body.subset),
                    rowm: JSON.parse(body.row),
                    column: JSON.parse(body.column)
                })

            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const requestParam = {
                method: "POST",
                headers,
                body: json,
            }

            console.log('Request body: ', requestParam);

            const answer = await fetch('https://operations-replace-g45kpf25aa-lm.a.run.app', requestParam);
            console.log("Answer ", answer)
            const response = await answer.json();
            if (answer.status !== 200) {
                reject(response);
                return;
            }

            console.log("Cloud function powerElement responded with the following answer: ", response);
            resolve(response);
        } catch (e) {
            console.error("Unable to continue operation, an error was received: ", e.message);
            reject({code: 400, message: e.message})
        }
    });
}


/**
 * Resize matrix
 * Resize matrix
 *
 * body String Transformed matrix (optional)
 * matrix MatrixSchema
 * dimensions MatrixSchema
 * number BigDecimal
 * no response value expected for this operation
 **/
exports.resizeMatrix = function (body) {
    return new Promise(async function (resolve, reject) {
        console.log("Server received the following arguments: ", body.matrix, body.dimensions, body.number)

        try {
            const json = JSON.stringify(
                {
                    array: JSON.parse(body.matrix),
                    dimensions: JSON.parse(body.dimensions),
                    number: JSON.parse(body.number),
                })

            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const requestParam = {
                method: "POST",
                headers,
                body: json,
            }

            console.log('Request body: ', requestParam);

            const answer = await fetch('https://operations-resize-g45kpf25aa-lm.a.run.app', requestParam);
            console.log("Answer ", answer)
            const response = await answer.json();
            if (answer.status !== 200) {
                reject(response);
                return;
            }

            console.log("Cloud function powerElement responded with the following answer: ", response);
            resolve(response);
        } catch (e) {
            console.error("Unable to continue operation, an error was received: ", e.message);
            reject({code: 400, message: e.message})
        }
    });
}


/**
 * extrat square from each matrix element
 * Extracts sqrt
 *
 * body String Transformed matrix (optional)
 * matrix MatrixSchema
 * returns List
 **/
exports.sqrtElement = function (body) {
    return new Promise(async function (resolve, reject) {
        console.log("Server received the following arguments: ", body.matrix)
        try {
            const json = JSON.stringify({array: JSON.parse(body.matrix)})
            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const requestParam = {
                method: "POST",
                headers,
                body: json,
            }

            console.log('Request body: ', requestParam);

            const answer = await fetch('https://operations-sqrt-g45kpf25aa-lm.a.run.app', requestParam);
            if (answer.status !== 200) {
                const error = await answer.json();
                reject(error);
            }

            const response = await answer.json();
            console.log("Cloud function responded with the following answewr: ", response);
            resolve(response);
        } catch (e) {
            console.error("Unable to continue operation, an error was received: ", e.message);
            reject({code: 400, message: e.message})
        }
    });
}


/**
 * transpose matrix
 * Transpose matrix
 *
 * body String Transposed matrix (optional)
 * matrix MatrixSchema
 * no response value expected for this operation
 **/
exports.transposeElement = function (body) {
    return new Promise(async function (resolve, reject) {
        console.log("Server received the following arguments: ", body.matrix)


        try {
            const json = JSON.stringify(
                {
                    array: JSON.parse(body.matrix)
                })

            const headers = new Headers();
            headers.set('Content-Type', 'application/json');
            const requestParam = {
                method: "POST",
                headers,
                body: json,
            }

            console.log('Request body: ', requestParam);

            const answer = await fetch('http://localhost:8000', requestParam);
            console.log("Answer ", answer)
            if (answer.status !== 200) {
                const error = await answer.json();
                reject(error);
            }

            const response = await answer.json();
            console.log("Cloud function powerElement responded with the following answer: ", response);
            resolve(response);
        } catch (e) {
            console.error("Unable to continue operation, an error was received: ", e.message);
            reject({code: 400, message: e.message})
        }
    });
}

