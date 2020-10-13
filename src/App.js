import React from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Header,
  Message,
  Segment,
  Label,
  Icon,
  Button,
  Image,
  Container
} from 'semantic-ui-react'

import MainView from './views/mainview.js'
import Register from './views/form.js'
import Navbar from './components/navbar'

function App () {
  return (
    <Router className='App'>
      <div className='App'>
        <Container>
          <Navbar/>
        </Container>
        <Container>
          
        </Container>
        <Switch>
          <Route exact path='/' component={MainView} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </div>
    </Router>
  )
}

export default App