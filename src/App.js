import Home from './coomponents/Home';
import Navbarr from './coomponents/Navbarr';
import Home2 from './coomponents/Home2';
import Home3 from './coomponents/Home3';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Navbarr />
      <div className='container'>
      <Home />
      <Home2 />
      <Home3 />
      </div>
    </div>
   
  );
}

export default App;
