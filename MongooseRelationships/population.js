//there is no requirement for data integrity in mongoose,

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playgourd")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" }, //name the target collection, you can store a course with an invalid author
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  let courses = await Course.find().select("name"); // lists course id and name
  console.log(courses);
  courses = await Course.find().select("name author"); //lists course id and name and author id
  console.log(courses);
  courses = await Course.find().populate("author").select("name author"); //lists course id and name and author id
  console.log(courses);
  courses = await Course.find()
    .populate("author", "name")
    .select("name author"); //lists course id and name and author id and author name only
  console.log(courses);
  courses = await Course.find()
    .populate("author", "name - _id")
    .select("name author"); //lists course id and name and author id and author name only
  console.log(courses);
}

//createAuthor("Mosh", "My bio", "My Website");

//createCourse("Node Course", "5e8d3e3368bdad10c87baeaa"); //second argument is author id gleaned from compass

listCourses();
