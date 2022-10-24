import React, { useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import UserList from './components/User/UserList';

const USERS = [];

const App = (props) => {
  const [user, setUser] = useState(USERS);

  const addUserHandler = (user) => {
    setUser((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <UserList users={user} />
    </div>
  );
};

export default App;
