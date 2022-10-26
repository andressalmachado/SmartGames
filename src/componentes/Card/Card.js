import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jogos.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <ul>
      {data.map((item) => {
        const { name, image, price } = item;
        return (
          <li className="card">
            <Link to={"/detalhes"}>
              <figure>
                <img src={image} alt={name} />
                <figcaption>{name}</figcaption>
              </figure>
            </Link>
            <p>R$ {price}</p>
            <button>Comprar</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
