import "./index.css";

const Heading = ({ level, className = "", children }) => {
  if (level < 1 || level > 6) {
    throw new Error("The `level` prop must be between 1 and 6.");
  }
  
  const Tag = `h${level}`;
  return <Tag className={`heading heading-level-${level} ${className}`}>{children}</Tag>;
};

export default Heading;