import React from 'react';
import './App.css';
import EmployeeInput from './components/Employee';
import AppIn from './components/product';
function App() {
  const handleFormData = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div>
      <AppIn></AppIn>
      <EmployeeInput></EmployeeInput>

    </div>
  );
}

export default App;
