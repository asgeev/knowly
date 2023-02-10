import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const HomeTitle = styled.h1`
  margin-top: 0;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Witaj użytkowniku!</HomeTitle>
      <p>
        Witaj na portalu KnowHow. Portal ten przeznaczony jest do dzielenia się
        wiedzą w obrębie danej jednostki.
      </p>
    </HomeContainer>
  );
};
