//import { FC } from "react";

//interface Props {
//  text: string;
//  onClick: () => void;
//}

//export const Button: FC<Props> = ({ text, onClick }) => {
//  return <button onClick={onClick}>{text}</button>;
//};

export const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return <button onClick={onClick}>{text}</button>;
};
