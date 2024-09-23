
import './App.css'
import CreateNav from './components/CreateNav/CreateNav'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
import PriceOption from './components/PriceOption/PriceOption'


function App() {

  return (
    <>
      <div>
        <CreateNav></CreateNav>
        <PriceOption></PriceOption>
        <LineChart></LineChart>
        <Phones></Phones>

      </div>



    </>
  )
}

export default App
