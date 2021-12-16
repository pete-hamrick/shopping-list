import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingList from './ShoppingList';

beforeEach(() => {
  render(<ShoppingList />);
});

it('should render the shopping list like intended', () => {
  const newItemLabel = screen.getByLabelText('New Item');
  const submitButton = screen.getByRole('button', { name: 'Add New Item' });

  screen.debug();
  expect(newItemLabel).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

// TODO adding to list
it('should add a new item and display the added item', async () => {
  const itemInput = screen.getByLabelText('New Item');
  const submitButton = screen.getByRole('button', { name: 'Add New Item' });

  userEvent.type(itemInput, 'Ginger');
  userEvent.click(submitButton);

  await screen.findByText('Ginger');
});
// TODO editing a list item
// TODO deleting a list item
// TODO displaying the items of the list
