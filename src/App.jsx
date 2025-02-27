import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/cart/Cart";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/wines/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wine/:id" element={<ItemDetail />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
