// src/App.jsx
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a InstalaSoft. Encuentra las mejores herramientas de software aquí." />
    </>
  );
}

export default App;

