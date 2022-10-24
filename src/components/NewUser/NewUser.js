import React from 'react';
import UserForm from './UserForm';

const NewUser = (props) => {
  const saveUserHandler = (enteredUserData) => {
    const userData = { ...enteredUserData, id: Math.random() };
    props.onAddUser(userData);
  };
  return <UserForm onSaveUserData={saveUserHandler} />;
};

export default NewUser;
