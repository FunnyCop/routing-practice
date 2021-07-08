import React from "react"
import { Router } from "@reach/router"

import DynDisp from "../components/DynDisp.jsx"

import "./App.css"

const App = () => {
  return (
    <div className = "App">
      <Router>
        <DynDisp path = "/:val" />
      </Router>
    </div>
  )
}

export default App