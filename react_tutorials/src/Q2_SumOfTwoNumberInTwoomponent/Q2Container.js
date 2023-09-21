import { useState } from "react";
import ButtonPart from "./ButtonPart";
import InputAndOutputPart from "./InputAndOutputPart";

export default function Q2Container() {
  //since variables and button events are in sperate parts so we req common parent Q2Contianer
  //put all varaible and click event in parent and pass down as props in two parts

  const [state, setState] = useState({ num1: "", num2: "", sum: "" });

  // Keep track of changes in input boxes (common function) use in InputAndOutputPart
  //pass this function as props
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  //this is click event which will use by ButtonPart, i.e pass this func as props
  const handleSubmit = (e) => {
    console.log("b call");
    const sum = parseInt(state.num1) + parseInt(state.num2);
    setState({ ...state, sum: sum });
  };
  return (
    <>
    
      <InputAndOutputPart values={state} handleChange={handleChange}/>
      <ButtonPart  onClick={handleSubmit}/>
    </>
  );
}
