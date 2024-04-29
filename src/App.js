import './App.css';
import { Route, Routes } from 'react-router-dom';
import GetBoards from './board/GetBoards';
import UpsertBoard from './board/UpsertBoard';
import GetBoard from './board/GetBoard';

function App() {
  return (
    <Routes>

      // board
      <Route path='/' element={<GetBoards/>}></Route>
      <Route path='/boards/:id' element={<GetBoard/>}></Route>
      <Route path='/boards/create' element={<UpsertBoard/>}></Route>

    </Routes>
  );
}

export default App;
