import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
  height: 8rem;
  width: 100%;
  padding: 1rem 1.8rem;
  /* background-color: ${({ theme }) => theme.color.background100}; */

  img {
    height: 5rem;
    /* width: auto;
    height: 100%; */
  }
`;

export const PageNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100vw;
  /* height: calc(100vh - 8rem); */
  height: 100vh;
  font-family: 'Comfortaa', cursive;
  background-image: url('../src/assets/404background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

export const Header404 = styled.h1`
  position: relative;
  top: 8%;
  font-size: 10rem;
  font-weight: 700;
  width: min-content;
  margin: 0 8%;
  z-index: 5;

  ${({ theme }) => theme.mq.lg} {
    font-size: 16rem;
  }
`;

export const Paragraph404 = styled.p`
  position: relative;
  top: 8%;
  margin: 0 8%;
  font-size: 3rem;
  max-width: 50rem;
  z-index: 5;

  ${({ theme }) => theme.mq.lg} {
    font-size: 5rem;
  }
`;

export const fly = keyframes`
  0% {
    transform: rotate(-90deg) translateX(0);
  }

  100% {
    transform: rotate(0deg) translateX(calc(100vw + 200px));
  }

`;

export const AstronautImage = styled.div`
  position: absolute;
  top: 40%;
  left: -200px;
  width: 200px;
  height: 200px;
  background-image: url('../src/assets/astronaut.png');
  background-size: contain;
  z-index: 4;

  animation-name: ${fly};
  animation-duration: 10s;
  animation-direction: reverse;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.87, 0.32, 0.77, 0.65);
  /* animation-timing-function: ease-in-out; */
  /* animation-timing-function: cubic-bezier(0.31, 0.44, 0.445, 1.65); custom */

  ${({ theme }) => theme.mq.lg} {
    font-size: 5rem;
  }
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 1.4rem 2.5rem;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.color.background100};
  color: ${({ theme }) => theme.color.accent};
`;

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageNotFoundContainer>
        <Header>
          <img src="../src/assets/icons/logo.png" alt="logo" />
        </Header>
        <Header404>404</Header404>
        <Paragraph404>Strona nie została odnaleziona!</Paragraph404>
        {/* <Button onClick={() => navigate('/', { replace: true })}>
          Wróć do strony głównej
        </Button> */}
        <AstronautImage />
      </PageNotFoundContainer>
    </>
  );
};
