import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';

const mainUrl = 'https://api.unsplash.com/photos/';
const clientID = '?client_id=d0tpcobMsA1H834tPpXg6IvfbJGlgmVzTDf51XHI37c';
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [newImage, setNewImage] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const fetchPhotos = async () => {
    setIsLoading(true);
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${searchInput}`;
    let url;
    if (searchInput) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    const resp = await fetch(url);
    const data = await resp.json();

    setPhotos((prevPhotos) => {
      if (page === 1 && searchInput) {
        return data.results;
      } else if (searchInput) {
        return [...prevPhotos, ...data.results];
      } else {
        return [...prevPhotos, ...data];
      }
    });
    setIsLoading(false);
    setNewImage(false);
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  // update page on scroll
  const getNewImages = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImage(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', getNewImages);
    return () => window.removeEventListener('scroll', getNewImages);
  }, []);

  useEffect(() => {
    if (!newImage) return;
    if (isLoading) return;
    setPage((prev) => prev + 1);
  }, [newImage]);

  // search
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return;
    if (page === 1) {
      fetchPhotos();
    }
    setPage(1);
  };

  return (
    <main>
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            placeholder="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo, index) => {
            return <Photo key={index} {...photo} />;
          })}
        </div>
        {isLoading && <h2 className="loading">loading...</h2>}
      </section>
    </main>
  );
}

export default App;
