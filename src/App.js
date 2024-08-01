import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import { useState } from 'react';

const sampleEmployee = {
  name: {
    first: 'John',
    last: 'Doe',
  },
  email: 'john.doe@example.com',
  picture: {
    large: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    axios.get('https://randomuser.me/api?nat=en').then((response) => {
      console.log(response.data);
      setEmployee(response.data.results[0]);
    });
  };
  return (
    <div className="App">
      <UserCard
        image={employee.picture.large}
        firstname={employee.name.first}
        lastname={employee.name.last}
        email={employee.email}
      />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}
export default App;
