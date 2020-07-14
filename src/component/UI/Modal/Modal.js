import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/_Aux';
import Backdrop from '../Backdrop/Backdrop'

const modal = ( props ) => (
    <Aux>
    <Backdrop show={props.show} clicked={props.clicked}/>
        {(props.show) ? 
        <div className={classes.Modal}>
            {props.children}
        </div> : null } 
    </Aux>
);

export default modal;