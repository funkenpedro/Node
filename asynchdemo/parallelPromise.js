const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 5000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 5000);
});

Promise.all([p1, p2]).then((result) => console.log(result));
