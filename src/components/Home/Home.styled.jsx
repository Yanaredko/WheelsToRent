import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ButtonWraper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;

`;

export const HomeContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  gap: 40px;
  padding: 30px, 30px;
  margin: 0 auto;
`;

export const HomeName = styled.h1`
display: flex;
margin-top: 80px;

`;

export const LearnMore = styled(Link)`
  background-color: #3470FF;
  padding: 28.8px 48px;
  border-radius: 12px;
  border: 2px solid #3470FF;
  transition: all 0.3s;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: #0B44CD;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const HomeContent = styled.div`
  padding: 0px, 30px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
