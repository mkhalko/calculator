const Calculate = (props) => {
  const x = parseInt(props.inputfirst);
  const y = parseInt(props.inputsecond);
  

  function handleMultiple() {
    props.kacsa(x * y);
  }
  function handleDivide() {
   props.kacsa(x / y);
  }
  function handleAdd() {
   props.kacsa(x + y);
  }
  function handleMinus() {
   props.kacsa(x - y);
  }

  return (
    <div>
      <button type="button" onClick={handleMultiple}>
        *
      </button>
      <button type="button" onClick={handleDivide}>
        /
      </button>
      <button type="button" onClick={handleAdd}>
        +
      </button>
      <button type="button" onClick={handleMinus}>
        -
      </button>
      <p>{}</p>
    </div>
  );
};
export default Calculate;
