import { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState(null);
  const handleChange = function (event) {
    props.onChange(event.target.value);
    setValue(event.target.value);
  };
  console.log(props);

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
export default Input;
