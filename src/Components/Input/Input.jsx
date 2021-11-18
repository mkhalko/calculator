

const Input = (props) => {
  
  const handleChange = function (event) {
    props.onChange(event.target.value);
    
  };
  

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
export default Input;
