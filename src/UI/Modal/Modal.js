import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../hoc/Aux';

const modal = ( props ) => (
    <Aux>
        <div className={classes.Container}>
            <div
                className={classes.Modal}>
                    <p className={classes.warning}>{props.children}</p>
            </div>
        </div>
    </Aux>
);

export default modal;