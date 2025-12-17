
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import Header from './components/feature/Header';
import Footer from './components/feature/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
