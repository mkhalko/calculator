import Calculate from "./Calculate/Calculate";
import Input from "./Input/Input";
import Result from "./Result/Result";
import Delete from "./Delete/Delete";
import { useState } from "react";
const Main = () => {
  const [input1, setInput1] = useState(null);
  console.log(input1);
  return (
    <div>
      <Input onChange={setInput1}></Input>
      <Calculate></Calculate>
      <Input></Input>
      <Result></Result>
      <Delete></Delete>
    </div>
  );
};
export default Main;
