import React, { useState } from 'react';

export default function SumOfTwoNumber() {
  // Initialize variables in state object
  const [state, setState] = useState({ num1: '', num2: '', sum: '' });

  // Keep track of changes in input boxes (common function)
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const sum = parseInt(state.num1) + parseInt(state.num2);
    setState({ ...state, sum: sum });
  };

  return (
    <div>
      <h1>Sum of Two Numbers Within Component</h1>
      <form onSubmit={handleSubmit}>
        Value 1
        <input type="text" name="num1" value={state.num1} onChange={handleChange} /><br/>
        Value 2
        <input type="text" name="num2" value={state.num2} onChange={handleChange} /><br/>
        Result
        <input type="text" name="sum" value={state.sum} onChange={handleChange} /><br/>
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}
