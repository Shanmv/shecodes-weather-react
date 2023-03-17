import "./App.css";
import SearchEngine from "./SearchEngine";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";

function App() {
  return (
    <div className="App Wrapper">
      <Container className="container container-main">
        <SearchEngine />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
