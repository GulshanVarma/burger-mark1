import React from 'react'
import classes from './layout.module.css'
import Aux from '../../hoc/Aux'

const layout =(props) =>{
    return(
        <Aux>
            <div className = {classes.Layout}>
                <div>
                    [Layout] Taskbar and nav links
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </Aux>
    )
}

export default layout;