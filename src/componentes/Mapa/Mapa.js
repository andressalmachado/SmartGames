import "./Mapa.css";

const Mapa = () => {
  return (
    <>
      <iframe
        className="mapa"
        src={
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d457.34798391293936!2d-46.83415!3d-23.504293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sus!4v1666793603039!5m2!1spt-BR!2sus"
        }
        loading={"lazy"}
        referrerpolicy={"no-referrer-when-downgrade"}
      ></iframe>
    </>
  );
};
export default Mapa;
