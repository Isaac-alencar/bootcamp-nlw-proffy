import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import api from "../../services/api";

import { PageTeacherList, SearchTeacher, Main } from "./styles";

const TeacherList: React.FC = () => {
  const [state, setState] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function handleSearchTeacher(e: FormEvent) {
    e.preventDefault();
    const classesFinded = await api.get("/classes", {
      params: { subject, week_day, time },
    });

    if (classesFinded) {
      setState(classesFinded.data);
    }

    console.log(classesFinded.data);
  }

  return (
    <PageTeacherList>
      <PageHeader title="Esses são os proffys disponíveis">
        <SearchTeacher onSubmit={handleSearchTeacher}>
          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "História", label: "História" },
              { value: "Geografia", label: "Geografia" },
            ]}
          />

          <Select
            label="Dia da semana"
            name="week_day"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />

          <Input
            label="Hora"
            name="time"
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type="submit">Buscar</button>
        </SearchTeacher>
      </PageHeader>
      <Main>
        {state &&
          state.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} data={teacher} />;
          })}
      </Main>
    </PageTeacherList>
  );
};

export default TeacherList;
