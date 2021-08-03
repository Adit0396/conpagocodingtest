import './App.css';
import { permittedCrossDomainPolicies } from 'helmet';
import People from './People.js'
import Button from "./Button"
function App() {
  fetch("https://swapi.dev/api/people/1/")
      .then(res => {res.json();
      console.log(res)})
  return (
    <div className="App">
      <People/>
    </div>
  );
}

export default App;
