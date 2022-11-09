import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Menu = ({ pesquisa, setPesquisa }) => {
  return (
    <StyledMenu>
      <Link to={"/"}>
        <img src="/imagens/SMART GAMES-2.png" alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Jogos</Link>
        </li>
        <li>
          <Link to={"/"}>Playstation</Link>
        </li>
        <li>
          <Link to={"/"}>XBOX</Link>
        </li>
        <li>
          <Link to={"/"}>Nintendo</Link>
        </li>
        <li>
          <Link to={"/"}>Desktop</Link>
        </li>
      </ul>
      <Search pesquisa={pesquisa} setPesquisa={setPesquisa} />
    </StyledMenu>
  );
};
export default Menu;
