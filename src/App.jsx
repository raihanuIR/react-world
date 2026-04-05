
import { Suspense } from 'react'
import './App.css'
import Countries from './Countries/Countries/Countries';


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {

  return (


    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
      {/* <h1 className='header'>React World on the go</h1> */}
    </>
  )
}

export default App
