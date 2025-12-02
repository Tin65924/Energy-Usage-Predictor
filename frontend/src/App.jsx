import Header from "./Components/HeaderComponents/Header"
import UserForm from "./Components/InputForm/UserForm"
import PredictionChart from "./Components/PredictionChartComponents/PredictionChart"
import React, {useState} from 'react';
function App() {

  const [prediction, setPrediction] = useState("");

  return (
    <div className="app-wrapper">
      <Header />
      <UserForm setPrediction={setPrediction}/>
      <PredictionChart prediction={prediction}/>
    </div>
    
  )
}

export default App
