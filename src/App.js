
import './App.css';
import Layout from './components/Layout';
import { SepetProvider } from './contexts/sepet';
import Router from './rooter/rooter';

function App() {
  return (
    <SepetProvider>
      <Layout>
        <Router />
      </Layout>
    </SepetProvider>
  );
}

export default App;
