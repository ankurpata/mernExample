import React from 'react';
import {createUseStyles} from 'react-jss'
import { read } from 'fs';

const useStyles = createUseStyles({
    navigationHead :{
        color: 'red',
        fontWeight: 'bold'
    }
  });

const Header = ({ }) => {
    const classes = useStyles()

    return (
        <nav className={classes.navigationHead} role="navigation">
            <div className="container">
                <p>Welcome to Ideas.</p>
            </div>
        </nav>
    );

};

export default Header;