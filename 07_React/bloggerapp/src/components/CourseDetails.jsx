function CourseDetails({ courses, show }) {
  return (
    <>
      {show && (
        <div className="column">
          <h1>Course Details</h1>
          {courses.map((course, index) => (
            <div key={index}>
              <h3>{course.name}</h3>
              <p>{course.date}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default CourseDetails;
