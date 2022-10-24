import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Modal from '../UI/Modal';

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      setEnteredName('');
      setEnteredAge('');
      return;
    }

    // + in front of enteredAge variable ensures that it will be converted to a number instead of it being a string as default
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      setEnteredAge('');
      return;
    }

    if (enteredPassword.trim().length < 6) {
      setError({
        title: 'Invalid password!',
        message: 'Make sure password is atleast 6 characters long.',
      });
      setEnteredPassword('');
      return;
    }

    const enteredData = {
      name: enteredName,
      age: enteredAge,
      password: enteredPassword,
    };
    props.onSaveUserData(enteredData);
    setEnteredName('');
    setEnteredAge('');
    setEnteredPassword('');
  };

  return (
    <div>
      {error && (
        <Modal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <div className="my-10">
        <Card>
          <form className="py-6 px-10" onSubmit={formSubmitHandler}>
            <div className="flex flex-col">
              <label className="font-bold text-2xl mb-1">Username:</label>
              <input
                placeholder="Enter your username"
                type="text"
                onChange={nameChangeHandler}
                value={enteredName}
                className="border border-slate-400 rounded-lg py-2 px-2"
              ></input>
            </div>
            <div className="flex flex-col mt-4">
              <label className="font-bold text-2xl mb-1">Age(years):</label>
              <input
                placeholder="Enter your age"
                type="number"
                step="1"
                onChange={ageChangeHandler}
                value={enteredAge}
                className="border border-slate-400 rounded-lg py-2 px-2"
              ></input>
            </div>
            <div className="flex flex-col mt-4">
              <label className="font-bold text-2xl mb-1">Password:</label>
              <input
                placeholder="••••••••"
                type="password"
                onChange={passwordChangeHandler}
                value={enteredPassword}
                className="border border-slate-400 rounded-lg py-2 px-2"
              ></input>
            </div>
            <div className="flex justify-center mt-6">
              <Button type="submit">Add User</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default UserForm;
