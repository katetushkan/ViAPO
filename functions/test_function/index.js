const functions = require('@google-cloud/functions-framework');
const math = require("mathjs");

// Register an HTTP function with the Functions Framework

functions.http('test-math', (req, res) => {
    // Your code here
    const matrix = math.matrix([[7, 1], [-2, 3]])
    const row = math.row(matrix, 0);
    // Send an HTTP response
    res.status(200).send(row.toString());
});


functions.http('operations-sqrt', (req, res) => {
    // create a matrix. Type of output of function ones is determined by the
    // configuration option `matrix`
    if (!req.body?.array) {
        return res.status(400).send();
    }

    const input = req.body.array;

    const array = math.matrix(input)

    if (array) {
        try {
            const result = math.map(array, math.sqrt);
            if (result) {
                res.status(200).send(result.toString());
            } else {
                res.status(400).send("Provide correct arguments!")
            }
        } catch (e) {
            console.log(e.message.toString())
            res.status(400).send({
                statusText: e.message.toString()
            });
        }
    }
});

functions.http('operations-power', (req, res) => {
    // Each element of matrix powered by a given number
    if (!req.body?.array) {
        return res.status(400).send();
    }

    const input = req.body.array;
    const power = req.body.power ? req.body.power : 2

    let array = math.matrix(input)
    let result;

    if (array) {

        try {
            result = math.map(array, (value) => {
                return Math.pow(value, power)
            });
        } catch (e) {
            console.log(e.message.toString())
            res.status(400).send({
                statusText: e.message.toString()
            });
            return;
        }
    }

    if (result) {
        res.status(200).send(result.toString());
    } else {
        res.status(400).send("Provide correct arguments!")
    }
});

functions.http('operations-add-number', (req, res) => {
    // Each element of matrix added a number
    if (!req.body?.array || !req.body.number) {
        return res.status(400).send();

    }

    const input = req.body.array;
    const number = req.body.number;

    let array = math.matrix(input)
    let result;

    if (array && number) {
        try {
            result = math.add(array, number);
        } catch (e) {
            console.log(e.message.toString())
            res.status(400).send({
                statusText: e.message.toString()
            });
            return;
        }
    }

    if (result) {
        res.status(200).send(result.toString());
    } else {
        res.status(400).send("Provide correct arguments!")
    }
});

functions.http('operations-add-matrix', (req, res) => {
    // Add two matrices

    if (!req.body?.arrayA || !req.body?.arrayB) {
        return res.status(400).send();

    }

    let arrayJSONA = req.body.arrayA;
    let arrayJSONB = req.body.arrayB;


    let arrayA = math.matrix(arrayJSONA);
    let arrayB = math.matrix(arrayJSONB)
    let result;

    if (arrayA && arrayB) {
        try {
            result = math.add(arrayA, arrayB);
        } catch (e) {
            console.log(e.message.toString())
            res.status(400).send({
                statusText: e.message.toString()
            });
            return;
        }
    }

    if (result) {
        res.status(200).send(result.toString());
    } else {
        res.status(400).send("Provide correct arguments!")
    }
});

functions.http('operations-transpose', (req, res) => {
    // Transpose Matrix
    if (!req.body?.array) {
        return res.status(400).send();
    }

    let input = req.body.array;
    let array = math.matrix(input)
    let result;

    if (array) {
        try {
            result = math.transpose(array);
        } catch (e) {
            console.log(e.message.toString())
            res.status(400).send({
                statusText: e.message.toString()
            });
            return;
        }
    }

    if (result) {
        res.status(200).send(result.toString());
    } else {
        res.status(400).send("Provide correct arguments!")
    }
});

functions.http('operations-determinant', (req, res) => {
    // Calculate the determinant of a matrix.
    if (!req.body?.array) {
        return res.status(400).send();
    }

    const input = req.body.array;
    const array = math.matrix(input)

    if (array) {
        try {
            const result = math.det(array);

            if (result.toString().length > 0) {
                res.status(200).send({determinant: result.toString()});
            } else {
                res.status(400).send("Provide correct arguments!")
            }
        } catch (e) {
            console.log(e.message.toString())
            res.status(400).send({
                statusText: e.message.toString()
            });
        }
    }
});

functions.http('operations-resize', (req, res) => {

    if (!req.body?.array || !req.body?.number || !req.body?.dimensions) {
        return res.status(400).send();
    }

    const input = req.body.array;
    const number = req.body.number ? req.body.number : 0;
    const dimensions = req.body.dimensions

    const array = math.matrix(input)

    if (array && dimensions) {
        try {
            const result = math.resize(array, dimensions, number);

            if (result) {
                res.status(200).send(result.toString());
            } else {
                res.status(400).send("Provide correct arguments!")
            }
        } catch (e) {
            console.log(e.message.toString())
            res.status(400).send({
                statusText: e.message.toString()
            });
        }
    }

});

functions.http('operations-replace', (req, res) => {
    // Calculate the determinant of a matrix.

    if (!req.body?.array || !req.body?.sub || !req.body?.rowm || !req.body?.column) {
        return res.status(400).send();
    }

    const input = req.body.array;
    const subset = req.body.sub
    const row = req.body.rowm;
    const column = req.body.column

    const array = math.matrix(input)

    if (array || subset) {
        try {
            const result = math.subset(array, math.index(row, column), subset);

            if (result) {
                res.status(200).send(result.toString());
            } else {
                res.status(400).send("Provide correct arguments!")
            }
        } catch (e) {
            console.log(e.message.toString())
            res.status(400).send({
                statusText: e.message.toString()
            });
        }
    }
});

functions.http('operations-factorial', (req, res) => {
    // Each element of matrix added a number

    if (!req.body?.array) {
        return res.status(400).send();
    }

    const input = req.body.array;

    const array = math.matrix(input)

    if (array) {
        try {
            const result = math.factorial(array);
            if (result) {
                res.status(200).send(result.toString());
            } else {
                res.status(400).send("Provide correct arguments!")
            }
        }
        catch (e) {
            console.log(e.message.toString())
            res.status(400).send({
                statusText: e.message.toString()
            });
        }
    }

});
