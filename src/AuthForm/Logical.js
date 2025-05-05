import React from 'react';
import './Logical.css';

const logicalTopics = [
  'Blood Relations', 'Direction Sense', 'Coding-Decoding', 'Syllogism', 'Seating Arrangement (Linear, Circular)',
  'Puzzles', 'Ranking and Order', 'Data Sufficiency', 'Statements and Assumptions', 'Statements and Conclusions',
  'Cause and Effect', 'Course of Action', 'Input-Output', 'Decision Making', 'Critical Reasoning',
  'Clocks and Calendars', 'Venn Diagrams', 'Cubes and Dice', 'Analytical Reasoning'
];

const resources = [
  { name: 'IndiaBix Logical Reasoning', link: 'https://www.indiabix.com/logical-reasoning/questions-and-answers/' },
  { name: 'PrepInsta Logical Reasoning', link: 'https://prepinsta.com/logical-reasoning/' },
  { name: 'GeeksforGeeks Logical Reasoning', link: 'https://www.geeksforgeeks.org/logical-reasoning/' },
];

const Logical = () => {
  const mid = Math.ceil(logicalTopics.length / 2);
  const firstCol = logicalTopics.slice(0, mid);
  const secondCol = logicalTopics.slice(mid);

  return (
    <div className="logical-page">
      <h2>Logical Reasoning Topics</h2>
      <div className="topic-columns">
        <div className="column">
          {firstCol.map((topic, index) => (
            <div key={index} className="topic-box">{topic}</div>
          ))}
        </div>
        <div className="column">
          {secondCol.map((topic, index) => (
            <div key={index} className="topic-box">{topic}</div>
          ))}
        </div>
      </div>
      <h3>Recommended Resources</h3>
      <ul className="resource-list">
        {resources.map((res, index) => (
          <li key={index}>
            <a href={res.link} target="_blank" rel="noopener noreferrer">
              {res.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logical;
