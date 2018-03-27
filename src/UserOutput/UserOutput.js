import React from 'react';
import './UserOutput.css';
 
const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <h3>Hello, {props.username}</h3>
      <p>This is the first paragraph.</p>
      <p>This is the second paragraph.</p>
    </div>
  );
};

export default userOutput;