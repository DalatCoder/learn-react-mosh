import React from 'react';

const Posts = ({ match: { params } }) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {params.year} , Month: {params.month}
    </div>
  );
};

export default Posts;
