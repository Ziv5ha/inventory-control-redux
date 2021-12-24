import React from 'react';
import { useSelector } from 'react-redux';
import InventoryTable from './InventoryTable';
import NewItemForm from './NewItemForm';
import '../styles/inventory.css';

export default function InventoryForm() {
  return (
    <div className='inventory-management'>
      <InventoryTable />
      <NewItemForm />
    </div>
  );
}
