import Search from "./components/Search";
import styled from "styled-components";

const StyledMenu = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  background-color: #000;
  color: #f1f1f1;
  align-items: center;

  ul {
    list-style: none;
    margin: 0 auto;
    justify-content: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    margin: 10px 15px;
  }
`;

const Menu = () => {
  return (
    <StyledMenu>
      <a href="/">
        <img src="/imagens/SMART GAMES-2.png" alt="logo" />
      </a>
      <ul>
        <li>
          <a href="/">Jogos</a>
        </li>
        <li>
          <a href="/">Playstation</a>
        </li>
        <li>
          <a href="/">XBOX</a>
        </li>
        <li>
          <a href="/">Nintendo</a>
        </li>
        <li>
          <a href="/">Desktop</a>
        </li>
      </ul>
      <Search />
    </StyledMenu>
  );
};
export default Menu;
