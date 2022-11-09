import React from "react";
import Menu from "../../componentes/Menu/Menu";
import Banner from "../../componentes/Banner/Banner";
import Card from "../../componentes/Card/Card";
import Separador from "../../componentes/Separador/Separador";
import Minicard from "../../componentes/Minicard/Minicard";
import Footer from "../../componentes/Footer/Footer";

function Home() {
  const [pesquisa, setPesquisa] = React.useState("God");

  return (
    <div className="Home">
      <Menu pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <Banner />
      <Separador text="Jogos" />
      <Card pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <Separador text="Quem já comprou e recomenda" />
      <Minicard />
      <Footer />
      {console.log(pesquisa)}
    </div>
  );
}

export default Home;
