import { HeaderWrapper, Logo, StyledLink } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>WheelsToRent</Logo>
      <nav>
        <StyledLink to="/">
          Home
        </StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorite</StyledLink>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;