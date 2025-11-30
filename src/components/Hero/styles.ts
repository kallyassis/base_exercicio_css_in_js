import styled from 'styled-components'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    height: 250px;

    div {
      margin: 0 auto;
      padding: 20px;
    }
  }

  div {
    margin: 0 auto;
    position: relative;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }
`
export const Titulo = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  color: ${(props) => props.theme.corSecundaria};

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`
