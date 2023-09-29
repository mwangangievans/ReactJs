import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/hello';
import Message from './Components/message';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
            {/* <Message /> */}
      {/* <Greet name="Mwangangi">
        <p>this are children</p>
      </Greet>
      <Greet name="Muinde" />
      <Greet name="Evans" /> */}
      {/* <Welcome name="Mwangangi from class based props" /> */}
      {/* <Hello/> */}

    </div>
  );
}

export default App;


