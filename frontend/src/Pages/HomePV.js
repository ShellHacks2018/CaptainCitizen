import React from 'react'
import AddItemC from './../Components/addItem/AddItemC'
import MapC from './../Components/map/MapC'
import FilterForm from '../Components/filter/FilterForm'

const HomePV = (props) => {
  return (
    <div>
      <h1>Home!</h1>
      <AddItemC />
      <MapC />
      <FilterForm />
    </div>
  )
}

export default HomePV
