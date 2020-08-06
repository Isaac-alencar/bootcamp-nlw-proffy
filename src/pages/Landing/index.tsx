import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import landingImg from "../../assets/landing.svg";
import studyIcon from "../../assets/icons/study.svg";
import giveClassesIcon from "../../assets/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/icons/purple-heart.svg";
import api from "../../services/api";

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  ButtonsContainer,
} from "./styles";

const Landing: React.FC = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    api.get("/connections").then((response) => {
      const { total } = response.data;
      setState(total);
    });
  }, []);

  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <img src={logo} alt="proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <img src={landingImg} alt="landing-imgage" className="hero-image" />

        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-leassons" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar Aulas
          </Link>
        </ButtonsContainer>
        <span className="total-connections">
          {`Total de ${state} conexões já realizadas`}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
