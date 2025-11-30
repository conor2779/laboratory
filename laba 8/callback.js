function iterate(obj, callback) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            callback(key, obj[key]);
        }
    }
}
const obj = { a: 1, b: 2, c: 3 };

iterate(obj, (key, value) => {
  console.log({ key, value });
});

