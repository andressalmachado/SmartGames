import "./Card.css";

const Card = () => (
  <li className="card">
    <figure>
      <img src="/imagens/overwatch.jpg" alt="Imagem do jogo" />
      <figcaption>Overwatch</figcaption>
    </figure>
    <p>R$ 160,00</p>
    <button>Comprar</button>
  </li>
);
export default Card;
