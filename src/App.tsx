import styled from "styled-components";
import { GlobalStyle } from "./style/global";
import Page2 from "./page/Page2";
import Page1 from "./page/Page1";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Page1 />
      <Page2 />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
`;
export default App;
