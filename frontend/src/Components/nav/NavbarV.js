import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NavDrawer from './NavDrawer'

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
  },
  logoutButton: {
    text: 'white'
  }
}

const NavbarV = (props) => {
  const { classes } = props
  if (props.currentAuth) {
    return (
      <AppBar position='fixed' color='secondary'>
        <Toolbar>
          <Typography variant='title' color='inherit' className={classes.flex}> Profile </Typography>
          <Link to='/'>
            <Button onClick={props.logoff} className={classes.logoutButton} color='inherit'>Logout</Button>
          </Link>
          <NavDrawer />
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  } else {
    return (
      <AppBar position='fixed' color='secondary'>
        <Toolbar>
          <Typography variant='title' color='inherit' className={classes.flex}> Captain Citizen </Typography>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

    )
  }
}

NavbarV.propTypes = {
  currentAuth: PropTypes.bool,
  logoff: PropTypes.func
}

export default withStyles(styles)(NavbarV)
