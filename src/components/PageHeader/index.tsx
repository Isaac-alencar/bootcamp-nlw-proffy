import React from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/icons/back.svg";
import logo from "../../assets/logo.svg";

import { Container, TopBarContainer, HeaderContent } from "./styles";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Container>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Voltar ao início" />
        </Link>
        <img src={logo} alt="logo proffy" />
      </TopBarContainer>

      <HeaderContent className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Container>
  );
};

export default PageHeader;
