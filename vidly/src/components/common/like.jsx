import React, { Component } from 'react';

// Input: liked: boolean
// Output: onClick

const Like = ({ liked, movie, onClick }) => {
  const handleClick = () => {
    onClick(movie);
  };

  let classes = 'fa fa-heart';
  if (!liked) classes += '-o';

  return (
    <i
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      className={classes}
    ></i>
  );
};

export default Like;
