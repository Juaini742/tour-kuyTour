/* eslint-disable react/prop-types */
function Container(props) {
  const { className, children } = props;

  return <div className={`container ${className}`}>{children}</div>;
}

export default Container;
