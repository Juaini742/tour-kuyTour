/* eslint-disable react/prop-types */
function Par(props) {
  const {children, className, variant} = props;

  let paragStyle = "";
  switch (variant) {
    case "p-12":
      paragStyle += "parag-12";
      break;
    case "p-15":
      paragStyle += "parag-15";
      break;
    default:
      paragStyle += "";
      break;
  }

  return <p className={`${paragStyle} ${className}`}>{children}</p>;
}

export default Par;
