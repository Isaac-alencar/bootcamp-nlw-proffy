import styled from "styled-components";

export const PageTeacherList = styled.div`
  width: 100vw;
  max-width: 700px;
  height: 100vh;
  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const SearchTeacher = styled.form`
  margin-top: 3.2rem;

  .input-block {
    position: relative;
    label {
      font-size: 1.4rem;
    }
    input {
      width: 100%;
      height: 5.6rem;
      margin-top: 0.8rem;
      border: 1px solid var(--color-line-in-white);
      border-radius: 0.8rem;
      background-color: var(--color-input-background);
      padding: 0 1.6rem;
      font: 1.6rem Archivo;
    }
    & + .input-block {
      margin-top: 1.4rem;
      @media (min-width: 700px) {
        margin-top: 0rem;
      }
    }
    &:focus-within:after {
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;

      width: calc(100% - 3.2rem);
      height: 2px;

      content: "";
      background-color: var(--color-primary-light);
    }
  }
  label {
    color: var(--color-text-in-primary);
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
