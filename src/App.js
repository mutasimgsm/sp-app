import './App.scss';
import NavBar from './nav/Nav';
import Footer from './footer/Footer';
import Body from './body/Body';

function App() {
  return (
    <div className="App">
      <div className="vertical-bar"></div>
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
