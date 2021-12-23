import React from 'react';
import classes from './Login.module.css';
import MockTestForm from './MockTestForm';

const MockTest =()=>{
    return(
        <div className={classes.container}>
        <div className={classes.left}>
            <MockTestForm />
          
        </div>
        </div>
    )
}

export default MockTest;