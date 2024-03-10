import './App.css'
import Nav from './components/nav.jsx'
import Header from './components/header.jsx'
import Assid from './components/assid.jsx'
function App() {

  return (
    <>
     <div className=' bg-black/90 nanum flex flex-col h-screen relative ' >
        <Nav />
        <div
        className='flex flex-row justify-between items-center    w-full h-full '
        >
      
      <Assid  />
      
       <div className=''>
       <Header />
       </div>
       
        </div>
     </div>
    </>
  )
}

export default App
