import logo from "./logo.svg";
import "./App.css";
import SumOfTwoNumber from "./Q1_SumOfTwoNumberInOneComponen/SumOfTwoNumber";
import Q2Container from "./Q2_SumOfTwoNumberInTwoomponent/Q2Container";
import Q3Container from "./Q3_SumOfTwoNumberInThreeParts/Q3Container";
import TodoContainer from "./Q4_TodoList/TodoContainer";
import Q5Container from "./Q5_SearchBoxAndFilterData/Q5Container";

function App() {
  return (
    <div className="App">
      <div>
        <SumOfTwoNumber />
      </div>
      <hr />
      <div>
        <Q2Container/>
      </div>
      <hr/>
      <div>
        <Q3Container />
      </div>
      <hr/>
      <div>
        <TodoContainer />
      </div>
      <hr/>
      <div>
        <Q5Container />
      </div>
      <hr/>
    </div>
  );
}

export default App;
