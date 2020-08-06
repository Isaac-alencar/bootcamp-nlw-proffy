import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";

import warningIcon from "../../assets/icons/warning.svg";

import { PageTeacherForm, Main, ScheduleItem } from "./styles";
import api from "../../services/api";

const TeacherForm: React.FC = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setsubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setscheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);
  const history = useHistory();
  function addNewScheduleItem() {
    setscheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  async function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    const createNewClass = await api.post("classes", {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    });
    if (createNewClass.status === 201) {
      alert("Cadastro realizado com sucesso!");
      history.push("/");
    } else {
      alert("Erro no cadastro!");
    }
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItem = scheduleItems.map((scheduleItem, item) => {
      if (item === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });

    setscheduleItems(updatedScheduleItem);
  }

  return (
    <PageTeacherForm>
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              label="Nome completo"
              name="name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />

            <Input
              label="Avatar"
              name="avatar"
              type="text"
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
              value={avatar}
            />

            <Input
              label="WhatsApp"
              name="whatsApp"
              type="text"
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
              value={whatsapp}
            />
            <TextArea
              name="bio"
              label="Biografia"
              onChange={(e) => {
                setBio(e.target.value);
              }}
              value={bio}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              label="Matéria"
              name="subject"
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Matemática", label: "Matemática" },
                { value: "Português", label: "Português" },
                { value: "História", label: "História" },
                { value: "Geografia", label: "Geografia" },
              ]}
              onChange={(e) => {
                setsubject(e.target.value);
              }}
              value={subject}
            />

            <Input
              label="Custo da sua hora por aula"
              name="cost"
              type="text"
              onChange={(e) => {
                setCost(e.target.value);
              }}
              value={cost}
            />
          </fieldset>
          <fieldset>
            <legend>
              Hoŕaios disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems &&
              scheduleItems.map((scheduleItem, index) => {
                return (
                  <ScheduleItem key={scheduleItem.week_day}>
                    <Select
                      label="Dia da semana"
                      name="week_day"
                      value={scheduleItem.week_day}
                      options={[
                        { value: "0", label: "Domingo" },
                        { value: "1", label: "Segunda-feira" },
                        { value: "2", label: "Terça-feira" },
                        { value: "3", label: "Quarta-feira" },
                        { value: "4", label: "Quinta-feira" },
                        { value: "5", label: "Sexta-feira" },
                        { value: "6", label: "Sábado" },
                      ]}
                      onChange={(e) =>
                        setScheduleItemValue(index, "week_day", e.target.value)
                      }
                    />
                    <Input
                      onChange={(e) =>
                        setScheduleItemValue(index, "from", e.target.value)
                      }
                      name="from"
                      label="Das"
                      type="time"
                      value={scheduleItem.from}
                    />
                    <Input
                      onChange={(e) =>
                        setScheduleItemValue(index, "to", e.target.value)
                      }
                      name="to"
                      label="Até"
                      type="time"
                      value={scheduleItem.to}
                    />
                  </ScheduleItem>
                );
              })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </Main>
    </PageTeacherForm>
  );
};

export default TeacherForm;
