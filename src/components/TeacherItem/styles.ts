import styled from "styled-components";

export const Container = styled.article`
  background-color: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 4rem;
  overflow: hidden;

  header {
    display: flex;
    align-items: center;
    padding: 3.2rem 2rem;
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    div {
      margin-left: 2.4rem;
      strong {
        display: block;
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
      }
      span {
        font-size: 1.6rem;
        margin-top: 0.4rem;
      }
    }
  }

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
    @media (min-width: 700px) {
      padding: 0 3.2rem;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.2rem;
    padding: 3.2rem 2rem;
    background-color: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    p strong {
      color: var(--color-primary);
      font-size: 1.6rem;
      display: block;

      @media (min-width: 700px) {
        display: initial;
        margin-left: 1.6rem;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 20rem;
      height: 5.6rem;
      border: none;
      border-radius: 0.8rem;
      background-color: var(--color-secundary);
      color: var(--color-button-text);
      font: 700 1.4rem Archivo;
      text-decoration: none;
      cursor: pointer;

      transition: 0.2s;

      &:hover {
        background-color: var(--color-secundary-dark);
      }

      @media (min-width: 700px) {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
        img {
          margin-right: 1.6rem;
        }
      }
    }
  }

  @media (min-width: 700px) {
    header,
    footer {
      padding: 3.2rem;
    }
  }
`;
