import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { titulo } = props;
  return <h1>{titulo}</h1>;
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
