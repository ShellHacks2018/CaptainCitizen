import React from 'react'
import MapC from './../Components/map/MapC'
import AddItemC from './../Components/addItem/AddItemC'

const style = {padding: '20%'};

const HomePV = (props) => {

  return (
    <div>
      <h1 style={style}>Home!</h1>
      <AddItemC />
      <MapC />
    </div>
  )
}

export default HomePV
