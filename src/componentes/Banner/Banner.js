import styled from "styled-components";

const StyledBanner = styled.header`
  max-width: 100%;

  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

const Banner = () => {
  return (
    <StyledBanner>
      <img src="/imagens/banner2.jpg" alt="banner" />
    </StyledBanner>
  );
};

export default Banner;
