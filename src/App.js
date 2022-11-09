import './App.css';
import NavBar from './components/NavBar';
import Header from './components/header';
import ItemListContainer from './components/main';

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-white d-flex flex-column gap-5 justify-content-start">
        <Header/>
        <NavBar/>
      </header>
      <main className='mt-5'>
        <ItemListContainer/>
      </main>
    </div>
  );
}

export default App;
