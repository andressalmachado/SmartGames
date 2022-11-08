import Mapa from "./components/Mapa/Mapa";
import styled from "styled-components";

const StyledDetalhesJogo = styled.div`
  padding: 100px 100px 0;
  text-align: center;
  background-color: #fdfdfd;

  figure {
    display: grid;
    grid-template-columns: auto auto;
    gap: 100px;

    img {
      max-width: 400px;
    }

    figcaption {
      font-size: 18px;
      text-align: justify;

      h1 {
        text-transform: uppercase;
        margin-bottom: 30px;
        /* margin: 0 100px; */
      }
      p {
        line-height: 25px;
      }
    }
  }

  .preco {
    margin: 0;
    color: #ff4d00;
    font-weight: 700;
  }

  button {
    margin: 8px 0;
    width: 180px;
    padding: 5px 0;
    background-color: #ffd700;
    border-color: #ffd700;
    border-radius: 5px;
    box-shadow: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    cursor: pointer;
  }
`;

const Jogo = () => {
  return (
    <StyledDetalhesJogo>
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
    </StyledDetalhesJogo>
  );
};

export default Jogo;
