import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { withStyles } from '@material-ui/core/styles'

import GetImageC from '../getImage/GetImageC';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing.unit * 2,
    },
  });

const AddItemV = (props) => {
  const { classes } = props

  return (
      <div>
      <Button variant="fab" color="primary" 
              aria-label="Add" className={classes.button}
              onClick={props.formOpenCB}>
          <AddIcon />
      </Button>

      <Dialog
          open={props.formOpen}
          onClose={props.formCloseCB}
          aria-labelledby="form-dialog-title">

          <DialogTitle id="form-dialog-title">Add Item to Map</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Add Picture
            </DialogContentText>

            <GetImageC getImage={props.getImage}/>

            <TextField
                autoFocus margin="dense" id="titleTF"
                label="Title" fullWidth
            />

            <FormControl component="fieldset">
                {/* <FormLabel component="legend">Type</FormLabel> */}
                <RadioGroup
                    row={true}
                    aria-label="Type"
                    name="typeRB"
                    className={classes.group}
                    value={props.selectedType}
                    onChange={props.typeChangeCB}
                >
                    <FormControlLabel value="post" control={<Radio />} label="Post" />
                    <FormControlLabel value="issue" control={<Radio />} label="Issue" />
 
                </RadioGroup>
            </FormControl>

            <FormGroup row>
              { Object.keys(props.tags).map( key => ( 
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={props.tags[key]}
                      onChange={props.checkClicked(key)}
                      value="checkedA"
                    />
                }
                label={key}
                /> )) 
              }
            </FormGroup>

          </DialogContent>
          <DialogActions>
            <Button onClick={props.formCloseCB} color="primary">
                Cancel
            </Button>
            <Button onClick={props.formCloseCB} color="primary">
                Submit
            </Button>
          </DialogActions>
      </Dialog>
      </div>
  );
}

export default withStyles(styles)(AddItemV);
