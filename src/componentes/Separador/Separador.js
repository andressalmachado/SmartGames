import styled from "styled-components";

const StyledSeparador = styled.fieldset`
  border: none;
  border-top: 1px solid #fff;
  display: block;
  text-align: center;
  color: #ffd700;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  margin: 0 100px;

  legend {
    padding: 25px 100px;
  }
`;

const Separador = (props) => {
  return (
    <StyledSeparador>
      <legend>{props.text}</legend>
    </StyledSeparador>
  );
};

export default Separador;
