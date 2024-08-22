
import logo from './assets/logo.png'
import './App.css'
import Navbar from './components/navbar'
import HeroImage from './assets/HeroImag.png'
import Footer from './components/Footer'

// let HeroImage = 'https://cdn.magicdecor.in/com/2023/08/29165228/Lord-Ganesha-Sketch-Wallpaper-for-Wall-710x488.jpg'


function App() {


  return (
    <>
      <div>
        <Navbar/>

      </div>
      <div className='ddiv'>

        <img src={HeroImage} alt="" className='ganeshji h-92'/>

      </div>
        <img src={logo} alt="" className='thali'/>

        <div className="fixed bottom-0 left-0 w-full bg-gray-100 text-gray-700 py-8 px-4 border-t border-gray-300" >
          <Footer/>
        </div>
      
    </>
  )
}

export default App
