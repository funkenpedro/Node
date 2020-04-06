/*getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});
*/

async function geteverything() {
  const customer = await getCustomer(1);
  console.log(customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    await sendEmail(customer.email, movies);
    console.log("email sent...");
  }
}

function getCustomer(id, callback) {
  console.log("getting customer");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}

function getTopMovies() {
  console.log("getting movies");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
}

function sendEmail(email, movies, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Email Sent...");
    }, 4000);
  });
}

geteverything();
