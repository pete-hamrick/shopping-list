import React from 'react';

export default function Item({ item, onEdit, onDelete }) {
  return (
    <>
      <label htmlFor={item}>
        <input
          type="checkbox"
          id={item}
          checked={item.done} /* need onChange for being checked */
        />
        {item.text}
      </label>

      <button type="button">Edit</button>
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </>
  );
}
