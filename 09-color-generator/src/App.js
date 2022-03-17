import React, { useState, useEffect } from 'react';
// import SingleColor from './SingleColor';
import Values from 'values.js';
//
import rgbToHex from './utils';

function App() {
  const [colorHexCode, setColorHexCode] = useState('');
  const [allHexColors, setAllHexColors] = useState([]);
  const [userColor, setUserColor] = useState('#dc2626');
  const [isAlertDisplay, setIsAlertDisplay] = useState(false);
  const [clipboardVal, setClipBoardVal] = useState('');
  const [isError, setIsError] = useState(false);
  const [length, setLength] = useState(1);

  const color = new Values(userColor);
  const allColors = color.all(length).map((color) => {
    return { color: rgbToHex(...color.rgb), weight: color.weight };
  });

  useEffect(() => {
    setAllHexColors(allColors);
  }, [userColor, length]);

  const generateColors = (e) => {
    e.preventDefault();

    let reg = /^#([0-9a-f]{3}){1,2}$/i;
    if (reg.test(colorHexCode)) {
      setUserColor(colorHexCode);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  // copy color to clipboard
  const copyColor = (color) => {
    setClipBoardVal(color);
    const copyColor = color;
    navigator.clipboard.writeText(copyColor).then(() => {
      setIsAlertDisplay(true);
      // setTimeout(() => setIsAlertDisplay(false), 2000);
    });
  };

  useEffect(() => {
    const timeDisplay = setTimeout(() => setIsAlertDisplay(false), 2000);
    return () => clearTimeout(timeDisplay);
  }, [clipboardVal]);

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <input
          className={isError ? 'error' : ''}
          type="text"
          placeholder="#dc2626"
          value={colorHexCode}
          name="color"
          onChange={(e) => setColorHexCode(e.target.value)}
        />
        <button type="submit" className="btn" onClick={generateColors}>
          generate
        </button>
        <input
          style={{ width: '90px', marginLeft: '5rem' }}
          type="number"
          value={length}
          name="length"
          onChange={(e) => setLength(e.target.value)}
          min="1"
          max="100"
        />
      </section>
      <section className="colors">
        {allHexColors.map(({ color, weight }, index) => {
          return (
            <article
              onClick={() => copyColor(color)}
              key={index}
              className={`color ${index > 10 && 'color-light'}`}
              style={{ background: color }}
            >
              <p className="percent-value">{weight}%</p>
              <p className="color-value">{color}</p>
              {isAlertDisplay && color === clipboardVal && (
                <p className="alert">copied to clipboard</p>
              )}
            </article>
          );
        })}
      </section>
    </>
  );
}

export default App;
