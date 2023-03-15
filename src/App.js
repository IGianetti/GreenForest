import NavBar from './components/navbar/NavBar';
import './App.css';
import ItemContainerList from './components/itemcontainerlist/ItemContainerList';


function App() {

  const list = ["Products", "Services", "Contact Us"]
  const greeting = "Bienvenido a Green Forest"

  return (
    <div className="App">
      <NavBar links={list}/>  
      <ItemContainerList text={greeting}/>    
    </div>
  );
}

export default App;
