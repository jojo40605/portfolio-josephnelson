import React from 'react';
import './Resume.css';

const education = [
  {
    school: 'Brigham Young University, Fulton College of Engineering',
    degree: 'B.S. Computer Engineering',
    gpa: '3.87 / 4.00',
    details: 'Focus on embedded systems, hardware design, and computer architecture'
  },
  {
    school: 'Brigham Young University, Kennedy Center',
    degree: 'Minor in Arabic',
    gpa: '4.0 / 4.0',
    details: 'Facilitates global engineering collaboration with strong language and cultural competency in the Middle East'
  }
];

const skills = [
  'Programming: C, C++, Python, MATLAB, R, Kotlin, Java, SystemVerilog',
  'Embedded Systems: PCB design, FreeRTOS, ROS, LTSpice, PID Control',
  'Hardware: Oscilloscopes, multimeter usage, soldering/rework (SMT & through-hole)',
  'Languages: Arabic MSA & Levantine (Advanced), Amharic (Intermediate)'
];

const workExperience = [
  {
    title: 'Language Tutor and Translator',
    company: 'The Church of Jesus Christ of Latter-day Saints',
    date: 'Feb 2023 – Present',
    location: 'Provo, UT',
    details: [
      'Tailored multilingual tutoring for 20+ humanitarian groups across the Middle East and Africa',
      'Translated 100+ official training resources for worldwide publications'
    ]
  },
  {
    title: 'Volunteer & Leadership',
    company: 'Utah Underwater Robotics, BYU AI-Chip Club',
    date: 'Aug 2023 – Present',
    location: 'Utah County / Provo, UT',
    details: [
      'Taught STEM concepts through underwater robotic vehicle construction',
      'Worked with students and teachers, participated in regional competitions, mentored budding engineers'
    ]
  },
  {
    title: 'Volunteer & Leadership',
    company: 'BYU AI-Chip Club',
    date: 'Aug 2023 – Apr 2025',
    location: 'Provo, UT',
    details: [
      'Strived to improve public knowledge of AI concepts and hardware through workshops and projects',
      'Coordinated club meetings, maintained records, organized events'
    ]
  }
];

export default function Resume() {
  return (
    <section className="resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="timeline">
        <div className="timeline-column">
          <h3>Education</h3>
          {education.map((edu, i) => (
            <div key={i} className="timeline-item">
              <h4>{edu.degree}</h4>
              <p className="timeline-subtitle">{edu.school} | GPA: {edu.gpa}</p>
              <p>{edu.details}</p>
            </div>
          ))}
        </div>

        <div className="timeline-column">
          <h3>Skills</h3>
          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>

          <h3>Work Experience</h3>
          {workExperience.map((job, i) => (
            <div key={i} className="timeline-item">
              <h4>{job.title}</h4>
              <p className="timeline-subtitle">{job.company} | {job.date} | {job.location}</p>
              <ul>
                {job.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}