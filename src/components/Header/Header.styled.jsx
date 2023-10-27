import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.black};

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;

  &.active {
    color: ${(props) => props.theme.colors.white};
    background-color: #3470FF;
  };

  &.active:hover {
    background-color: #0B44CD;
  }
`;