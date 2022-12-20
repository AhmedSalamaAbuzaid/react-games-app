import './App.css';
import { Container} from './components/index';
import { Header, Footer, Hero ,MostPopular} from './sections/index';


function App() {
  return (
    <>
      <Header/>
      <Container>
        <Hero/>
        <MostPopular/>
      </Container>
      {/* <Footer/> */}
    </>
  );
}

export default App;
