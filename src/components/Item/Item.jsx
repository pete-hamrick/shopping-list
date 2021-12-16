import React, { useState } from 'react';

export default function Item({ item, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);

  let itemContent;
  if (editing) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            onEdit({
              ...item,
              text: e.target.value,
            });
          }}
        />

        <button type="button" onClick={() => setEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <button type="button" onClick={() => setEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      <label
        htmlFor={item}
        style={{ textDecoration: item.done ? 'line-through' : null }}
      >
        <input
          type="checkbox"
          id={item}
          checked={item.done}
          onChange={(e) => {
            onEdit({
              ...item,
              done: e.target.checked,
            });
          }}
        />
        {item.text}
      </label>
      {itemContent}
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </>
  );
}
