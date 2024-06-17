import React from "react";
import PropTypes from "prop-types";

export default function ComponentBasic({ texto }) {
  return <div>{texto}</div>;
}

ComponentBasic.propTypes = {
  texto: PropTypes.string,
};
