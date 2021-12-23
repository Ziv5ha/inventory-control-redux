import React from 'react';
import { useSelector } from 'react-redux';
import EmployeeForm from './components/EmployeeForm';
import InventoryForm from './components/InventoryForm';

function App() {
  const employee = useSelector((state: RootState) => state.employeeReducer);
  return (
    <div className='App'>
      {employee.fullName ? <InventoryForm /> : <EmployeeForm />}
    </div>
  );
}

export default App;
