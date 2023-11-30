import './App.scss';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="app">
          <Header />
          <Sidebar />
          <Content />
          <Footer />
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
