/* eslint-disable react/prop-types */
function CardBody(props) {
  const { variant, className, children } = props;

  let cardStyle = "";

  switch (variant) {
    case "md-card":
      cardStyle += "card-md";
      break;
    case "lg-card":
      cardStyle += "card-lg";
      break;
    default:
      cardStyle += "";
      break;
  }

  return <div className={`${cardStyle} ${className}`}>{children}</div>;
}

export default CardBody;
