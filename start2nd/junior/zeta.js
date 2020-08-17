/**
 * Promise
 * resolve -> then
 * reject  -> catch
 */
(function () {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(3);
        }, 500);
        setTimeout(() => {
            reject(new Error("what"));
        }, 800);
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });

    console.info(promise);

    setTimeout(() => {
        console.info(promise);
    }, 1000);
})();

/**
 * いくつ面接
 */
(function () {
    var promise = interviewX(1)
        .then(() => {
            return interviewX(2);
        })
        .then(() => {
            return interviewX(3);
        })
        .then(() => {
            console.log("smile");
        })
        .catch((err) => {
            console.log("cry at ", err.round);
        });
})();
function interviewX(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rate = Math.random();
            if (rate < 0.6) {
                resolve("success");
            } else {
                var error = new Error("fail");
                error.round = round;
                reject(error);
            }
        }, 500);
    });
}

/**
 * 同期面接
 */
(function () {
    Promise.all([interview("apple"), interview("amazon")])
        .then(() => {
            console.log("smile");
        })
        .catch((err) => {
            console.log("cry for ", err.name);
        });
})();
function interview(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let rate = Math.random();
            if (rate < 0.6) {
                resolve("success");
            } else {
                var error = new Error("fail");
                error.name = name;
                reject(error);
            }
        }, 500);
    });
}

console.info("===========20200817===========");
// zetaAysnc async/await
(async function () {
    try {
        await interviewX(1);
        await interviewX(2);
        await interviewX(3);
    } catch (error) {
        console.log("#cry# at ", error.round);
    }
})();
