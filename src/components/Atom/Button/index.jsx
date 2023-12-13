/* eslint-disable react/prop-types */
function Button(props) {
  const { variant, type, onClick, className, children } = props;

  let butonStyle = "";

  switch (variant) {
    case "primary":
      butonStyle += "btn-primary";
      break;
    case "outline-primary":
      butonStyle += "btn-outline-primary";
      break;
    default:
      butonStyle += "";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${butonStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
