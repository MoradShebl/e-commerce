import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/products/:name" element={<ProductPage />} />
          <Route path="/shop/:dress_style" element={<ShopPage />} />
          <Route path="/" element={<MainPage />} />
          {/* Fallback route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;