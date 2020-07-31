import React from 'react'
import classes from './Button.module.css'
// recieve button name
// return <Button> based on props.type and "name".children and .method TO EXECUTE

const Button = (props) =>{
    console.log('in buttonn',props);
    let t_class = [classes.Button]
    if(props.type === 'red'){
        t_class.push(classes.Red)
    }
    else{t_class.push(classes.Green)}
    return(
        props.show ? <button className={t_class.join(' ')} onClick={props.method}>{props.children}</button> : <button className={t_class.join(' ')} disabled={true}>{props.children}</button>
    )
}

export default Button;