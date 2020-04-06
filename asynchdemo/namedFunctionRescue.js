console.log("before");
getUser(1, getRepositories);

function getRepositories(user) {
  getRepositories(user.gitUserName, getCommits);
}

function getCommits(repos) {
  getCommits(repos.repos, displayCommits);
}

function displayCommits(commits) {
  console.log("commits", commits.commits);
}

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
  setTimeout(
    () => callback({ user: username, repos: ["repo1", "repo3"] }),
    1000
  );
}
function getCommits(reponame, callback) {
  setTimeout(
    () => callback({ repos: reponame, commits: ["commit1", " commit2"] }),
    1000
  );
}
