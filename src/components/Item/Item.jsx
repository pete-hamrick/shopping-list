import React, { useState } from 'react';
import './Item.css';

export default function Item({ item, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);

  let itemContent;
  if (editing) {
    itemContent = (
      <>
        <input
          value={item.text}
          aria-label={`edit-field-${item.id}`}
          onChange={(e) => {
            onEdit({
              ...item,
              text: e.target.value,
            });
          }}
        />

        <button
          type="button"
          aria-label={`save-${item.id}`}
          onClick={() => setEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <button
          type="button"
          aria-label={`edit-${item.id}`}
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <article>
      <label
        htmlFor={item.id}
        style={{ textDecoration: item.done ? 'line-through' : null }}
      >
        <input
          type="checkbox"
          id={item.id}
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
      <button
        type="button"
        aria-label={`delete-${item.id}`}
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </article>
  );
}
