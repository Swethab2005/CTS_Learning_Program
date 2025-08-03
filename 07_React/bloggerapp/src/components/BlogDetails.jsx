function BlogDetails({ blogs, show }) {
  return show ? (
    <div className="column">
      <h1>Blog Details</h1>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <h4><strong>{blog.author}</strong></h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  ) : null;
}
export default BlogDetails;
