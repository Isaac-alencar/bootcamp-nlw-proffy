import React, { TextareaHTMLAttributes } from "react";

import { Container } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextAreaProps> = ({ label, name, ...atributtes }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...atributtes} />
    </Container>
  );
};

export default Textarea;
