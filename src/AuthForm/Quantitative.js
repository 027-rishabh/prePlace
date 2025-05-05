import React from 'react';
import './Quantitative.css';

const quantitativeTopics = [
  'Number System',
  'LCM and HCF',
  'Simplifications',
  'Profit and Loss',
  'Simple and Compound Interest',
  'Ratio and Proportion',
  'Partnership',
  'Averages',
  'Ages',
  'Time and Work',
  'Pipes and Cisterns',
  'Time, Speed, and Distance',
  'Boats and Streams',
  'Mixtures and Alligations',
  'Permutations and Combinations',
  'Probability',
  'Mensuration (2D and 3D)',
  'Data Interpretation (Tables, Pie Charts, Bar Graphs, Line Graphs)',
  'Algebra (basic)'
];

const resources = [
  { name: 'IndiaBix Quantitative', link: 'https://www.indiabix.com/aptitude/questions-and-answers/' },
  { name: 'PrepInsta Quant', link: 'https://prepinsta.com/quantitative-aptitude/' },
  { name: 'GeeksforGeeks Quant', link: 'https://www.geeksforgeeks.org/aptitude-questions-and-answers/' },
];

const Quantitative = () => {
  const mid = Math.ceil(quantitativeTopics.length / 2);
  const firstCol = quantitativeTopics.slice(0, mid);
  const secondCol = quantitativeTopics.slice(mid);

  return (
    <div className="quantitative-page">
      <h2>Quantitative Aptitude Topics</h2>
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

export default Quantitative;
