import logo from './logo.svg';
import './App.css';
import AuthorList from './components/AuthorList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  
  return (
<BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthorList />} />
          <Route path="/new" element={<CreateAuthor />} />
          <Route path="/edit/:id" element={<UpdateAuthor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
