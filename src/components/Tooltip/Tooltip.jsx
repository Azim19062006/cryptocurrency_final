import "./Tooltip.css";

function Tooltip(props) {
  const { text, position = "top", children } = props;

  return (
    <div className="tooltip-container">
      {children}
      <span className={`tooltip tooltip--${position}`}>{text}</span>
    </div>
  );
}

export default Tooltip;