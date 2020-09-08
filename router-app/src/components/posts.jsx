import React from 'react';
import queryString from 'query-string';

const Posts = ({ match: { params }, location: { search } }) => {
  const result = queryString.parse(search);
  console.log(result);

  return (
    <div>
      <h1>Posts</h1>
      Year: {params.year} , Month: {params.month}
    </div>
  );
};

export default Posts;
