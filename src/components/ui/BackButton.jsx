import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BackButton({ href }) {
  return (
    <Link
      to={href}
      className="w-10 h-10 m-5 fixed z-50 rounded-full bg-[#65558F] shadow-lg flex items-center justify-center hover:opacity-90 active:scale-95"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </Link>
  );
}

BackButton.propTypes = {
  href: PropTypes.string.isRequired,
};

export default BackButton;
