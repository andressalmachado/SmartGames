import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 200px;
  width: 100%;
  margin-right: 20px;
  border-radius: 20px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 10px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ pesquisa, setPesquisa }) {
  const valorDaBusca = pesquisa;
  const setValorDaBusca = setPesquisa;

  return (
    <StyledSearch>
      <input
        type="text"
        onChange={(e) => {
          setValorDaBusca(e.target.value);
          console.log(valorDaBusca);
        }}
      />
      <button>🔎</button>
    </StyledSearch>
  );
}
