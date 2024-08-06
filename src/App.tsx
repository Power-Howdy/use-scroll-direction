import './App.css'
import { useScrollDirection } from './use-scroll-direction'

function App() {
  const dir = useScrollDirection();
  console.log(dir);
  return (
    <>
      <div className="fixed-div">
        <h1>Use-scroll-direction Showcase</h1>
        <p>Try scrolling your mouse over this page.</p>
        <p>Scrolling direction is <span className='dir'>{dir}</span></p>
      </div>
      
      <div className="placeholder-div">
        <p className="placeholder-text">Placeholder div for scrolling</p>
      </div>
    </>
  )
}

export default App
