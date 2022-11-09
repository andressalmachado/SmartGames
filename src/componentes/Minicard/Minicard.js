import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledMinicard = styled.ul`
  padding-top: 30px;

  li {
    box-sizing: border-box;
    background-color: #fff;
    width: 220px;
    height: 220px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  span {
    font-weight: 400;
    margin: 20px 20px;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 80px;
    border: 4px solid #ffd700;
  }
`;

const Minicard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/comentarios.json")
      .then((response) => response.json())
      .then(setData);
  }, []);
  return (
    <StyledMinicard>
      {data.map((item) => {
        const { comentario, image } = item;
        return (
          <li key={image}>
            <img src={image} alt="Imagem do cliente" />
            <span>{comentario}</span>
          </li>
        );
      })}
    </StyledMinicard>
  );
};
export default Minicard;
