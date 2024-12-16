import "./index.css";

function Button(props){
    const {size = "md", variant = "primary", children, onClick, disabled, type = "button" } = props
    const className = `update-button update-button--${variant} update-button--${size} ${disabled ? "update-button--disabled" : ""}`;
    return (

        <button className = {className} onClick={onClick} disabled={disabled} type={type}>{children}</button>
    )
}

export default Button;