import "./Separador.css";

const Separador = (props) => {
  return (
    <fieldset class="separador">
      <legend>{props.text}</legend>
    </fieldset>
  );
};

export default Separador;
