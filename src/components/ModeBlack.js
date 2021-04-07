import React from "react";
import PropTypes from "prop-types";

const ModeBlack = ({ botonTexto, botonCSS }) => {

  return (
    <>
      <button className={botonCSS}>{botonTexto}</button>
    </>
  );
};

ModeBlack.propTypes = {
  botonTexto: PropTypes.string,
};

export default ModeBlack;
