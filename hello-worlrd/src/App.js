import logo from './logo.svg';
import './App.css';
import  Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/hello';

function App() {
  return (
    <div className="App">
     <Greet name="Mwangangi">
      <p>this are children</p>
      </Greet>
     <Greet name="Muinde"/>
     <Greet name="Evans"/>

     <Welcome name="Mwangangi from class based props"/>
     {/* <Hello/> */}
     
    </div>
  );
}

export default App;


