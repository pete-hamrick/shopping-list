import React from 'react'
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/ItemList/ItemList';

export default function ShoppingList() {
  return (
    <section>
      <h1>Shopping List!</h1>
      <AddItem />
      <ItemList />
    </section>
  )
}
