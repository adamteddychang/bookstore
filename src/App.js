import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Categories from './components/categories';
import BooksList from './components/bookList';
import InputBook from './components/inputBook';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BooksList />} />
          <Route exact path="/input" element={<InputBook />} />
          <Route path="/categories" element={<Categories />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
