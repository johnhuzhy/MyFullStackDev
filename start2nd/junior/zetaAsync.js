/**
 * Async / Await
 * async function = promise
 * await can pause aysnc function running
 * try-catch can get the await error
 */

const result = (async function () {
    try {
        var content = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("7"));
            }, 500);
            setTimeout(() => {
                resolve();
            }, 900);
        });
    } catch (error) {
        console.log("error.", error.message);
    }
    console.log(content);
    return 4;
})();

setTimeout(() => {
    console.log(result);
}, 600);
