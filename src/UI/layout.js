import React from 'react'
import classes from './layout.module.css'

const layout =(props) =>{
    return(
        <div className = {classes.Layout}>
            <div>
                [Layout] Taskbar and nav links
            </div>
            <div>
                {props.children}
            </div>
        </div>

    )
}

export default layout;