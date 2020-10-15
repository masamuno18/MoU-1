import React, { Component } from 'react'
import { Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Navbar extends Component {
  state = {
    activeItem: 'MOU'
  }

  componentDidMount () {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <Menu attached='top' secondary color="black" inverted size="massive">
        
        <Menu.Menu>
            <Menu.Item
              header
              as={Link}
              to="/"
              name='MOU'
              color='grey'
              active={false}
              content='MOU'
              onClick={this.handleItemClick}
            />
        </Menu.Menu>

        <Menu.Menu position='right'>
          
            <Menu.Item
              header
              as={Link}  
              to="/register"
              name='Register'
              color='grey'
              active={activeItem === 'Register'}
              content='Register'
              onClick={this.handleItemClick}
            />
         
            <Menu.Item
              header
              as={Link}
              to="/attendees"
              name='Attendees'
              color='grey'
              active={activeItem === 'Attendees'}
              content='Attendees'
              onClick={this.handleItemClick}
            />
             
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar