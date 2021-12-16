import React from 'react'

export default function AddItem() {
  return (
    <form /* TODO need onSubmit */ >
      <label htmlFor='newItem'>New Item</label>
      <input type='text' id='newItem' placeholder='New Item...' /* TODO need onChange and value */ />

      <button type='submit' aria-label='Add New Item'>Add Item</button>
    </form>
  )
}
