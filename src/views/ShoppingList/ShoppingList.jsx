import React, { useReducer } from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

const initialItems = [
  { id: 0, text: 'Cabbage', done: false },
  { id: 1, text: 'Carrot', done: false },
  { id: 2, text: 'Ginger', done: false },
  { id: 3, text: 'Onion', done: false },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'add': {
      // spread all of our items from state inside an array and add our new item to the array
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'edit': {
      // map over items, where id matches our itemId update the text
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'delete': {
      // return to state all but the item where the id matches our deleted id
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function ShoppingList() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  return (
    <section>
      <h1>Shopping List!</h1>
      <AddItem />
      <ItemList />
    </section>
  );
}
