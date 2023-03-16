import "./App.css";
import SearchEngine from "./SearchEngine";

import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App Wrapper">
      <Container sm className="container container-main">
        <SearchEngine />
      </Container>
    </div>
  );
}

export default App;
