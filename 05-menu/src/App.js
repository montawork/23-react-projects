import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [recipes, setRecipes] = useState(items);

  let allCategories = ['all'];
  items.forEach((item) => {
    allCategories.push(item.category);
  });

  allCategories = [...new Set(allCategories)];

  const filterMenu = (category) => {
    const filtredRecipes = items.filter(
      (recipe) => recipe.category === category
    );
    if (category === 'all') {
      setRecipes(items);
    } else {
      setRecipes(filtredRecipes);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {allCategories.map((category, index) => {
            return (
              <Categories
                key={index}
                category={category}
                filterMenu={filterMenu}
              />
            );
          })}
        </div>
        <div className="section-center">
          {recipes.map((recipe) => {
            return <Menu key={recipe.id} {...recipe} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
