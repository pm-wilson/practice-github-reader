import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchUserData, setUserName, setUserInformation } from '../../actions/jsonActions';

const Input = () => {
  const user = useSelector(state => state.userName);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setUserName(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchUser(user));
  };

  return (
    <>
      <h1>Github Viewer</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input value={user} onChange={handleChange}></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Input;
