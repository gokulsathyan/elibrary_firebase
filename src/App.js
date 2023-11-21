
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Book from './Pages/Book';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/books' element={<Book></Book>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
