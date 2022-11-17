import PropTypes from "prop-types";

export default function Header({ title }) {
  return <header className="title">{title}</header>;
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};