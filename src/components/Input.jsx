/* eslint-disable react/prop-types */
function Input({ type, name, value, onChange, placeholder, className }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default Input;
