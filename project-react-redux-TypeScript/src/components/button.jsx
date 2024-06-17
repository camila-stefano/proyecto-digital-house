import React from "react";

/**
 * Componente de boton reutilizable
 * @function
 * @param {object} props - Las props para el componente
 * @param {React.ReactNode} props.children - Contenido interno que va en las tags de button
 * @returns {JSX.Element}
 */

export const Button = ({ children }) => {
  return <button>{children}</button>;
};
