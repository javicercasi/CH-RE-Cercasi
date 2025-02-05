import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a nuestra página" />
      <Footer />
    </div>
  );
}

export default App;
