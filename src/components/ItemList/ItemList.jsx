import React from 'react';
import Item from '../Item/Item';

const initialList = ['Cabbage', 'Carrot', 'Ginger', 'Onion'];

export default function ItemList() {
  return (
    <div>
      <h2>Hello from the list</h2>
      {initialList.map((item) => (
        <div key={item}>
          <Item value={item} />
        </div>
      ))}
    </div>
  );
}
