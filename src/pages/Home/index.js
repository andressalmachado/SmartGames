import Menu from "../../componentes/Menu/Menu";
import Banner from "../../componentes/Banner/Banner";
import Card from "../../componentes/Card/Card";
import Minicard from "../../componentes/Minicard/Minicard";
import Separador from "../../componentes/Separador/Separador";
import Footer from "../../componentes/Footer/Footer";

function Home() {
  return (
    <div className="Home">
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

export default Home;
