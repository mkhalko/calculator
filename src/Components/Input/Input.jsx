import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState(null);
  const handleChange = function (event) {
    setValue(event.target.value);
  };
  console.log(value)

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
export default Input;
