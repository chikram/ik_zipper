import './App.css';
import Nav from './components/Nav';
import About from './screen/About/About';
import Home from './screen/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
