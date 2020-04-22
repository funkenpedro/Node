//embed author document  to course model
//by adding author: authorSchema
//subdocuments can only be changed in the context of their parent

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playgrub")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: authorSchema,
  })
);

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}
//up[date sub document
async function updateAuthor(courseId) {
  const course = await Course.findById(courseId);
  course.author.name = "Mosh Hamedani";
  course.save();
}
//update subdocument, multiple parameters possible
async function alternateUpdateAuthor(courseId) {
  const course = await Course.update(
    { _id: courseId },
    {
      $set: {
        "author.name": "John Smith",
      },
    }
  );
}
async function removeAuthor(courseId) {
  const course = await Course.update(
    { _id: courseId },
    {
      $unset: {
        author: "",
      },
    }
  );
}
async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

//createCourse("Node Course", new Author({ name: "Mosh" }));
//alternateUpdateAuthor("5e8d435fe35ca51d50b28d57");
removeAuthor("5e8d435fe35ca51d50b28d57");
