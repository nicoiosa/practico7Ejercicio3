import { Container } from "react-bootstrap";
import "./App.css";
import Grid from "./components/Grid";
import FormColor from "./components/FormColor";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Rolling Color Finder</h1>
      <FormColor />
    </Container>
  );
}

export default App;
