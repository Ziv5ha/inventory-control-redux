import { configureStore } from '@reduxjs/toolkit';
import { inventoryReducer } from './reducers/inventoryReducer';
import { employeeReducer } from './reducers/employeeReducer';

export const store = configureStore({
  reducer: { inventory: inventoryReducer, employee: employeeReducer },
});
