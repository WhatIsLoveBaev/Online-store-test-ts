import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import styles from './styles';

interface loginTypes {
    classes: any
}

const Login = ({ classes }: loginTypes): JSX.Element => {
    return (
        <div className={classes.loginContainer}>LOGIN</div>
    )
}
export default withStyles(styles)(Login)