import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
// import { useLocation } from "react-router-dom";

import { Container} from './components/index';
import { Header, Footer} from './sections/index';
import { Home, Profile, Stream } from './Pages/index'
import Browse from './Pages/Browse/Browse';

import './App.css';
function App() {
  // const location = useLocation();
  return (
    <>
      <Router basename={'/react-games-app'}>
        <Header/>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Browse' element={<Browse/>}/>
            <Route path='/Stream' element={<Stream/>}/>
            <Route path='/Profile' element={<Profile/>}/>
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
