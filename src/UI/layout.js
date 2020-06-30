import React from 'react'
import classes from './layout.module.css'
import Auxy from '../hoc/Auxy'

const layout =(props) =>{
    return(
        <Auxy>
            <div className = {classes.Layout}>
                <div>
                    [Layout] Taskbar and nav links
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </Auxy>
    )
}

export default layout;