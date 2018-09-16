import React from 'react'
import MapC from './../Components/map/MapC'

const style = {padding: '20%', alignSelf: 'center'};

const HomePV = (props) => {

  return (
    <div>
      <h1 style={style}>Home!</h1>
      <MapC />
    </div>
  )
}

export default HomePV
