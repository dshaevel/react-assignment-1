import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  const inputStyle = {
    border: '2px solid red',
    padding: '5px'
  };

  return (
    <div className="UserInput">
      <label>User Input: </label>
      <input
        type="text"
        style={inputStyle}
        onChange={props.changed}
        value={props.currentName} />
    </div>
  );
}

export default userInput;