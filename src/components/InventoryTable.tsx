import React from 'react';
import { useSelector } from 'react-redux';
import ItemRow from './ItemRow';

export default function InventoryTable() {
  const inventory = useSelector((state: RootState) => state.inventory);

  const ItemsJSX = inventory.map((item: ReduxTypes.InventoryState) => (
    <ItemRow item={item} />
  ));
  return (
    <table>
      <thead>
        <th>Item</th>
        <th>Full Quantity</th>
        <th>Current</th>
        <th>Missing</th>
      </thead>
      <tbody>{ItemsJSX}</tbody>
    </table>
  );
}
