import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
function App() {
  
  const [userInput, setUserInput] = useState({
  initialInvestment : 1000,
  annualInvestment : 1200,
  expectedReturn : 6,
  duration : 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  

  const isValid = userInput.duration >=1;
  
  
  return (
    <>
      <Header />
      <UserInput userInput = {userInput} handleChange = {handleChange} />
      {!isValid && <p className="center">Duration can't be less that 1</p>}
      {isValid&& <Results userInput = {userInput}/>}
    </>
  );
}

export default App;
