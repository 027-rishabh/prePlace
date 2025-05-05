// src/AuthForm/DSATopics.js

import React from 'react';
import './DSATopics.css'; // Add the CSS file for styling

const DSATopics = () => {
  const topics = [
    'Arrays', 'Strings', 'Linked List (Singly, Doubly)', 'Stack', 'Queue (Normal, Circular, Deque)',
    'Recursion', 'Hashing', 'Sorting Algorithms (Quick, Merge, Bubble, etc.)', 'Searching Algorithms (Binary Search, Linear Search)',
    'Two Pointer Technique', 'Sliding Window Technique', 'Divide and Conquer', 'Greedy Algorithms', 'Dynamic Programming',
    'Bit Manipulation', 'Trees (Binary Tree, BST)', 'Tree Traversals (Inorder, Preorder, Postorder, Level Order)',
    'Heaps (Min Heap, Max Heap)', 'HashMap / HashSet', 'Graphs (BFS, DFS, Shortest Path - Dijkstra’s, Floyd-Warshall)',
    'Backtracking (N-Queens, Sudoku Solver)', 'Trie (Basic operations)'
  ];

  const resources = [
    { name: 'LoveBabbar DSA', link: 'https://www.youtube.com/watch?v=Qk7xgq5hzic' },
    { name: 'ApnaCollege DSA', link: 'https://www.youtube.com/watch?v=I4vZ6V_E-W4' },
    { name: 'Striver DSA', link: 'https://www.youtube.com/watch?v=V3RkFZH5M1w' },
    { name: 'Striver A2Z Sheet', link: 'https://takeuforward.org/courses/strivers-sde-sheet-top-50-coding-interview-questions/' }
  ];

  // Split topics into 2 equal columns
  const firstColumn = topics.slice(0, Math.ceil(topics.length / 2));
  const secondColumn = topics.slice(Math.ceil(topics.length / 2));

  return (
    <div className="dsa-topics">
      <h2>Learn DSA Topics</h2>
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

export default DSATopics;
