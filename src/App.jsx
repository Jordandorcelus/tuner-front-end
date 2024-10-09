import './App.css';
import Index from './pages/Index';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Playlist from './pages/Playlist';
import Show from './pages/Show';

function App() {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/songs/:id" element={ <Show />}/>
    </Routes>
    </>
  )
}

export default App;
