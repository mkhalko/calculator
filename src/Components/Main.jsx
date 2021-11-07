import Calculate from "./Calculate/Calculate";
import Input from "./Input/Input";
import Result from "./Result/Result";
import Delete from "./Delete/Delete";
const Main = () => {
  return (
    <div>
      <Input></Input>
      <Calculate></Calculate>
      <Input></Input>
      <Result></Result>
      <Delete></Delete>
    </div>
  );
};
export default Main;
