function shit() {
  let sploot = function () {
    console.log("sploot");
  };
  sploot();
}
function shit(shat, shot) {
  let sploot = function () {
    console.log(shat, shot);
  };
  sploot();
}
shit();
shit("spot");

function getCommits() {
  console.log("got commits");
}
function getRepositories(name, callback) {
  callback(name);
}
function getRepositories(user) {
  getRepositories(user, getCommits);
}

getRepositories("pedro");
