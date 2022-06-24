import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { DetailMovie } from './pages/DetailMovie';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='' element={
            <Home/>
          }/>
          <Route path='/details/:movieId' element={
            <DetailMovie/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
