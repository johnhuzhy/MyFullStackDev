/**
 * Callback Function
 */
interview((res) => {
    if (res instanceof Error) {
        return console.log("cry");
    }
    console.log("smile");
});

function interview(callback) {
    setTimeout(() => {
        let rate = Math.random();
        if (rate < 0.6) {
            callback("success");
        } else {
            callback(new Error("fail"));
        }
    }, 1000);
}
