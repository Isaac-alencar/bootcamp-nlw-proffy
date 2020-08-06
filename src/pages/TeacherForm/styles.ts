import styled from "styled-components";

export const PageTeacherForm = styled.div`
  width: 100vw;
  height: 100vh;
  .header-content {
    margin-bottom: 6.4rem;
    @media (min-width: 700px) {
      margin-bottom: 0;
    }
  }
  @media (min-width: 700px) {
    max-width: 100vw;
  }
`;
export const Main = styled.main`
  margin: -32px auto 3.2rem;
  padding-top: 6.4rem;
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  background-color: var(--color-box-base);
  overflow: hidden;

  fieldset {
    padding: 0 2.4rem;
    border: 0;
    & + fieldset {
      margin-top: 6.4rem;
    }

    legend {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-line-in-white);
      margin-bottom: 2.4rem;
      font: 700 2.4rem Archivo;
      color: var(--color-text-title);

      button {
        background-color: transparent;
        border: none;
        color: var(--color-primary);
        font: 700 1.6rem Archivo;
        cursor: pointer;
        transition: color 0.2s;
        &:hover {
          color: var(--color-primary-dark);
        }
      }
    }
    @media (min-width: 700px) {
      padding: 0 6.4rem;
    }
    label {
      color: var(--color-text-complement);
    }
  }

  footer {
    margin-top: 6.4rem;
    padding: 4rem 2.4rem;
    border-top: 1px solid var(--color-line-in-white);
    background-color: var(--color-box-footer);
    img {
      margin-right: 2rem;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      line-height: 1.4rem;
      color: var(--color-text-complements);
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3.2rem;
      width: 100%;
      height: 5.6rem;
      border: none;
      border-radius: 0.8rem;
      background-color: var(--color-secundary);
      color: var(--color-button-text);
      font: 700 1.6rem Archivo;
      text-decoration: none;
      cursor: pointer;

      transition: background-color 0.2s;
      &:hover {
        background-color: var(--color-secundary-dark);
      }
    }
    @media (min-width: 700px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4rem 6.4rem;

      p {
        justify-content: space-between;
      }

      button {
        width: 20rem;
        margin-top: 0;
      }
    }
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;
  }
`;
