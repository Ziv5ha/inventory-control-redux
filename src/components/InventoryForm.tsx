import React from 'react';
import { useSelector } from 'react-redux';
import InventoryTable from './InventoryTable';
import NewItemForm from './NewItemForm';

export default function InventoryForm() {
  return (
    <div>
      <InventoryTable />
      <NewItemForm />
    </div>
  );
}
