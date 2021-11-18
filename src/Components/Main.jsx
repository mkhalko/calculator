import Calculate from "./Calculate/Calculate";
import Input from "./Input/Input";
import Result from "./Result/Result";
import Delete from "./Delete/Delete";
import { useState } from "react";
const Main = () => {
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div>
      <Input onChange={setInput1}></Input>
      <Calculate inputfirst={input1} inputsecond={input2} kacsa={setResult}></Calculate>
      <Input onChange={setInput2}></Input>
      <Result></Result>
      <Delete></Delete>
    </div>
  );
};
export default Main;
