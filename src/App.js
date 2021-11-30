import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
import { Books } from './component/Books'
import { Movie } from './component/Movie';
import { Character } from './component/Character';
import { Moviequotes } from './component/Moviequotes';
import { Container, Nav, Navbar } from 'react-bootstrap';
function App() {
  return (
    <>
        <Router>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">One-Api</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/books">Books</Nav.Link>
        <Nav.Link href="/movie">Movies</Nav.Link>
        <Nav.Link href="/character">Character</Nav.Link>
        
        
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>    
        <Route exact path="/books" component={Books}></Route>
        <Route exact path="/movie" component={Movie}></Route>
        <Route exact path="/character" component={Character}></Route>
        <Route exact path="/movie/:id/quotes" component={Moviequotes}></Route>
   </Router>
    </>
  );
}

export default App;
