/* eslint-disable react/prop-types */
function Button({ type, name, onClick, children}) {
  return (
    <button type={type} name={name} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;