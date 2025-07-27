import React from 'react';
import '../styles/About.css' 

const About = () => {
  return (
    <div className="about-container">
      <div className="card-container">
        <div className="feature-card">
          <h3>Student Management</h3>
          <ul>
            <li><strong>Student Profile Management:</strong> Stores personal, academic, and attendance records. Easy access for both students and faculty.</li>
            <li><strong>Attendance Tracking:</strong> Real-time attendance updates. Automatic reports generation.</li>
            <li><strong>Grades and Results:</strong> Upload and view exam results. Track academic performance over time.</li>
            <li><strong>Course Registration:</strong> Enroll in courses or electives. View schedules and syllabi.</li>
          </ul>
        </div>
        <div className="feature-card">
          <h3>Administration & Communication</h3>
          <ul>
            <li><strong>Fee Management:</strong> Fee submission and receipts. Track payment status and dues.</li>
            <li><strong>Communication:</strong> Announcements, circulars, and updates. Messaging between students and faculty.</li>
            <li><strong>Document Access:</strong> Download ID cards, transcripts, certificates, etc.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
