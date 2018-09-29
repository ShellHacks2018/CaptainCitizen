import React from 'react';
import AddItemC from './../Components/addItem/AddItemC';
import MapC from './../Components/map/MapC';

import { withStyles } from '@material-ui/core/styles';

// const styles = {
//   container: {
//     marginLeft: '40%',
//     marginRight: '25%',
//     marginBottom: '40%'
//   },
//   card: {
//     minWidth: '300px',
//     maxWidth: '345px'
//   }
// }

const HomePV = props => {
  const { classes } = props;
  return (
    <div>
      <div className={classes.container}>
        <h1>.</h1>
      </div>
      <MapC />
      <AddItemC />
    </div>
  );
};

export default withStyles()(HomePV);
