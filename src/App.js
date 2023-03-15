import NavBar from './components/navbar/NavBar';
import './App.css';


function App() {

  const list = ["Products", "Services", "Contact Us"]

  return (
    <div className="App">

      <NavBar links={list}/>  
    
    </div>
  );
}

export default App;
