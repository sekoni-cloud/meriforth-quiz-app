import './App.css';
import AdminPage from './components/AdminPage';
import HomePage from './components/HomePage';
import{Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path='/admin223' element={<AdminPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
