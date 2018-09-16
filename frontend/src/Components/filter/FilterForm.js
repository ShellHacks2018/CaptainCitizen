import React from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
    right: {
        float:'right',
        marginRight: '50px',
    }
}

class FilterForm extends React.Component {
    state = {
        checked: [0],
      };

    handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
        newChecked.push(value);
    } else {
        newChecked.splice(currentIndex, 1);
    }

    this.setState({
        checked: newChecked,
        });
    };

    render(){
        return(
            <div style={{background: 'white'}}>
               <List>
                {['Post','Issues'].map(value => (
                     <ListItem key={value} role={undefined} 
                     dense 
                     button 
                     onClick={this.handleToggle(value)} >
                        <Checkbox checked={this.state.checked.indexOf(value) !== -1} tabIndex={-1} disableRipple />
                        <ListItemText primary={` ${value}`} />
                     </ListItem>
                ))}
                </List>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        issue: state.FilterR.issue,
        post: state.FilterR.post,
        infrastructure: state.FilterR.infrastructure,
        illegal_dumping: state.FilterR.illegal_dumping,
        biohazard: state.FilterR.biohazard,
        event: state.FilterR.event,
        food: state.FilterR.food,
        place: state.FilterR.place,
        cultural: state.FilterR.cultural,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleState: () => {dispatch({type:"CLICK"})},
        toggleCancel: () => {dispatch({type:"UNCLICK"})},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterForm)