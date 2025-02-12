import { useState } from 'react';
import './App.css';


function App() {
  const [variableToSolve, setVariableToSolve] = useState('');
  const [selectedLaw,setSelectedLaw] = useState('');
  const [inputValues,setInputValues] = useState({});
  const [result,setResult] = useState(null);

  const variables = ['s','u','v','a','t'];
  const laws = {
    s:[
      {formula:'s = ut + 1/2at^2',variablesNeed:['u','t','a']},
      {formula:'s = vt',variablesNeed:['v','t']},
    ]
  }
  const handleVariableChange = (variable) => {
    console.log(variable);
    setVariableToSolve(variable);
  }

  return (
    <div className="App">
      this is calculator app
    </div>
  );
}

export default App;
