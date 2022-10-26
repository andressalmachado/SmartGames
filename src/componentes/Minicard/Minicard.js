import { useEffect, useState } from "react";
import "./Minicard.css";

const Minicard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/comentarios.json")
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <ul className="lista">
      {data.map((item) => {
        const { comentario, image } = item;
        return (
          <li className="minicard">
            <img src={image} alt="Imagem do cliente" />
            <span>{comentario}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default Minicard;
