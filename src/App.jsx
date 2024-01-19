import { Container } from "react-bootstrap";
import "./App.css";
import Grid from "./components/Grid";
import FormColor from "./components/FormColor";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Container className="my-5">
      <FormColor />
      <Grid />
    </Container>
  );
}

export default App;
