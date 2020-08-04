import React from "react";

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  ButtonsContainer,
} from "./styles";

import logo from "../../assets/logo.svg";
import landingImg from "../../assets/landing.svg";
import studyIcon from "../../assets/icons/study.svg";
import giveClassesIcon from "../../assets/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/icons/purple-heart.svg";

const Landing: React.FC = () => {
  return (
    <PageLanding>
      <PageLandingContent>
        <LogoContainer>
          <img src={logo} alt="proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <img src={landingImg} alt="landing-imgage" className="hero-image" />

        <ButtonsContainer>
          <a href="/" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="/" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar Aulas
          </a>
        </ButtonsContainer>
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </PageLandingContent>
    </PageLanding>
  );
};

export default Landing;
