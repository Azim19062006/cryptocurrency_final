import "./index.css";

function Typography(props) {
  const { textSize = "md", className = "", children } = props;

  const classNames = `typography typography--${textSize} ${className}`.trim();

  return <p className={classNames}>{children}</p>;
}

export default Typography;