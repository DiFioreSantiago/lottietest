import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import test from './115478-webdesign-support.json'
import './App.css'
function App() {
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: test,
    })
  }, [])
  return (
    <div className="App">
      <div className='container' ref={container}/>
    </div>
  )
}
export default App