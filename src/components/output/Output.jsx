import React from 'react';
import { useSelector } from 'react-redux';

const Output = () => {
  const searchedName = useSelector(state => state.searchedUserName);
  const followerCount = useSelector(state => state.followerCount);
  const followingCount = useSelector(state => state.followingCount);
  const linkUrl = useSelector(state => state.linkUrl);

  return (
    <>
      <h3>Github User Information</h3>
      <h5>Name: <span>{searchedName}</span></h5>
      <h5>Followers: <span>{followerCount}</span></h5>
      <h5>Following: <span>{followingCount}</span></h5>
      <a href={linkUrl}>{linkUrl}</a>
    </>
  );
};

export default Output;
