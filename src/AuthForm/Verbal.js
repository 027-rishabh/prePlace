import React from 'react';
import './Verbal.css';

const verbalTopics = [
  'Reading Comprehension', 'Synonyms and Antonyms', 'Spotting Errors', 'Sentence Improvement', 'Sentence Completion',
  'Fill in the Blanks', 'Para Jumbles (Sentence Rearrangement)', 'Cloze Test', 'Active and Passive Voice', 'Direct and Indirect Speech',
  'One Word Substitution', 'Idioms and Phrases', 'Vocabulary (Word Meanings, Usage)', 'Subject-Verb Agreement',
  'Articles, Prepositions, Conjunctions', 'Tenses', 'Sentence Correction', 'Analogies'
];

const resources = [
  { name: 'IndiaBix Verbal Ability', link: 'https://www.indiabix.com/verbal-ability/questions-and-answers/' },
  { name: 'PrepInsta Verbal', link: 'https://prepinsta.com/verbal-ability/' },
  { name: 'GeeksforGeeks Verbal', link: 'https://www.geeksforgeeks.org/verbal-ability/' },
];

const Verbal = () => {
  const mid = Math.ceil(verbalTopics.length / 2);
  const firstCol = verbalTopics.slice(0, mid);
  const secondCol = verbalTopics.slice(mid);

  return (
    <div className="verbal-page">
      <h2>Verbal Ability Topics</h2>
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

export default Verbal;
