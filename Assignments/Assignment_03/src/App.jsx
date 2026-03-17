import './App.css'
import Exercise01 from './components/Exercise 01/Exercise01'
import Exercise02 from './components/Exercise 02/Exercise02'
import Header from './components/Header'
import Planets from './components/Planets'

const App = () => {

  return (
    <>
      <Header />
      <main className="main padding">
        <Exercise01 />
        <Exercise02 />
        <Planets />
      </main>
      
    </>
  )
}

export default App
