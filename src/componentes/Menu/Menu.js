import "./Menu.css";

function Menu() {
  return (
    <nav className="menu">
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
    </nav>
  );
}
export default Menu;
