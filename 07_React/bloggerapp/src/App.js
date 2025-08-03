import React, { useState } from "react";
import "./App.css";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

import { books } from "./data/books";
import { blogs } from "./data/blogs";
import { courses } from "./data/courses";

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  return (
    <>
      <div className="btns">
        <button onClick={() => setShowCourses(!showCourses)}>{ showCourses ? "Hide Courses":"Show Courses"}</button>
        <button onClick={() => setShowBooks(!showBooks)}>{ showBooks ? "Hide Books":"Show Books"}</button>
        <button onClick={() => setShowBlogs(!showBlogs)}>{ showBlogs ? "Hide Blogs":"Show Blogs"}</button>
      </div>

      <div className="container">
        <CourseDetails courses={courses} show={showCourses} />
        <BookDetails books={books} show={showBooks} />
        <BlogDetails blogs={blogs} show={showBlogs} />
      </div>
    </>
  );
}

export default App;
