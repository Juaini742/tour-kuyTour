/* eslint-disable react/prop-types */
function Hed1(props) {
  const {variant, className, children} = props;

  let hedStyle = "";
  switch (variant) {
    case "sm-title":
      hedStyle += "sm-title";
      break;
    case "md-title":
      hedStyle += "md-title";
      break;
    case "lg-title":
      hedStyle += "lg-title";
      break;
    default:
      hedStyle += "";
      break;
  }

  return <div className={`${hedStyle} ${className}`}>{children}</div>;
}

export default Hed1;
