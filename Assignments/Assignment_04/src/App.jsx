import './App.css'
import Exercise03 from './components/Exercise 03/Exercise03'
import Header from './components/Header'
import Table from './components/Table'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
      <Header />
      <main className="main">
        <Exercise03 />
        <Table />
      </main>
      <Footer />
    </>
  )
}

export default App
