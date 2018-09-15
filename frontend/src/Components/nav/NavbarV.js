import React from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const styles = {
  flex: {
    flexGrow: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  loginButton: {
    marginRight: 50
  }
}



const NavbarV = (props) => {
  const { classes } = props
  if (props.currentAuth) {
    return (
      <AppBar position='fixed' color="secondary">
        <Toolbar>
          <Typography variant='title' color='inherit' className={classes.flex}>
                  Profile
          </Typography>
          <Link to='/'>
            <Button onClick={props.logoff} className={classes.logoutButton} color='inherit'>Logout</Button>
          </Link>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      // <div>
      //   <nav className='navbar navbar-dark bg-dark'>
      //     <Link className='navbar-brand' to='/home'>Captain Citizen</Link>
      //     <ul className='nav justify-content-center'>
      //       <li className='nav-item'>
      //         <Link className='nav-link active' to='/home'>Map</Link>
      //       </li>
      //     </ul>
      //   </nav>
      // </div>
    )
  } else {
    return (
      <AppBar position='fixed' color='secondary'>
        <Toolbar>
          <Typography variant='title' color='inherit' className={classes.flex}>
            Captain Citizen
          </Typography>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>



      // <div>
      //   <nav className='navbar navbar-dark bg-dark'>
      //     <Link className='navbar-brand' to='/'>Captain Citizen</Link>
      //   </nav>
      //   <Redirect to='/' />
      // </div>
    )
  }
}

NavbarV.propTypes = {
  currentAuth: PropTypes.bool,
  logoff: PropTypes.func
}


export default withStyles(styles)(NavbarV)