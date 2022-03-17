import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [output, setOutput] = useState('# put your test here');
  return (
    <section className="markdown">
      <textarea
        className="input"
        value={output}
        onChange={(e) => setOutput(e.target.value)}
      ></textarea>
      <aticle className="result">
        <ReactMarkdown>{output}</ReactMarkdown>
      </aticle>
    </section>
  );
}

export default App;
