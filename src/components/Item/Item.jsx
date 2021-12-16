import React from 'react';

export default function Item({ value }) {
  return (
    <>
      <label htmlFor={value}>
        <input type="checkbox" id={value} name={value} value={value} />
        {value}
      </label>

      <button>Edit</button>
      <button>Delete</button>
    </>
  );
}
