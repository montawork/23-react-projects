import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          className="btn"
          onClick={() => (people.length > 0 ? setPeople([]) : setPeople(data))}
        >
          {people.length > 0 ? 'clear all' : 'load data'}
        </button>
      </section>
    </main>
  );
}

export default App;
