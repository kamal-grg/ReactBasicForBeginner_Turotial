import React from 'react';

export default function InputAndOutputPart(props) {
  
  return (
    <div>
      <h1>Input Output in Two Part IO-P</h1>
      
        Value 1
        <input type="text" name="num1" value={props.values.num1} onChange={props.handleChange} /><br/>
        Value 2
        <input type="text" name="num2" value={props.values.num2} onChange={props.handleChange} /><br/>
        Result
        <input type="text" name="sum" value={props.values.sum} onChange={props.handleChange} /><br/>
        
     
    </div>
  );
}
