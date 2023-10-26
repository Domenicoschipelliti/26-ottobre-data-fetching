import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
// import CommentArea from './components/CommentArea'
import fantasy from "./data/fantasy.json";
import ComponenteForm from "./components/ComponenteForm";
function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <ComponenteForm></ComponenteForm>
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
