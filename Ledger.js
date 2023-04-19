import {React, useState} from 'react'
import Header from '../components/Header'

function Ledger() {
  return (
    <div> 

        <Header/>

    

        <button
            type="button"
            className="inline-flex relative top-40 right-1 left-5 px-5 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            
        >
            Connect to the XRP ledger 
        </button>
    

    </div>
  )
}

export default Ledger