import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Layout } from './components/Layout';

function App() {
  return (
      <Layout>
          <main className='mt-5'>
            <ItemListContainer/>
          </main>
      </Layout>

  );
}

export default App;
