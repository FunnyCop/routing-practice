import React from "react"
import { Router } from "@reach/router"

import DynDisp from "../components/DynDisp.jsx"
import Hello from "../components/Hello.jsx"

import "./App.css"

const App = () => {
  return (
    <div className = "App">
      <Router>
        <DynDisp path = "/:val" />
        <Hello path = "/:word/:color/:backgroundColor" />
      </Router>
    </div>
  )
}

export default App