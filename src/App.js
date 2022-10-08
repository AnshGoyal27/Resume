import './App.css';
import { Carousel } from './caraousel/cara';
import { Featurette } from './featurette/feat';
import { Navbar } from './navbar/nav';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Carousel/>
        <div className='container'>
          <Featurette/> 
        </div>
      </main>
    </div>
  );
}

export default App;
