import React, { useEffect, useState, useCallback } from 'react';
import Loading from '../components/Loading';
import Error from './Error';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getDrink = useCallback(async () => {
    const resp = await fetch(`${url}${id}`);
    const { drinks } = await resp.json();
    if (drinks) {
      const newCocktail = drinks.map((drink) => {
        const {
          strDrink,
          strCategory,
          strAlcoholic,
          strGlass,
          strInstructions,
          strDrinkThumb,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drink;
        return {
          name: strDrink,
          category: strCategory,
          info: strAlcoholic,
          glass: strGlass,
          instruction: strInstructions,
          image: strDrinkThumb,
          ingridents: [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ],
        };
      });

      setCocktail(newCocktail[0]);
      setIsLoading(false);
    } else {
      setCocktail({});
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getDrink();
  }, [id, getDrink]);

  if (isLoading) {
    return <Loading />;
  }

  const { name, category, info, glass, instruction, image, ingridents } =
    cocktail;

  if (Object.keys(cocktail).length === 0) {
    return <Error />;
  }

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instruction}
          </p>
          <p>
            <span className="drink-data">Ingredients :</span>
            {ingridents &&
              ingridents.map((ingrident, index) => {
                return <span key={index}>{ingrident}</span>;
              })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
