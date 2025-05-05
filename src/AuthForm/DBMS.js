import React from 'react';
import './DBMS.css';

const DBMSTopics = () => {
  const topics = [
    'ER Model', 'Relational Model', 'Normalization', 'SQL (Queries, Joins, Subqueries)',
    'Transactions and Concurrency Control', 'Indexing', 'Storage and File Structure',
    'Database Design and Architecture'
  ];

  const resources = [
    { name: 'YouTube DBMS Concepts', link: 'https://www.youtube.com/watch?v=OpaiGYxkSuQ' },
    { name: 'GFG DBMS Concepts', link: 'https://www.geeksforgeeks.org/dbms/' }
  ];

  const firstColumn = topics.slice(0, Math.ceil(topics.length / 2));
  const secondColumn = topics.slice(Math.ceil(topics.length / 2));

  return (
    <div className="dbms-topics">
      <h2>Learn DBMS Topics</h2>
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

export default DBMSTopics;
