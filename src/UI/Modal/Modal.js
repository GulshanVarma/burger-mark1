import React from 'react';

import classes from './Modal.module.css';
import Auxy from '../../hoc/Auxy';
import Backdrop from '../Backdrop/Backdrop'

const modal = ( props ) => {
    return(
    <Auxy>
        <Backdrop show={props.show} clicked={props.clicked} />
        {(props.show)?
            <div className={classes.Modal}>
            <div>
                {props.children}
            </div>
        </div>:null
        }
    </Auxy>
    );
}
export default modal;