import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LinkButton({ children, type, href }) {
  const style = {
    primary: "bg-button-primary text-white",
    secondary: "bg-button-secondary text-white",
    danger: "bg-button-danger text-white",
  };
  return (
    <Link
      className={`rounded-lg w-fit max-w-xl  px-5 py-2 text-xl hover:opacity-90 active:scale-95 text-center ${style[type]}`}
      to={href}
    >
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]).isRequired,
};

export default LinkButton;
