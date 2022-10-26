import Mapa from "../Mapa/Mapa";
import "./Jogo.css";

const Jogo = () => {
  return (
    <div className="jogo">
      <figure>
        <img
          src="https://m.media-amazon.com/images/I/510tkrW2zfL._AC_.jpg"
          alt="Imagem do Jogo"
        />
        <figcaption>
          <h1>God of War</h1>
          <p>
            É um novo começo para Kratos. Vivendo como um homem longe da sombra
            dos deuses, ele se aventura pelas selvagens florestas nórdicas com
            seu filho Atreus, lutando para cumprir uma missão profundamente
            pessoal. O Santa Monica Studio e o diretor de criação Cory Barlog
            lançam um novo começo para um dos personagens mais conhecidos dos
            jogos. Vivendo como um homem, fora da sombra dos deuses, Kratos deve
            se adaptar a terras desconhecidas, ameaças inesperadas e a uma
            segunda oportunidade de ser pai. Junto ao seu filho, Atreus, os dois
            vão se aventurar pelas selvagens florestas nórdicas e lutar para
            cumprir uma missão profundamente pessoal.
          </p>
        </figcaption>
      </figure>
      <p className="preco">R$ 1,99</p>
      <button>Comprar</button>

      <Mapa />
    </div>
  );
};

export default Jogo;
