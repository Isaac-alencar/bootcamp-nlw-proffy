import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import { PageTeacherList, SearchTeacher, Main } from "./styles";

const TeacherList: React.FC = () => {
  return (
    <PageTeacherList>
      <PageHeader title="Esses são os proffys disponíveis">
        <SearchTeacher action="/">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </SearchTeacher>
      </PageHeader>
      <Main>
        <TeacherItem
          avatar="https://avatars1.githubusercontent.com/u/58452911?s=460&u=900f60af82e1b47abdf910d0e005f1d53be257d3&v=4"
          name="Isaac Alencar"
          subject="Defesa contra as artes das Trevas"
          price="1.250,00"
          detail="Eu posso ensinar a enfeitiçar a mente e confundir os sentidos. Eu posso ensinar como engarrafar a fama e cozinhar a glória, e até pôr um fim na morte."
        />
        <TeacherItem
          avatar="https://avatars1.githubusercontent.com/u/58452911?s=460&u=900f60af82e1b47abdf910d0e005f1d53be257d3&v=4"
          name="Isaac Alencar"
          subject="Defesa contra as artes das Trevas"
          price="1.250,00"
          detail="Eu posso ensinar a enfeitiçar a mente e confundir os sentidos. Eu posso ensinar como engarrafar a fama e cozinhar a glória, e até pôr um fim na morte."
        />
        <TeacherItem
          avatar="https://avatars1.githubusercontent.com/u/58452911?s=460&u=900f60af82e1b47abdf910d0e005f1d53be257d3&v=4"
          name="Isaac Alencar"
          subject="Defesa contra as artes das Trevas"
          price="1.250,00"
          detail="Eu posso ensinar a enfeitiçar a mente e confundir os sentidos. Eu posso ensinar como engarrafar a fama e cozinhar a glória, e até pôr um fim na morte."
        />
        <TeacherItem
          avatar="https://avatars1.githubusercontent.com/u/58452911?s=460&u=900f60af82e1b47abdf910d0e005f1d53be257d3&v=4"
          name="Isaac Alencar"
          subject="Defesa contra as artes das Trevas"
          price="1.250,00"
          detail="Eu posso ensinar a enfeitiçar a mente e confundir os sentidos. Eu posso ensinar como engarrafar a fama e cozinhar a glória, e até pôr um fim na morte."
        />
      </Main>
    </PageTeacherList>
  );
};

export default TeacherList;
