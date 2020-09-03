import React from 'react';
import './like.css';

// Input: liked: boolean
// Output: onClick

const Like = ({ liked, movie, onClick }) => {
  const handleClick = () => {
    onClick(movie);
  };

  let classes = 'fa fa-heart';
  if (!liked) classes += '-o';

  return (
    <div className="Like">
      <i onClick={handleClick} className={classes}></i>
    </div>
  );
};

export default Like;
