import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh;
`;

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;

const SignInButton = styled(Link)`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <Container>
      <StyledBox>
        <Wrapper>
          <Title>Welcome to ReviewTube</Title>
          <SubTitle>Sign in to continue</SubTitle>
          <SignInButton to="/signin">Sign In</SignInButton>
        </Wrapper>
      </StyledBox>
    </Container>
  );
};

export default Home;
