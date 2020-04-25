import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  line-height: 56px;
  margin-top: 80px;
  max-width: 450px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    border-radius: 5px 0 0 5px;
    border: 0;
    color: #3a3a3a;
    flex: 1;
    height: 70px;
    padding: 0 24px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    border: none;
    color: #fff;
    font-weight: bold;
    height: 70px;
    transition: background-color 250ms;
    width: 210px;

    &:hover,
    &:focus {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    display: block;
    display: flex;
    padding: 24px;
    text-decoration: none;
    transition: transform 250ms;
    width: 100%;

    &:focus,
    &:hover {
      transform: translateX(10px);
    }

    &:not(:first-child) {
      margin-top: 16px;
    }

    img {
      border-radius: 50%;
      height: 64px;
      width: 64px;
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        color: #3d3d4d;
        font-size: 20px;
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`;
