import React from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  Container
} from 'semantic-ui-react'

import MainView from './views/mainview.js'
import Register from './views/form.js'
import Attendees from './views/attendee.js'
import Navbar from './components/navbar'

function App () {

  return (

    <Router className='App'>
      <div className='App'>
        <Container>
          <Navbar/>
        </Container>
        
        <Switch>
          <Route exact path='/' component={MainView} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/attendees' component={Attendees} />
        </Switch>

      </div>
      
    </Router>
  )
}

export default App