import { useState } from "react";
import ButtonPart from "./ButtonPart";
import InputPart from "./InputPart";
import OutputPart from "./OutputPart";

export default function Q3Container() {
  //since I P O are sperated so common parent Q3Contianer req
  //put all varaible and click event in parent and pass down as props in three parts

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
    <InputPart values={{ num1: state.num1, num2: state.num2 }} onChange={handleChange}/>
    <OutputPart values={{sum:state.sum}}  onChange={handleChange}/>
    <ButtonPart onClick={handleSubmit}/>
     
    </>
  );
}
