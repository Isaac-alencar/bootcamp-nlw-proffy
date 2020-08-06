import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

/**
 * Como definimos um input para ser mais genêrico, precisamos que
 * todas as propriedades que um input normalmente receberia, possam
 * ser passadas ao component Input. Portanto, defini-se a interface
 * com as propriedades desejáveis e fazemos ela extender o
 * InputHTMLAttributes<HTMLInputElement>
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...atributtes }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...atributtes} />
    </Container>
  );
};

export default Input;
