import PropTypes from "prop-types";

function Button({ onClick, children, type }) {
  const style = {
    primary: "bg-button-primary text-white",
    secondary: "bg-button-secondary text-white",
    danger: "bg-button-danger text-white",
  };
  return (
    <button
      className={`rounded-lg w-fit max-w-xl px-5 py-2 text-xl hover:opacity-90 active:scale-95 ${style[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired, // El contenido dentro del botón puede ser cualquier cosa renderizable
  type: PropTypes.oneOf(["primary", "secondary", "danger"]).isRequired, // type debe ser uno de estos tres valores
};

export default Button;
