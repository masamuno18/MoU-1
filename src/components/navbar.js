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
      <Menu attached='top' secondary size='massive' color="red" inverted>
        
        <Menu.Menu>
          <Link to='/'>
            <Menu.Item
              name='MOU'
              color='blue'
              active={false}
              content='MOU'
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu.Menu>

        <Menu.Menu position='right'>

          <Link to='/register'>
            <Menu.Item
              name='Register'
              color='blue'
              active={activeItem === 'Register'}
              content='Register'
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to='/attendees'>
            <Menu.Item
              name='Attendees'
              color='blue'
              active={activeItem === 'Attendees'}
              content='Attendees'
              onClick={this.handleItemClick}
            />
          </Link>
          
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar