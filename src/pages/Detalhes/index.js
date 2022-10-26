import Menu from "../../componentes/Menu/Menu";
import Jogo from "../../componentes/Jogo/Jogo";
import Separador from "../../componentes/Separador/Separador";
import Minicard from "../../componentes/Minicard/Minicard";
import Footer from "../../componentes/Footer/Footer";

const Detalhes = () => {
  return (
    <>
      <Menu />
      <Jogo />
      <Separador text="Quem já comprou e recomenda" />
      <Minicard />
      <Footer />
    </>
  );
};
export default Detalhes;
