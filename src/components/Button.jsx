/* eslint-disable react/prop-types */
function Button({ type, name, onClick, children, className}) {
  return (
    <button type={type} name={name} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;