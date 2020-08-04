import styled from "styled-components";

export const PageLanding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  color: var(--color-text-in-primary);
  background-color: var(--color-primary);
`;

export const PageLandingContent = styled.div`
  width: 90vw;
  max-width: 700px;
  > .hero-image {
    width: 100%;
  }
  > .total-connections {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    > img {
      margin-left: 0.8rem;
    }
  }
  @media (min-width: 1100px) {
    display: grid;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total";
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;

    max-width: 1100px;

    > .total-connections {
      grid-area: total;
      justify-self: end;
    }
    > .hero-image {
      grid-area: hero;
      justify-self: end;
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  > img {
    height: 10rem;
  }
  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;
    img {
      height: 100%;
    }
    > h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  > a:first-child {
    margin-right: 1.6rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30rem;
    height: 9.4rem;

    border-radius: 0.8rem;
    text-decoration: none;
    color: var(--color-button-text);
    font: 700 2rem Archivo;

    transition: background-color ease-in 200ms;
  }
  img {
    width: 4rem;
  }
  .study {
    background-color: var(--color-primary-lighter);
    &:hover {
      background-color: var(--color-primary-light);
    }
  }
  .give-classes {
    background-color: var(--color-secundary);
    &:hover {
      background-color: var(--color-secundary-dark);
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
    > a {
      font-size: 2.4rem;
      img {
        margin-right: 2.4rem;
      }
    }
  }
`;
