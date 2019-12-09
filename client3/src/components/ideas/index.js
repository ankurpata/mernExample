import React from 'react';
import { createUseStyles } from 'react-jss'
import { read } from 'fs';

const useStyles = createUseStyles({
    navigationHead: {
        color: 'red',
        fontWeight: 'bold'
    }
});

class Ideas extends React.Component {
    state = {isToggleOn: true};

    activateLasers = (e) =>{
        e.preventDefault();
        console.log('button clicked');
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
    }
    render() {
        return <div>
            <p>idea1</p>
            <p>idea2</p>
            <p>idea3</p>
            <button onClick={this.activateLasers}>
                Add new Idea ({this.state.isToggleOn ? 'ON' : 'OFF'})
            </button>
        </div>;
    }
}
export default Ideas;