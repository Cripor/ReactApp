import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Layout } from './components/Layout';

function App() {
  return (
      <Layout>
        <main className='mt-5'>
          <ItemDetailContainer/>
          <ItemListContainer/>
        </main>
      </Layout>
  );
}

export default App;
