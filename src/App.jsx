import { useState } from 'react'
import CardPart from './components/CardPart'
import HeadingBanner from './components/HeadingBanner'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="">
      <Navbar />
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>

          <HeadingBanner />
        </div>
        <div>
          <CardPart />
        </div>
      </div>
    </div>
  )
}

export default App
