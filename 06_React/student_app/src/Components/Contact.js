import React from 'react'

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2>Contact Information</h2>
      <p><strong>Name:</strong> Swetha B</p>
      <p><strong>Email:</strong> swetha@example.com</p>
      <p><strong>Phone:</strong> +91-9876543210</p>
      <p><strong>Address:</strong> 123, Main Street, Chennai, India</p>
    </div>
  )
}
const styles = {
  container: {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    maxWidth: '400px',
    borderRadius: '8px',
    margin: '20px auto',
    fontFamily: 'Arial'
  }
};

export default Contact