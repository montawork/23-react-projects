import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ list, deleteItem, editItem, clearAll }) => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {list.map(({ item, id }) => {
          return (
            <article key={id} className="grocery-item">
              <p className="title">{item}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => deleteItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      {list.length > 0 && (
        <button className="clear-btn" onClick={clearAll}>
          clear items
        </button>
      )}
    </div>
  );
};

export default List;
