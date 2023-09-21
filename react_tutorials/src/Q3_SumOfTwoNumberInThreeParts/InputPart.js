import React from 'react';

export default function InputAndOutputPart(props) {
  
  return (
    <div>
      <h1>Input Output Three Part I-O-P</h1>
      
        Value 1
        <input type="text" name="num1" value={props.values.num1} onChange={props.onChange} /><br/>
        Value 2
        <input type="text" name="num2" value={props.values.num2} onChange={props.onChange} /><br/>
        
     
    </div>
  );
}
