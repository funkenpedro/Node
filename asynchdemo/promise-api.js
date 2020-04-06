const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));
//or
const e = Promise.reject(new Error("reason for rejection"));
e.then((error) => console.log(error));
