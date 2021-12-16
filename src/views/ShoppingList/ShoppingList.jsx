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
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'delete': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function ShoppingList() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({
      type: 'add',
      id: items.length,
      text,
    });
  };

  const handleEdit = (task) => {
    dispatch({
      type: 'edit',
      task,
    });
  };

  const handleDelete = (taskId) => {
    dispatch({
      type: 'delete',
      id: taskId,
    });
  };

  return (
    <section>
      <h1>Shopping List!</h1>
      <AddItem />
      <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </section>
  );
}
