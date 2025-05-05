import React from 'react';
import './OOPS.css';

const OOPSTopics = () => {
  const topics = [
    'Class and Objects', 'Inheritance', 'Polymorphism',
    'Abstraction', 'Encapsulation'
  ];

  const resources = [
    { name: 'YouTube OOPS Concepts', link: 'https://www.youtube.com/watch?v=UhRdm5IAi2Q' },
    { name: 'GFG OOPS Concepts', link: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/' }
  ];

  const firstColumn = topics.slice(0, Math.ceil(topics.length / 2));
  const secondColumn = topics.slice(Math.ceil(topics.length / 2));

  return (
    <div className="oops-topics">
      <h2>Learn OOPS Topics</h2>
      <div className="topics-container">
        {/* First column */}
        <div className="topics-column">
          {firstColumn.map((topic, index) => (
            <div className="topic" key={index}>
              {topic}
            </div>
          ))}
        </div>

        {/* Second column */}
        <div className="topics-column">
          {secondColumn.map((topic, index) => (
            <div className="topic" key={index}>
              {topic}
            </div>
          ))}
        </div>
      </div>

      <h3>Resources for Practice:</h3>
      <ul className="resource-list">
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OOPSTopics;
