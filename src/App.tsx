import styled from "styled-components";
import { GlobalStyle } from "./style/global";
import Page2 from "./page/Page2";
import Page1 from "./page/Page1";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState<string>("Home");
  return (
    <Container>
      <GlobalStyle />
      {page == "Page1" && <Page1 />}
      {page == "Page2" && <Page2 />}
      <div className="button-container">
        {page !== "Home" && (
          <button
            type="button"
            onClick={() => {
              setPage("Home");
            }}
          >
            홈
          </button>
        )}
        {page !== "Page1" && (
          <button
            type="button"
            onClick={() => {
              setPage("Page1");
            }}
          >
            Page1
          </button>
        )}
        {page !== "Page2" && (
          <button
            type="button"
            onClick={() => {
              setPage("Page2");
            }}
          >
            Page2
          </button>
        )}
      </div>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;

  .button-container {
    display: flex;
    gap: 20px;

    button {
      margin: 20px 0px;
      background-color: #0d3b66;
      color: white;
      padding: 10px 50px;
      border: none;
      border-radius: 20px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;
export default App;
