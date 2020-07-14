import React from 'react'
import classes from './layout.module.css'
import Aux from '../../hoc/_Aux'
import Toolbar from '../Navigations/Toolbar/Toolbar'

const layout =(props) =>{
    return(
        <Aux>
            <div className = {classes.Layout}>
                <div>
                    <Toolbar />
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </Aux>
    )
}

export default layout;