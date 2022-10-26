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
      <Separador text="Jogos" />
      <Card />
      <Separador text="Quem já comprou e recomenda" />
      <Minicard />
      <Footer />
    </div>
  );
}

export default App;
