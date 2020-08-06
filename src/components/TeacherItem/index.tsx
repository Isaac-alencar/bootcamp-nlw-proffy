import React from "react";

import api from "../../services/api";

import whatsappIcon from "../../assets/icons/whatsapp.svg";

import { Container } from "./styles";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  data: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ data }) => {
  async function createNewConnection() {
    api.post("connections", {
      user_id: data.id,
    });
  }
  return (
    <Container>
      <header>
        <img src={data.avatar} alt="Avatar" />
        <div>
          <strong>{data.name}</strong>
          <span>{data.subject}</span>
        </div>
      </header>
      <p>{data.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {data.cost}</strong>
        </p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://wa.me/55${data.whatsapp}`}
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Enrtar em contato
        </a>
      </footer>
    </Container>
  );
};

export default TeacherItem;
