import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light-theme'
  );
  // const htmlEl = document.querySelector('html');
  // htmlEl.classList = '';
  // htmlEl.classList.add(theme);

  const toggleDarkMode = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>
          <button className="btn" onClick={toggleDarkMode}>
            {theme === 'light-theme' ? 'go to the dark side' : 'normal mode'}
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </section>
    </main>
  );
}

export default App;
