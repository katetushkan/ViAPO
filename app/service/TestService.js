'use strict';


/**
 * testing lib
 * By calling u can test the work of mathjs
 *
 * returns List
 **/
exports.testMath = function() {
  return new Promise(async function(resolve, reject) {

    try {
      const answer = await fetch('https://test-math-g45kpf25aa-lm.a.run.app');
      const response = await answer.json();
      resolve(response);
    }
    catch (e) {
      reject(e)
    }

  });
}

