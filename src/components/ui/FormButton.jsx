import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FormButton({ children, href }) {
  return (
    <Link
      className="rounded-lg w-fit max-w-xl px-5 py-2 text-xl hover:opacity-90 active:scale-95 text-center bg-white text-black shadow-lg font-semibold"
      to={href}
    >
      {children}
    </Link>
  );
}

FormButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormButton;
