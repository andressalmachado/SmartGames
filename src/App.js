import Banner from "./componentes/Banner/Banner";
import Card from "./componentes/Card/Card";
import Menu from "./componentes/Menu/Menu";
import Minicard from "./componentes/Minicard/Minicard";
import Footer from "./componentes/Footer/Footer";
import Separador from "./componentes/Separador/Separador";

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <Separador />
      <ul className="jogos">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <Separador />
      <ul>
        <Minicard />
        <Minicard />
        <Minicard />
        <Minicard />
        <Minicard />
      </ul>
      <Footer />
    </div>
  );
}

export default App;
