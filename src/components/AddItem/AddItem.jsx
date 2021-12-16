import React, { useState } from 'react';

export default function AddItem({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newItem">New Item</label>
      <input
        type="text"
        id="newItem"
        placeholder="New Item..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" aria-label="Add New Item">
        Add Item
      </button>
    </form>
  );
}
