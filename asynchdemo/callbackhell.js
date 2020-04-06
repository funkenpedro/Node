console.log("before");
getUser(1, (user) => {
  console.log("user", user);
  getRepositories(user.gitUserName, (repos) => {
    getCommits(repos.repos, (commits) => {
      console.log("Commits:", commits);
    });
  });
});

console.log("after");

//asynch using callback
function getUser(id, callback) {
  setTimeout(() => {
    // non blocking or asynchronous function
    console.log("reading from database");
    callback({ id: id, gitUserName: "pedro" });
  }, 1000);
}

function getRepositories(username, callback) {
  setTimeout(() => callback({ user: username, repos: ["repo1", "repo3"] }));
}
function getCommits(reponame, callback) {
  setTimeout(() =>
    callback({ repos: reponame, commits: ["commit1", " commit2"] })
  );
}
