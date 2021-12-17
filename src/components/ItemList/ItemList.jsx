import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export default function ItemList({ items, onEdit, onDelete }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <Item item={item} onEdit={onEdit} onDelete={onDelete} />
        </div>
      ))}
    </>
  );
}
