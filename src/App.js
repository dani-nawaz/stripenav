import Hero from './components/Hero'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Submenu } from './components/Submenu'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Submenu />
      <Hero />
    </>
  )
}

export default App
