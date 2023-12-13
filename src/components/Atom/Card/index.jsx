/* eslint-disable react/prop-types */
function Card(props) {
  const { className, variant, children } = props;

  let cardStyle = "";

  switch (variant) {
    case "grid-1-2":
      cardStyle += "grid-1-2";
      break;
    case "grid-2-4":
      cardStyle += "grid-2-4";
      break;
    case "grid-2-6":
      cardStyle += "grid-2-6";
      break;
    default:
      cardStyle += "";
      break;
  }

  return <div className={`${cardStyle} ${className}`}>{children}</div>;
}

export default Card;
