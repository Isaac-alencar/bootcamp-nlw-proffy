import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  label {
    font-size: 1.4rem;
  }
  select {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }
  select + input {
    margin-top: 2.4rem;
  }
  & + div {
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
  label {
    color: var(--color-text-in-primary);
  }
`;
