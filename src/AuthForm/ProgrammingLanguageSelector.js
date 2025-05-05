import React, { useState } from 'react';

function ProgrammingLanguageSelector() {
  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* First Button */}
      <button onClick={() => setShowLanguages(true)}>
        Programming Language
      </button>

      {/* Show heading and language buttons after click */}
      {showLanguages && (
        <div style={{ marginTop: '20px' }}>
          <h2>LEARN AT LEAST ONE PROGRAMMING LANGUAGE</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
            <button>C++</button>
            <button>JAVA</button>
            <button>PYTHON</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgrammingLanguageSelector;
