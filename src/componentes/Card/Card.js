import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.li`
  margin: 20px 0px;
  background-color: #fff;
  height: 280px;
  width: 220px;
  padding: 15px;
  list-style-type: none;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 5px;

  figure {
    text-align: center;
    padding: 8px;
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }
  img {
    max-width: 130px;
    max-height: 130px;
    text-align: center;
  }

  figcaption {
    margin: 8px 0;
    font-weight: 600;
  }

  p {
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
          <StyledCard>
            <Link to={"/detalhes"}>
              <figure>
                <img src={image} alt={name} />
                <figcaption>{name}</figcaption>
              </figure>
            </Link>
            <p>R$ {price}</p>
            <button>Comprar</button>
          </StyledCard>
        );
      })}
    </ul>
  );
};

export default Card;
