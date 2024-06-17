import React from "react";

/**
 * El componente de Header reutilizable
 * @function
 * @param {object} props - Las props del componente
 * @param {string} props.title - El titulo del encabezado
 * @param {string} [props.subtitle] - El subtitulo opcional del encabezado
 * @returns {JSX.Element} - Retorna el componente de encabezado
 */

export const Header = ({ title, subtitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  );
};
