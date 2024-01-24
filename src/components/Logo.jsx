/* eslint-disable react/prop-types */
function Logo({ onClick, className, spanClassName }) {
  return (
    <div>
      <h1 className={className} onClick={onClick}>
        <span className={spanClassName}>j</span>
        <span className={spanClassName}>a</span>
        <span className={spanClassName}>g</span>
        <span className={spanClassName}>g</span>
        <span className={spanClassName}>e</span>
        <span className={spanClassName}>r</span>
        <span className={spanClassName}>y</span>
      </h1>
    </div>
  );
}

export default Logo;
