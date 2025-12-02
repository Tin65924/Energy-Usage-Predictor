import Header from "./Components/HeaderComponents/Header"
import UserForm from "./Components/InputForm/UserForm"
import PredictionChart from "./Components/PredictionChartComponents/PredictionChart"
function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <UserForm />
      <PredictionChart />
    </div>
    
  )
}

export default App
