import React, { useState, useEffect } from 'react';
import List from './List';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('groceryList')) || []
  );
  const [isEdit, setIsEdit] = useState(false);
  const [tempID, setTempID] = useState('');
  const [alert, setAlert] = useState({ msg: '', display: false, type: '' });

  // add to localStorage
  useEffect(() => {
    localStorage.setItem('groceryList', JSON.stringify(list));
  }, [item, list]);

  // create new item
  const addItem = (e) => {
    e.preventDefault();
    if (item) {
      if (!isEdit) {
        setList([...list, { item, id: new Date().getTime().toString() }]);
        setItem('');
        setAlert({ msg: 'item added', display: true, type: 'success' });
      }
      if (isEdit) {
        const newList = list.map((el) => {
          return el.id === tempID ? { ...el, item } : el;
        });
        setList(newList);
        setIsEdit(false);
        setItem('');
        setTempID('');
        setAlert({ msg: 'item change', display: true, type: 'success' });
      }
    } else {
      setAlert({
        msg: 'please enter a valid value',
        display: true,
        type: 'danger',
      });
    }
  };

  // delete item
  const deleteItem = (id) => {
    setAlert({ msg: 'item removed', display: true, type: 'danger' });
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    localStorage.setItem('groceryList', JSON.stringify(newList));
    if (isEdit) {
      setIsEdit(false);
      setItem('');
    }
  };

  // modify item
  const editItem = (id) => {
    setIsEdit(true);
    const targetItem = list.find((item) => item.id === id);
    setItem(targetItem.item);
    setTempID(id);
  };

  // empty list
  const clearAll = () => {
    setAlert({ msg: 'list empty', display: true, type: 'danger' });
    setList([]);
    localStorage.removeItem('groceryList');
  };

  // reset alert
  useEffect(() => {
    const timeout = setTimeout(
      () => setAlert({ msg: '', display: false, type: '' }),
      2000
    );
    return () => clearTimeout(timeout);
  }, [alert]);

  const { msg, display, type } = alert;
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={addItem}>
        {display && <p className={`alert alert-${type}`}>{msg}</p>}
        <h3>happy grocery</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. banana"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="submit-btn">{!isEdit ? 'submit' : 'edit'}</button>
        </div>
      </form>
      <List
        list={list}
        deleteItem={deleteItem}
        editItem={editItem}
        clearAll={clearAll}
      />
    </section>
  );
}

export default App;
