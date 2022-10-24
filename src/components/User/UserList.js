import React from 'react';
import Card from '../UI/Card';
import User from './User';

const UserList = (props) => {
  let userContent = (
    <p className="font-bold font-mono text-center text-lg">
      No users found! Maybe add one?
    </p>
  );

  if (props.users.length > 0) {
    userContent = props.users.map((userData) => (
      <User
        key={userData.id}
        name={userData.name}
        age={userData.age}
        password={userData.password}
      />
    ));
  }

  return (
    <Card>
      <ul className="text-2xl font-semibold font-mono py-6 px-10">
        Users:
        <li key={props.id} className="text-2xl font-bold py-6">
          {userContent}
        </li>
      </ul>
    </Card>
  );
};

export default UserList;
