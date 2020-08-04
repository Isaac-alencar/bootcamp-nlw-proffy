import React from "react";

import whatsappIcon from "../../assets/icons/whatsapp.svg";

import { Container } from "./styles";

interface TeacherItemProps {
  avatar: string;
  subject: string;
  name: string;
  price: string;
  detail: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <Container>
      <header>
        <img src={props.avatar} alt="Avatar" />
        <div>
          <strong>{props.name}</strong>
          <span>{props.subject}</span>
        </div>
      </header>
      <p>{props.detail}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {props.price}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Enrtar em contato
        </button>
      </footer>
    </Container>
  );
};

export default TeacherItem;
